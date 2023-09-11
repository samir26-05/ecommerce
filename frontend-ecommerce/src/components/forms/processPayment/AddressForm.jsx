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
  const token = localStorage.getItem("accessToken")


  const updateInfoPersonal = async () => {
    try {
      axios.put(
        `http://localhost:3000/user/personal_information/${userName}`,
        {
          headers: {
            accessToken: token
          },
        },
        {
          nombre: oneClients.nombre,
          apellido: oneClients.apellido,
          Phone_number: oneClients.Phone_number,
          address: oneClients.address,
          city: oneClients.city,
          country: oneClients.country,
          postalcode: oneClients.postalcode,
          state: oneClients.state,
        }
      );
      setOneClients(oneClients)
      console.log(oneClients, "👍👍👍👍"); // Deberías recibir una respuesta del servidor

    } catch (error) {
      setError(error);
      console.log("Error al actualizar los datos:", error);
    }
  };


  useEffect(() => {
    async function fetchOneClients() {
      try {
        const response = await axios.get(`http://localhost:3000/user/name/${userName}`, {
          headers: {

            accessToken: token
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
  }, [userName]);

  const handleInputChange = (campo, valor) => {
    let nuevoValor = valor;
    if (campo == 'nombre' || campo == 'apellido' || campo == 'Phone_number' || campo == 'address' || campo == 'city' || campo == 'country' || campo == 'postalcode' || campo == 'state') {
      nuevoValor = Number(valor); // Convertir a número
    }
    setOneClients((datosPrevios) => ({ ...datosPrevios, [campo]: nuevoValor }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateInfoPersonal();
  };

  return (
    <React.Fragment>
      {error ? (
        <div>Error al obtener los clientes: {error.message}</div>
      ) : (<>

        <Typography variant="h6" gutterBottom>
          Direccion de envio.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} >

            <Grid item xs={12} sm={6}>
              <TextField required id="firstName" name="firstName" label="Nombre" value={oneClients?.Personal_information?.nombre} onChange={(event) => handleInputChange("nombre", event.target.value)} fullWidth autoComplete="given-name" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required id="lastName" name="lastName" label="Apellido" value={oneClients?.Personal_information?.apellido} fullWidth autoComplete="family-name" variant="standard" />
            </Grid>

            <Grid item xs={12}>
              <TextField required id="contact" name="contact" label="# Contacto"  onChange={(event) => handleInputChange("Phone_number", event.target.value)} fullWidth autoComplete="shipping address-line2" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required id="country" name="country" label="Pais" onChange={(event) => handleInputChange("country", event.target.value)}  fullWidth autoComplete="shipping country" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required id="city" name="city" label="Ciudad" onChange={(event) => handleInputChange("city", event.target.value)}  fullWidth autoComplete="shipping address-level2" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required id="state" name="state" label="Estado/Departamento/Region"  onChange={(event) => handleInputChange("state", event.target.value)} fullWidth variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required id="zip" name="zip" label="Zip / Codigo postal" onChange={(event) => handleInputChange("postalcode", event.target.value)}  fullWidth autoComplete="shipping postal-code" variant="standard" />
            </Grid>
            <Grid item xs={12}>
              <TextField required id="address1" name="address1" label="Direccion" onChange={(event) => handleInputChange("address", event.target.value)}  fullWidth autoComplete="shipping address-line1" variant="standard" />
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
