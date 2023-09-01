/* eslint-disable no-unused-vars */
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
/* LOCAL STORAGE */
import { clientData } from "./ClientsData";


export default function ShowClients() {
    const columns = useMemo(
        () => [
            {
                accessorKey: "id", // Nombre de propiedad en el array de productos
                header: "Id",
            },
            {
                accessorKey: "name", // Nombre de propiedad en el array de productos
                header: "Nombre",
            },
            {
                accessorKey: "phoneNumber", // Nombre de propiedad en el array de productos
                header: "Teléfono",
            },
            {
                accessorKey: "role", // Nombre de propiedad en el array de productos
                header: "Rol",
            },
            {
                accessorKey: "address", // Nombre de propiedad en el array de productos
                header: "Dirección",
            },
            {
                accessorKey: "city", // Nombre de propiedad en el array de productos
                header: "Ciudad",
            },
            {
                accessorKey: "orderCount", // Nombre de propiedad en el array de productos
                header: "Cant Pedidos",
            },
        ],
        []
    );

    return <MaterialReactTable columns={columns} data={clientData} />;
}
