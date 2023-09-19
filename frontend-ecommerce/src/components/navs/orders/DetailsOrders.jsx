import { useState } from 'react';
/* MATERIAL UI */
import { Button, Card, Box, Stepper, StepLabel, Step } from '@mui/material';
import ShowOrders from '../orders/ShowOrders'
import { CgLogOut } from 'react-icons/cg'
import { BsBoxSeam } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiCardboardBox, GiCheckboxTree } from 'react-icons/gi'


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

export default function DetailsOrder({ onShowTable }) {
    const [activeStep, setActiveStep] = useState(0);
    const [showTable, setShowTable] = useState(true);
    const [showDetails, setshowDetails] = useState(false);

    const handleShowTable = () => {
        onShowTable();
    };



    return (
        <div style={{ width: "100%" }}>
            {showDetails && (
                <>
            <div style={{ display: "flex", }}>
                <h3 style={{ paddingButton: "50px" }}><GiCheckboxTree style={{ fontSize: "40px", marginTop: "-5px" }} /> DETALLE DE ORDEN</h3>
                <Button
                    variant="contained"
                    className="whithoutOutline"
                    style={{ backgroundColor: "black", color: "white", height: 40, marginLeft: "70%", marginBotton: "10px" }}
                    type="submit"
                    value="registrar"
                    onClick={handleShowTable}
                >
                    <CgLogOut style={{ fontSize: 30 }} /> ATRAS
                </Button>
            </div>
            
            <div style={{ paddingTop: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Card sx={{ display: 'flex', width: "100%", marginBottom: 20, justifyContent: "space-between", padding: "20px 0px 20px 0px" }}>
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
            </div>
            </>
            )}
            {showTable && (
                <>
                    <ShowOrders />
                </>
            )}
        </div>
    )
}
