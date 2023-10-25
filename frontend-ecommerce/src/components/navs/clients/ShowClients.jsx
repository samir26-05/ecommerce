import { useState, useEffect } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { useCallback, useMemo } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { PiUserList } from "react-icons/pi";
import { RxReload } from "react-icons/rx";

export default function ShowClients() {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  const [tableData, setTableData] = useState(() => clients);
  const [validationErrors, setValidationErrors] = useState({});
  const urlBackend = import.meta.env.VITE_BACKEND_URL

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      try {
        const response = await axios.put(
          `${urlBackend}/user/personal_information/id/${row.getValue("user_id")}`,
          {
            nombre: values["Personal_information.nombre"],
            apellido: values["Personal_information.apellido"],
            Phone_number: values["Personal_information.Phone_number"],
            address: values["Personal_information.address"],
            city: values["Personal_information.city"],
            country: values["Personal_information.country"],
            postalcode: values["Personal_information.postalcode"],
            state: values["Personal_information.state"],
          },
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        );

        if (response.status === 200) {
          tableData[row.index] = values;
          setTableData([...tableData]);
          exitEditingMode();
        }
        fetchClients();
      } catch (error) {
        setError(error);
      }
    }
  };


  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback((row) => {
    if (
      !confirm(`¿Está seguro de eliminar al usuario ${row.getValue("Personal_information.nombre")}?`)
    ) {
      return;
    }
    //send api delete request here, then refetch or update local table data for re-render
    try {
      axios.delete(`${urlBackend}/user/delete/${row.getValue("user_id")}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
        data: {},
      });
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
      setTimeout(() => {
        fetchClients();
      }, 1000);
    } catch (error) {
      setError(error);
    }
  },
    [tableData]
  );

  const handleReload = () => {
    fetchClients();
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "user_id",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: "Personal_information.nombre",
        header: "Nombre",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "Personal_information.apellido",
        header: "Apellido",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "Personal_information.Phone_number",
        header: "# Contacto",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
          type: "number",
        }),
      },
      {
        accessorKey: "Personal_information.address",
        header: "Dirección",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "Personal_information.city",
        header: "Ciudad",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "Personal_information.country",
        header: "País",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "Personal_information.postalcode",
        header: "Código Postal",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "Personal_information.state",
        header: "Estado",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
    ],
    []
  );


  async function fetchClients() {
    try {
      const response = await axios.get(`${urlBackend}/user/User`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
        data: {},
      });
      setClients(response.data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchClients();

  }, []);



  return (
    <div>
      {error ? (
        <div>Error al obtener los clientes: {error.message}</div>
      ) : (
        <>
          <h3 style={{ paddingButton: "50px", left: 570 }}> <PiUserList style={{ fontSize: "40px", marginTop: "-5px" }} /> MIS CLIENTES</h3>
          <MaterialReactTable
            displayColumnDefOptions={{
              "mrt-row-actions": {
                muiTableHeadCellProps: {
                  align: "center",
                },
                size: 120,
              },
            }}
            columns={columns}
            data={clients}
            editingMode="modal" //default
            enableColumnOrdering
            enableEditing
            onEditingRowSave={handleSaveRowEdits}
            onEditingRowCancel={handleCancelRowEdits}
            renderRowActions={({ row, table }) => (
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Tooltip arrow placement="left" title="Edit">
                  <IconButton onClick={() => table.setEditingRow(row)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="right" title="Delete">
                  <IconButton onClick={() => {
                    handleDeleteRow(row);
                  }}>
                    <Delete style={{ fill: "red" }} />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
            renderTopToolbarCustomActions={() => (
              <>
                <Tooltip arrow placement="bottom" title="Reload">
                  <IconButton onClick={() => handleReload()}>
                    <RxReload/>
                  </IconButton>
                </Tooltip>
                <Typography
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    width: "20rem",
                    textAlign: "end",
                  }}
                >
                  Lista de Clientes
                </Typography>
              </>
            )}
          />
        </>
      )}
    </div>
  );
}

/* eslint-disable react/prop-types */
