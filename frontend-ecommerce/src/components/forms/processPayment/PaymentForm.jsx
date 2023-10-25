import React from 'react';
/* MATERIAL UI */
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Nombre de la tarjeta" fullWidth autoComplete="cc-name" variant="standard" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Numero de tarjeta" fullWidth autoComplete="cc-number" variant="standard" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Fecha de expiración" fullWidth autoComplete="cc-exp" variant="standard" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cvv" label="CVV" helperText="Last three digits on signature strip" fullWidth autoComplete="cc-csc" variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox color="secondary" name="saveCard" value="yes" />} label="Recordar los datos de la tarjeta de crédito para la próxima vez" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
