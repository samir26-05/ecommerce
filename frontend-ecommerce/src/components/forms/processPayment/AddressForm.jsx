import React, { useState, useEffect } from 'react';
/* MATERIAL UI */
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'

export default function AddressForm() {
  const [oneClients, setOneClients] = useState([
    {
      nombre: "",
      apellido: "",
      Phone_number: "",
      address: "",
      city: "",
      country: "",
      postalcode: "",
      state: "",
    }
  ]);

  const [error, setError] = useState();

const userName = localStorage.getItem("username")
console.log(userName, '❤️❤️❤️')

  useEffect(() => {
    async function fetchOneClients() {
      try {
        const response = await axios.get(`http://localhost:3000/user/name/${userName}`, {
          headers: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJzYW9yb3pjbzI2MDUwMiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5NDI4MDc2NCwiZXhwIjoxNjk0MzA1OTY0fQ.IPmSEF2tL-6Pt7m08chNHAwZt0nZCxYP2vLD2LctEMw"
          },
        });
        setOneClients(response.data);
        console.log(response.data)
      } catch (error) {
        setError(error);
        console.log("Error al obtener los clientes:", error);
      }
    }
    

    fetchOneClients(); 
  }, []);

  const handleInputChange = (campo, valor) => {
    let nuevoValor = valor;
    if ( campo === 'nombre' || campo === 'apellido' || campo === 'Phone_number' || campo === 'address' || campo === 'city'|| campo === 'country' || campo === 'postalcode' || campo === 'state') {
      nuevoValor = Number(valor); // Convertir a número
    }
    setOneClients((datosPrevios) => ({ ...datosPrevios, [campo]: nuevoValor }));
  };

  return (
    <React.Fragment>
      {error ? (
        <div>Error al obtener los clientes: {error.message}</div>
      ) : (<>
      {console.log(oneClients, '😘😘😘')}
        <Typography variant="h6" gutterBottom>
          Direccion de envio.
        </Typography>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <TextField required id="firstName" name="firstName" label="Nombre" value={oneClients.nombre} onChange={(event) => handleInputChange("nombre", event.target.value)} fullWidth autoComplete="given-name" variant="standard" >{oneClients.nombre}</TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="lastName" name="lastName" label="Apellido" value={oneClients.personal} fullWidth autoComplete="family-name" variant="standard" />
          </Grid>

          <Grid item xs={12}>
            <TextField required id="contact" name="contact" label="# Contacto" fullWidth autoComplete="shipping address-line2" variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="country" name="country" label="Pais" fullWidth autoComplete="shipping country" variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="city" name="city" label="Ciudad" fullWidth autoComplete="shipping address-level2" variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="state" name="state" label="Estado/Departamento/Region" fullWidth variant="standard" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="zip" name="zip" label="Zip / Codigo postal" fullWidth autoComplete="shipping postal-code" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <TextField required id="address1" name="address1" label="Direccion" fullWidth autoComplete="shipping address-line1" variant="standard" />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox color="secondary" name="saveAddress" value="yes" />} label="Use esta dirección para detalles de pago" />
          </Grid>
        </Grid>
      </>)}
    </React.Fragment>
  );
}
