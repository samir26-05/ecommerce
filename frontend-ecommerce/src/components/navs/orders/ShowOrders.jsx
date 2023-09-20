/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
  Box,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { TbTruckDelivery } from 'react-icons/tb';
import axios from 'axios';
import Swal from "sweetalert2";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { GiCheckboxTree } from 'react-icons/gi';
import DetailsOrder from './DetailsOrders';

const CrudOrders = () => {
  const [orders, setOrders] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [tableData, setTableData] = useState(() => orders);
  const [setError] = useState();
  
  async function fetchOrders() {
    try {
      const response = await axios.get(`http://localhost:3000/order`,{
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error al intentar obtener la información!",
      });
    }
  }

  useEffect(() => {
    fetchOrders()
  },)
  const [showTable, setShowTable] = useState(true);
  const [showDetails, setShowDetails] = useState(false);



  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

 
  const handleShowDetails = () => {
    setShowTable(false);
    setShowDetails(true);
  };

  useEffect(() => {
    console.log(showTable, 'show table');
    console.log(showDetails, 'show details');
  }, [showTable, showDetails]);




  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

/*   const handleDeleteRow = useCallback(
    (row) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue('name')}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  ); */



  const columns = useMemo(
    () => [
      {
        accessorKey: 'id_order',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 20,
      },
      {
        accessorKey: 'user_id',
        header: 'Usuario',
        size: 20,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
        }),
      },
      {
        accessorKey: 'createdAt',
        header: 'Fecha de creación',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
        }),
      },
      {
        accessorKey: 'subtotal',
        header: 'Subtotal',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
          type: 'number',
        }),
      },
      {
        accessorKey: 'total_value',
        header: 'Total',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
          type: 'number',
        }),
      },
      {
        accessorKey: 'paymentMethod',
        header: 'Método de pago',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
        }),
      },
      {
        accessorKey: 'id_state',
        header: 'Estado',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
        }),
      },
    ],
    [],
  );

  return (
     <>
      {showTable && (
        <>
          <div style={{ display: "flex", }}>
            <h3 style={{ paddingButton: "50px" }}><GiCheckboxTree style={{ fontSize: "40px", marginTop: "-5px" }} /> MIS PEDIDOS</h3>
          </div>

          <MaterialReactTable
            displayColumnDefOptions={{
              'mrt-row-actions': {
                muiTableHeadCellProps: {
                  align: 'center',
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
              <Box sx={{ display: 'flex', gap: '1rem' }}>
                <Tooltip arrow placement="left" title="Editar">
                  <IconButton onClick={() => table.setEditingRow(row)}>
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="right" title="Eliminar">
                  <IconButton /* onClick={() => handleDeleteRow(row)} */>
                    <Delete style={{ fill: "red" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip arrow placement="bottom" title="Ver pedido">
                  <IconButton /* onClick={() => handleDeleteRow(row)} --Función */>
                    <VisibilityIcon style={{fill:"black"}}/>
                  </IconButton>
                </Tooltip>
              </Box>
            )}
            renderTopToolbarCustomActions={() => (
              <>
                <div></div>
                <Typography style={{ fontSize: "1.2rem", fontWeight: "500", width: "20rem", textAlign: "end" }}>Lista de Pedidos</Typography>
              </>
            )}
          />
        </>
      )}
      {showDetails && (
  <DetailsOrder onShowTable={handleShowDetails} />
)}
    </>
  );
};


export default CrudOrders;
