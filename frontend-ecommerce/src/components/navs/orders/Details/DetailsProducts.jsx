/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

const TableDetailsProducts = ({products}) => {
  console.log(products,'tabla');
    //should be memoized or stable
    const columns = useMemo(
      () => [
        {
          accessorKey: 'img_video', //access nested data with dot notation
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
  
    return <MaterialReactTable columns={columns} data={products} />;
  };
  
  export default TableDetailsProducts;