/* eslint-disable react/prop-types */
import { useCallback, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { orderData } from './OrderData';

const CrudOrders = () => {
  const [tableData, setTableData] = useState(() => orderData);
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

  const handleDeleteRow = useCallback(
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
  );



  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: 'ref',
        header: 'Referencia / Transfer',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
        }),
      },
      {
        accessorKey: 'date',
        header: 'Fecha',
        size: 140,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
        }),
      },
      {
        accessorKey: 'amount',
        header: 'Valor',
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
          type: 'number',
        }),
      },
      {
        accessorKey: 'paymentMethod',
        header: 'Método de pago',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
        }),
      },
      {
        accessorKey: 'status',
        header: 'Estado',
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...(cell),
        }),
      },
    ],
    [],
  );

  return (
    <>
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
        data={tableData}
        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton onClick={() => handleDeleteRow(row)}>
                <Delete style={{fill:"red"}}/>
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
            <>
            <div></div>
            <Typography style={{fontSize:"1.2rem", fontWeight:"500", width:"20rem", textAlign:"end"}}>Lista de Pedidos</Typography>
            </>
        )}
      />
    </>
  );
};


export default CrudOrders;
