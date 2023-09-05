import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* MATERIAL UI */
import { CssBaseline, AppBar, Box, Container, Paper, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
/* COMPONENTS */
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

const steps = ['Dirección de envío', 'Detalle de pago', 'Revise su orden'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Paso desconocido');
  }
}

function FormUserPayment() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        {/* Contenido de la barra de la aplicación si lo tienes */}
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Formulario de pago
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Gracias por su compra.
              </Typography>
              <Typography variant="subtitle1">
                Su número de orden es #2001539.
                Le hemos enviado por correo electrónico la confirmación de su pedido y le enviaremos una actualización cuando su pedido haya sido enviado.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Button
                  variant=""
                  component={Link} // Utiliza el componente Link aquí
                  to="/" // Establece la URL de tu página principal aquí
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Volver al comercio
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ ml: 1 }} style={{ backgroundColor: "black", color: "white", marginBottom:-40 }}>
                    Atrás
                  </Button>
                )} </Box>

              <Button
                variant=""
                onClick={handleNext}
                sx={{ ml: 1 }}
                style={{ backgroundColor: "black", color: "white", display: 'flex', marginLeft:390 }}
              >
                {activeStep === steps.length - 1 ? 
                <div >
                  <a href="https://biz.payulatam.com/B0f39fd116299FB" style={{color: "white"}}>PAGAR</a>
                </div> : 'Siguiente'}
              </Button>


            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default FormUserPayment;
