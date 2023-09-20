import { useState } from 'react';
/* MATERIAL UI */
import { Button, Card, Box, Stepper, StepLabel, Step } from '@mui/material';
import { CgLogOut } from 'react-icons/cg'
import { BsBoxSeam } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiCardboardBox, GiCheckboxTree } from 'react-icons/gi'
import TotalSummary from './TotalSummary';
import TableDetailsProducts from './DetailsProducts';

const steps = ['DESPACHO', 'EN CAMINO', 'RECIBIDO',];

function getStepIcon(step) {
    switch (step) {
        case 0:
            return <BsBoxSeam style={{ fontSize: 40 }} />; // Icono para el primer paso
        case 1:
            return <TbTruckDelivery style={{ fontSize: 40 }} />; // Icono para el segundo paso
        case 2:
            return <GiCardboardBox style={{ fontSize: 40 }} />; // Icono para el tercer paso
        default:
            return null;
    }
}

export default function DetailsOrder() {

    const [activeStep, setActiveStep] = useState(0);
    return (
        <div style={{ width: "100%" }}>

            <div style={{ display: "flex", }}>
                <h3 style={{ paddingButton: "50px" }}><GiCheckboxTree style={{ fontSize: "40px", marginTop: "-5px" }} /> DETALLE DE ORDEN</h3>
                <Button
                    variant="contained"
                    className="whithoutOutline"
                    style={{ backgroundColor: "black", color: "white", height: 40, marginLeft: "70%", marginBotton: "10px" }}
                    type="submit"
                    value="registrar"
                >
                    <CgLogOut style={{ fontSize: 30 }} /> ATRAS
                </Button>
            </div>

            <div style={{ paddingTop: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <Card sx={{ display: 'flex', width: "100%", marginBottom: 5, justifyContent: "space-between", padding: "20px 0px 20px 0px" }}>
                        <Box sx={{ width: '100%' }}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label, index) => (
                                    <Step key={label} >
                                        <StepLabel icon={getStepIcon(index)}>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Card>
                </div>

                <Box sx={{ marginBottom: 10, display: "flex", justifyContent: "space-around", width: "100%" }}>
                    <TableDetailsProducts style={{ border: "" }} />
                    <Box sx={{ marginBottom: 10, display: "flex", flexDirection: "column", justifyContent: "space-around", width:"40%" }}>
                        <TotalSummary />
                        <Card sx={{ display: 'flex', width: "100%", marginBottom: 5, justifyContent: "space-between", padding: "20px 0px 20px 0px" }}>
                                AQUI VA LA INFORMACION DE EL DOMICILIO DEL PEDIDO
                        </Card>
                    </Box>

                </Box>


            </div>
        </div>
    )
}
