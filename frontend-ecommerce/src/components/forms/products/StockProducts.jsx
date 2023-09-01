/* eslint-disable no-unused-vars */
import { useEffect, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
/* LOCAL STORAGE */
import {data} from '../../../data.js'




export default function StockProducts() {

/*     useEffect(() => {
        const getProduct = () => {
            fetch('http://192.168.12.43:3000/product')
                .then(res => res.json())
                .then(res => console.log(res))
        }
        getProduct();
    
    }, []); */


    const columns = useMemo(
        () => [
            {
                accessorKey: "id", // Nombre de propiedad en el array de productos
                header: "Id",
            },
            {
                accessorKey: "nameProduct", // Nombre de propiedad en el array de productos
                header: "Producto",
            },
            {
                accessorKey: "price", // Nombre de propiedad en el array de productos
                header: "Precio",
            },
            {
                accessorKey: "quantity", // Nombre de propiedad en el array de productos
                header: "Cantidad",
            },
            {
                accessorKey: "img", // Nombre de propiedad en el array de productos
                header: "Imagen",
                Cell: ({ renderedCellValue }) => <img src={renderedCellValue} alt="" style={{ width: "50px" }} />,
            }
        ],
        []
    );

    return <MaterialReactTable columns={columns} data={data} />;
}
