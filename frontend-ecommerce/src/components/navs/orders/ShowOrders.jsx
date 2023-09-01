/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
/* LOCAL STORAGE */
import { orderData } from "./OrderData";


export default function ShowOrders() {
    const columns = useMemo(
        () => [
            {
                accessorKey: "id", // Nombre de propiedad en el array de productos
                header: "Id",
            },
            {
                accessorKey: "ref", // Nombre de propiedad en el array de productos
                header: "Ref / Transacción",
            },
            {
                accessorKey: "date", // Nombre de propiedad en el array de productos
                header: "Fecha",
            },
            {
                accessorKey: "paymentMethod", // Nombre de propiedad en el array de productos
                header: "Método de pago",
            },
            {
                accessorKey: "status", // Nombre de propiedad en el array de productos
                header: "Estado",
            },
            {
             
                header: "Acciones",
            },
        ],
        []
    );

    return <MaterialReactTable columns={columns} data={orderData} />;
}
