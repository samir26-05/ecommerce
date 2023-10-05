/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

const TableDetailsProducts = ({products}) => {
    //should be memoized or stable
    const columns = useMemo(
      () => [
        {
          accessorKey: 'img', //access nested data with dot notation
          header: 'Imagen',
          Cell: ({ renderedCellValue }) => (
            <img src={renderedCellValue} alt="" style={{ width: "50px" }} />
          ),
        },
        {
          accessorKey: 'producto',
          header: 'Nombre',
          size: 250,
        },
        {
          accessorKey: 'valor_unitario',
          header: 'Valor Unitario',
          size: 200,
        },
        {
          accessorKey: 'valor',
          header: 'Valor Total',
          size: 200,
        },
        {
          accessorKey: 'cantidad',
          header: 'Cantidad',
          size: 150,
        }
      ],
      [],
    );
  
    return <MaterialReactTable columns={columns} data={products} />;
  };
  
  export default TableDetailsProducts;