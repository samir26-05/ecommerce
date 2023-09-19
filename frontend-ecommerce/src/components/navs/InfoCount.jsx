import { useState, useEffect } from 'react';
/* MATERIAL UI */
import { Button, Accordion, Typography, AccordionSummary, AccordionDetails, Card, ListItem, Avatar, ListItemText } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
/* COMPONENTS */
import UpdatePass from '../forms/infoUser/UpdatePass';
import UpdateEmail from '../forms/infoUser/UpdateEmail';
import DataPersonal from '../forms/infoUser/DataPersonal'
import axios from "axios";
import { BiUserCircle } from 'react-icons/bi'

export default function InfoCountUser() {
    const [oneClients, setOneClients] = useState({
        nombre: "",
        apellido: "",
        Phone_number: "",
        address: "",
        city: "",
        country: "",
        postalcode: "",
        state: "",
    });
    const [error, setError] = useState();
    const [showAccordions, setShowAccordions] = useState(false);

    const token = localStorage.getItem("accessToken")
    const userName = localStorage.getItem("username");
    console.log(token)

    useEffect(() => {
        async function fetchOneClients() {
            try {
                const response = await axios.get(
                    `http://localhost:3000/user/name/${userName}`,
                    {
                        headers: {
                            accessToken: token,
                        },
                    }
                );
                setOneClients(response.data);
                console.log(response.data, "❤️❤️❤️")
            } catch (error) {
                setError(error);
                console.log(error, "❤️❤️❤️");
            }
        }

        fetchOneClients();
    }, []);

    const handleUpdateProfileClick = () => {
        setShowAccordions(true);
    };

    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: "flex", }}>
                <h3 style={{ paddingButton: "50px" }}><BiUserCircle style={{ fontSize: "40px", marginTop: "-5px" }} /> MI CUENTA</h3>
                <Button
                    variant="contained"
                    className="whithoutOutline"
                    style={{ backgroundColor: "black", height: 50, marginLeft: "72%", marginBotton: "10px" }}
                    type="submit"
                    value="registrar"
                    onClick={handleUpdateProfileClick}
                >
                    ACTUALIZAR PERFIL
                </Button>
            </div>

            <div style={{ paddingTop: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Card sx={{ display: 'flex', width: "60%", marginBtton: 20, justifyContent: "space-between" }}>
                        <ListItem className="ListItem" style={{ marginLeft: "90px" }}>
                            <Avatar className="Avatar" />
                            <ListItemText primary={oneClients?.Personal_information?.nombre + " " + oneClients?.Personal_information?.apellido}
                                secondary={userName} style={{ marginLeft: "10px" }} />
                        </ListItem>
                        <ListItem sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="SILVER USER" />
                        </ListItem>
                    </Card>
                    <Card sx={{ display: 'flex', width: "10%" }}>
                        <ListItem className="ListItem">
                            <ListItemText primary={oneClients?.Personal_information?.nombre} secondary="Todos mis pedidos" />
                        </ListItem>
                    </Card>
                    <Card sx={{ display: 'flex', width: "10%" }}>
                        <ListItem className="ListItem">
                            <ListItemText primary={oneClients?.Personal_information?.nombre} secondary="Pedidos exitosos" />
                        </ListItem>
                    </Card>
                    <Card sx={{ display: 'flex', width: "10%" }}>
                        <ListItem className="ListItem">
                            <ListItemText primary={oneClients?.Personal_information?.nombre} secondary="Pedidos pendientes" />
                        </ListItem>
                    </Card>
                </div>
                <Card sx={{ display: 'flex', justifyContent: "space-between", height: 100, marginTop: 5, marginBottom: 1 }}>
                    <ListItem sx={{ py: 1, px: 10 }}>
                        <ListItemText primary="Nombre(s)" secondary={oneClients?.Personal_information?.nombre} />
                    </ListItem>
                    <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Apellido(s)" secondary={oneClients?.Personal_information?.apellido} />
                    </ListItem>
                    <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Email" secondary={oneClients?.Personal_information?.Phone_number} />
                    </ListItem>
                    <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Contacto" secondary={oneClients?.Personal_information?.Phone_number} />
                    </ListItem>
                    <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Direccion" secondary={oneClients?.Personal_information?.address} />
                    </ListItem>

                </Card>

                {showAccordions && (
                    <>
                        <Accordion style={{ marginTop: "30px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>CONTRASEÑA</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ paddingButton: "50px" }}>
                                    Por favor, recuerda que la nueva contraseña debe contener un número y una letra mayúscula, además de un mínimo de 8 caracteres.
                                </Typography>
                                <UpdatePass />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>TU EMAIL</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Si quieres cambiar el mail y/o la contrseña asociados a tu cuenta completa los siguientes campos.
                                </Typography>
                                <UpdateEmail />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>DATOS PERSONALES Y FACTURACION</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Si quieres cambiar informacion personal asociados a tu cuenta completa los siguientes campos.
                                </Typography>
                                <Typography>
                                    Consulta y modifica tus datos personales. Datos de facturación
                                </Typography>
                                <DataPersonal />

                            </AccordionDetails>
                        </Accordion>
                    </>
                )}
            </div>
        </div>

    );
}
