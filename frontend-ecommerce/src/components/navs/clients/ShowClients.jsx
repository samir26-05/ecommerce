import { useState, useEffect } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { useCallback, useMemo } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function ShowClients() {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null); // Cambia 'null' por 'null' (sin comillas)

  const [tableData, setTableData] = useState(() => clients);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
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
        axios.delete(`http://localhost:3000/user/delete/${row.getValue("user_id")}`, {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
            data: {},
          });
        tableData.splice(row.index, 1);
        setTableData([...tableData]);
      } catch (error) {
        setError(error);
        console.log("Error al obtener los clientes:", error);
      }
    },

    [tableData]
  );

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
    ],
    []
  );

  useEffect(() => {
    async function fetchClients() {
      try {
        const response = await axios.get("http://localhost:3000/user/User", {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
          data: {},
        });
        setClients(response.data);
        console.log(response.data, "❤️❤️❤️❤️");
      } catch (error) {
        setError(error);
        console.log("Error al obtener los clientes:", error);
      }
    }

    fetchClients();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error al obtener los clientes: {error.message}</div>
      ) : (
        <>
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
                <div></div>
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
