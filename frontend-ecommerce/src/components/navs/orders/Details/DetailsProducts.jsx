import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

const TableDetailsProducts = () => {
    //should be memoized or stable
    const columns = useMemo(
      () => [
        {
          accessorKey: 'img', //access nested data with dot notation
          header: 'Producto',
          size: 200,
        },
        {
          accessorKey: 'name',
          header: 'Nombre',
          size: 250,
        },
        {
          accessorKey: 'description', //normal accessorKey
          header: 'Descripcion',
          size: 200,
        },
        {
          accessorKey: 'quantity',
          header: 'Cantidad',
          size: 150,
        }
      ],
      [],
    );
  
    return <MaterialReactTable columns={columns} data={{}} />;
  };
  
  export default TableDetailsProducts;