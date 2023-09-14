/* MATERIAL UI */
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
/* COMPONENTS */
import UpdatePass from '../forms/infoUser/UpdatePass';
import UpdateEmail from '../forms/infoUser/UpdateEmail';
import DataPersonal from '../forms/infoUser/DataPersonal'

export default function InfoCountUser() {
    return (
        <div>
            <h3 style={{ paddingButton: "50px", left: 570 }}>ACCEDE A TU CUENTA</h3>
            <div style={{paddingTop:20}}>
                <Accordion >
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
            </div>
        </div>

    );
}
