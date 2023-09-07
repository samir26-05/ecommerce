import { useState, useEffect } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";

export default function ShowClients() {
    const [clients, setClients] = useState([]);
    const [error, setError] = useState(null); // Cambia 'null' por 'null' (sin comillas)

    const columns = [
        {
            accessorKey: "personal_id",
            header: "Id",
        },
        {
            accessorKey: "Personal_information.nombre",
            header: "Nombre",
        },
        {
            accessorKey: "Personal_information.apellido",
            header: "Apellido",
        },
        {
            accessorKey: "Personal_information.phone_number",
            header: "# Contacto",
        },
        {
            accessorKey: "Personal_information.address",
            header: "Dirección",
        },
        {
            accessorKey: "Personal_information.city",
            header: "Ciudad",
        },
    ];

    useEffect(() => {
        async function fetchClients() {
            try {
                const response = await axios.get("http://localhost:3000/user/GetUser", {
                    headers: {
                        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJzYW9yb3pjbzI2MDUwMiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5NDA5NDY3NCwiZXhwIjoxNjk0MTE5ODc0fQ.qexd4Wo3EyUvwKIGj5cub61VssCoXkHZstpFhREL1yg"
                    },
                    data: {}
                });
                setClients(response.data);
                console.log(response.data, '❤️❤️❤️❤️')
            } catch (error) {
                setError(error);
                console.log("Error al obtener los clientes:", error);
            }
        }

        fetchClients();
    }, []);

    return (
        <div>
            {error ? (
                <div>Error al obtener los clientes: {error.message}</div>
            ) : (
                <MaterialReactTable columns={columns} data={clients} />
            )}
        </div>
    );
}
