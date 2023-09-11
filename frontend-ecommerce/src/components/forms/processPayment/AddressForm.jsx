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
  console.log(userName, '💕💕💕')

  useEffect(() => {

    async function handleSaveFormEdits() {
      try {
        const response = await axios.put(
          `http://localhost:3000/user/personal_information/${userName}`,
          {
            nombre: oneClients.nombre,
            apellido: oneClients.apellido,
            Phone_number: oneClients.Phone_number,
            address: oneClients.address,
            city: oneClients.city,
            country: oneClients.country,
            postalcode: oneClients.postalcode,
            state: oneClients.state,
          },
          {
            headers: {
              accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJzYW9yb3pjbzI2MDUwMiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5NDQ1NTUzNywiZXhwIjoxNjk0NDgwNzM3fQ.DpN1O71y88Ze3nJWmnFnsA_4zzSmdVokncR3mbpEjOo"
            },
          }
        );
        setOneClients(response.data)
        console.log(response.data); // Deberías recibir una respuesta del servidor

        // Si el servidor responde con éxito, puedes realizar alguna lógica adicional aquí si es necesario

      } catch (error) {
        setError(error);
        console.log("Error al actualizar los datos:", error);
      }
    };

    async function fetchOneClients() {
      try {
        const response = await axios.get(`http://localhost:3000/user/name/${userName}`, {
          headers: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJzYW9yb3pjbzI2MDUwMiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY5NDQzODg4OCwiZXhwIjoxNjk0NDY0MDg4fQ.mw3QxEIwqegnhFf2gSKFBhmhmE5A4E1Okh8H8rY2sKA"
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
    handleSaveFormEdits()
  }, []);

  const handleInputChange = (campo, valor) => {
    let nuevoValor = valor;
    if (campo === 'nombre' || campo === 'apellido' || campo === 'Phone_number' || campo === 'address' || campo === 'city' || campo === 'country' || campo === 'postalcode' || campo === 'state') {
      nuevoValor = Number(valor); // Convertir a número
    }
    setOneClients((datosPrevios) => ({ ...datosPrevios, [campo]: nuevoValor }));
  };

  return (
    <React.Fragment>
      {error ? (
        <div>Error al obtener los clientes: {error.message}</div>
      ) : (<>
        <form onSubmit={handleSaveFormEdits}>
          <Typography variant="h6" gutterBottom>
            Direccion de envio.
          </Typography>

          <Grid container spacing={3} >

            <Grid item xs={12} sm={6}>
              <TextField required id="firstName" name="firstName" label="Nombre" value={oneClients?.Personal_information?.nombre || ''} onChange={(event) => handleInputChange("nombre", event.target.value)} fullWidth autoComplete="given-name" variant="standard" >{oneClients.nombre}</TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required id="lastName" name="lastName" label="Apellido" value={oneClients?.Personal_information?.apellido || ''} fullWidth autoComplete="family-name" variant="standard" />
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
              <button type="submit">Guardar Cambios</button>
            </Grid>
          </Grid>
        </form>
      </>)}
    </React.Fragment>
  );
}
