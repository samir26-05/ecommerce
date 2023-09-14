/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

export default function StockProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Cambia 'null' por 'null' (sin comillas)
  const [tableData, setTableData] = useState(() => products);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      try {
        axios.put(`http://localhost:3000/product/update/${row.getValue("product_id")}`,
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
            name: values["name"],
            descripcion: values["descripcion"],
            price: values["price"],
            stock: values["stock"],
            section: values["section.section"],
            size: values["size.size"],
            img_video: values["img_video"],
          }
        );
        tableData[row.index] = values;
        //send/receive api updates here, then refetch or update local table data for re-render
        setTableData([...tableData]);
        exitEditingMode(); //required to exit editing mode and close modal
      } catch (error) {
        setError(error);
        console.log("Error al obtener los clientes:", error);
      }
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !confirm(
          `¿Está seguro de eliminar el producto ${row.getValue("name")}?`
        )
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      try {
        axios.delete(`http://localhost:3000/product/delete/${row.getValue("product_id")}`,{
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
            data: {},
          }
        );
        tableData.splice(row.index, 1);
        setTableData([...tableData]);
      } catch (error) {
        setError(error);
        console.log("Error al obtener los productos:", error);
      }
    },

    [tableData]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "product_id",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: "name",
        header: "Nombre",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "descripcion",
        header: "Descripción",
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "price",
        header: "Precio",
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
          type: "number",
        }),
      },
      {
        accessorKey: "stock",
        header: "Cantidad",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "section.section",
        header: "Sección",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "size.size",
        header: "Talla",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...cell,
        }),
      },
      {
        accessorKey: "img_video",
        header: "Imagen",
        Cell: ({ renderedCellValue }) => (
          <img src={renderedCellValue} alt="" style={{ width: "50px" }} />
        ),
      },
    ],
    []
  );

  async function fetchProducts() {
    try {
      const response = await axios.get("http://localhost:3000/product/");
      setProducts(response.data.result);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      fetchProducts();
    }, 1000);

    return () => clearInterval(interval);
    // Llama a la función fetchProducts dentro del efecto
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
            data={products}
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
                  <IconButton
                    onClick={() => {
                      handleDeleteRow(row);
                    }}
                  >
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
                  Lista de Productos
                </Typography>
              </>
            )}
          />
        </>
      )}
    </div>
  );
}