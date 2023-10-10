/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { RxReload } from "react-icons/rx"
import Swal from "sweetalert2";

export default function StockProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Cambia 'null' por 'null' (sin comillas)
  const [tableData, setTableData] = useState(() => products);
  const [validationErrors, setValidationErrors] = useState({});
  const urlBackend = import.meta.env.VITE_BACKEND_URL 
  

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    //objeto para reconocer los values
    const updatedData = {
      name: values["name"],
      descripcion: values["descripcion"],
      price: parseFloat(values["price"]),
      stock: parseInt(values["stock"]),
      section: values["section.section"],
      size: values["size.size"],
    };

    try {
      //recopilar datos y enaviarlos por una solicitud http
      const formData = new FormData();
      formData.append("data", JSON.stringify(updatedData));
      formData.append("name", updatedData.name);
      formData.append("descripcion", updatedData.descripcion);
      formData.append("price", updatedData.price);
      formData.append("stock", updatedData.stock);
      formData.append("section.section", updatedData.section);
      formData.append("size.size", updatedData.size);

      console.log("Esto es un formData: ");
      console.log(formData);

      //captura la id de el producto
      const productId = row.getValue("product_id");

      const response = await axios.put(
        `${urlBackend}/product/update/${productId}`,
        formData,
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );      
      /* const successMessage = response.data.message; */
        Swal.fire({
          icon: "success",
          title: "Producto actualizado con éxito",
          iconColor: "#09ff00",
          color: "#000",
          showConfirmButton: false,
          confirmButtonColor: "#000",
          timer: 1000,
        });
      
      //cerrar modal
      exitEditingMode();
      setTimeout(() => {
        fetchProducts()
      }, 1000);
    } catch (error) {
      console.error("Error en la solicitud:", error);

      if (error.response) {
        // la solicitud se realizó, pero el servidor devolvió un código de estado que no es 2xx
        console.error("Respuesta del servidor:", error.response.data);
      } else if (error.request) {
        // solicitud no realizada
        console.error("No se pudo completar la solicitud:", error.request);
      } else {
        // otro tipo de error
        console.error("Error:", error.message);
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
        axios.delete(
          `${urlBackend}/product/delete/${row.getValue("product_id")}`,
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
            data: {},
          }
        );
        tableData.splice(row.index, 1);
        setTableData([...tableData]);
        setTimeout(() => {
          fetchProducts()
        }, 1000);
      } catch (error) {
        setError(error);
        console.log("Error al obtener los productos:", error);
      }
    },

    [tableData]
  );

  const handleReload = () => {
    fetchProducts()
  }

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
      const response = await axios.get(`${urlBackend}/product/`);
      setProducts(response.data.result);
      // console.log(response.data.result);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  }

  useEffect(() => {
      fetchProducts(); 
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

