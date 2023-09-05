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
            accessorKey: "nombre",
            header: "Nombre",
        },
        {
            accessorKey: "apellido",
            header: "Apellido",
        },
        {
            accessorKey: "phone_number",
            header: "# Contacto",
        },
        {
            accessorKey: "address",
            header: "Dirección",
        },
        {
            accessorKey: "city",
            header: "Ciudad",
        },
    ];

    useEffect(() => {
        async function fetchClients() {
            try {
                const response = await axios.get("http://localhost:3000/user/GetUser", {
                    headers: {
                        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzksInVzZXJuYW1lIjoic2Fvcm96Y28yNjA1MDIiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2OTM5NTE4ODQsImV4cCI6MTY5Mzk3NzA4NH0.mU8_FgYW1C8Y_CQSZ0HPrCiwxroncoELrRg8Zqi0guA"
                    },
                });
                setClients(response.data.result);
                console.log(response)
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
