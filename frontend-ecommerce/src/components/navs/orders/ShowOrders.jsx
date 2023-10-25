/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, MenuItem, Tooltip, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { TbTruckDelivery } from "react-icons/tb";
import axios from "axios";
import Swal from "sweetalert2";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { GiCheckboxTree } from "react-icons/gi";
import DetailsOrder from "./Details/DetailsOrder";

const CrudOrders = () => {
  const [orders, setOrders] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [seeOrder, setSeeOrder] = useState(false);
  const [row, setRow] = useState([]);
  const [tableData, setTableData] = useState(() => orders);
  const [, setError] = useState();
  const urlBackend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${urlBackend}/order`, {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        });
        setOrders(response.data);
      } catch (error) {
        setError(error);
        Swal.fire({
          icon: "error",
          title: "Ocurrió un error al intentar obtener la información!",
          iconColor: "#ff0000",
          color: "#000000",
          showConfirmButton: false,
          confirmButtonColor: "#000",
          timer: 1000,  
        });
      }
    };

    fetchOrders();
  }, []);
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

  const columns = useMemo(
    () => [
      {
        accessorKey: "id_order",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 20,
      },
      {
        accessorKey: "user_id",
        header: "Usuario",
        size: 20,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "createdAt",
        header: "Fecha de creación",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "subtotal",
        header: "Subtotal",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
          type: "number",
        }),
      },
      {
        accessorKey: "total_value",
        header: "Total",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
          type: "number",
        }),
      },
      {
        accessorKey: "metodo",
        header: "Método de pago",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "id_state",
        header: "Estado",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
    ],
    []
  );
  const ViewOrder = (row) => {
    setSeeOrder(!seeOrder);
    setRow(row);
  };

  return (
    <>
      {seeOrder ? (
        <DetailsOrder order={row} seeOrder={seeOrder} />
      ) : (
        <>
          <div style={{ display: "flex" }}>
            <h3 style={{ paddingButton: "50px" }}>
              <GiCheckboxTree style={{ fontSize: "40px", marginTop: "-5px" }} />{" "}
              MIS PEDIDOS
            </h3>
          </div>

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
            data={orders}
            editingMode="modal" //default
            enableColumnOrdering
            enableEditing
            onEditingRowSave={handleSaveRowEdits}
            onEditingRowCancel={handleCancelRowEdits}
            renderRowActions={({ row, table }) => (
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Tooltip arrow placement="left" title="Editar">
                  <IconButton onClick={() => table.setEditingRow(row)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="bottom" title="Ver pedido">
                  <IconButton onClick={() => ViewOrder(row.original)}>
                    <VisibilityIcon style={{ fill: "black" }} />
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
                  Lista de Pedidos
                </Typography>
              </>
            )}
          />
        </>
      )}
    </>
  );
};

export default CrudOrders;
