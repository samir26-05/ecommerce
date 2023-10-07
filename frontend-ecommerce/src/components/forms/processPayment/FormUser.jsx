import { useState } from "react";
import {
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import AddressForm from "./AddressForm";
import Review from "./Review";

const steps = ["Información de envío", "Detalle de compra"];

const GetStepContent = (step, handleForm) => {
  switch (step) {
    case 0:
      return <AddressForm onFormValid={handleForm} />;
    case 1:
      return <Review />;
    default:
      throw new Error("Paso desconocido");
  }
};

const FormUserPayment = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [nextButtonClicked, setNextButtonClicked] = useState(false); // Nueva variable de estado

  const handleFormValidChange = (isValid) => {
    setIsFormValid(isValid);
  };

  const handleNext = (valid) => {
    if (valid) {
      setActiveStep(activeStep + 1);
      setNextButtonClicked(true); // Establecer nextButtonClicked en true
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ my: { xs: 3, md: 6.8 }, pt: 10 }}>
      <Paper variant="outlined" sx={{ p: { md: 5 } }}>
        <Typography component="center" variant="h4">
          Formulario de pago
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {GetStepContent(activeStep, handleFormValidChange)}
          {activeStep !== 0 && (
            <div style={{position:"relative"}}>
              <Button
                onClick={handleBack}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  position: "absolute",
                  bottom:"10%",
                }}>
                Atrás
              </Button>
            </div> 
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              margin: "10% 1% 0 0",
            }}
          >
            <Button
              variant=""
              onClick={() => handleNext(isFormValid)}
              sx={{ ml: 1 }}
              disabled={!isFormValid || nextButtonClicked}
              style={{
                backgroundColor: isFormValid ? "black" : "grey",
                color: "white",
                display:
                  isFormValid === false || nextButtonClicked ? "none" : "flex",
              }}
            >
              Siguiente
            </Button>
          </div>
        </div>
      </Paper>
    </Container>
  );
};

export default FormUserPayment;
