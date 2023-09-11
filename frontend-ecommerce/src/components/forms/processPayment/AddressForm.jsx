import React, { useState, useEffect } from "react";
/* MATERIAL UI */
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";

export default function AddressForm() {
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

  const userName = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");

  
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Desestructuramos el nombre y el valor del objeto evento
    setOneClients((datosPrevios) => ({
      ...datosPrevios,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateInfoPersonal(oneClients);
  };


  const updateInfoPersonal = async () => {
    try {
      await axios.patch(
        `http://localhost:3000/user/personal_information/${userName}`,
        oneClients,
        {
          headers: {
            accessToken: token,
          },
        }
      );
    } catch (error) {
      setError(error);
      console.log("Error al actualizar los datos:", error);
    }
  };


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
        console.log(response.data);
      } catch (error) {
        setError(error);
        console.log("Error al obtener los clientes:", error);
      }
    }

    fetchOneClients();
  }, [userName]);



  return (
    <React.Fragment>
      {error ? (
        <div>Error al obtener los clientes: {error.message}</div>
      ) : (
        <>
          <Typography variant="h6" gutterBottom>
            Direccion de envio.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="nombre"
                  label="Nombre"
                  value={oneClients?.Personal_information?.nombre}
                  onChange={handleInputChange}
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="apellido"
                  label="Apellido"
                  value={oneClients?.Personal_information?.apellido}
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="contact"
                  name="Phone_number"
                  label="# Contacto"
                  onChange={handleInputChange}
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Pais"
                  onChange={handleInputChange}
                  fullWidth
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="Ciudad"
                  onChange={handleInputChange}
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="Estado/Departamento/Region"
                  onChange={handleInputChange}
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="postalcode"
                  label="Zip / Codigo postal"
                  onChange={handleInputChange}
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address"
                  label="Direccion"
                  onChange={handleInputChange}
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Use esta dirección para detalles de pago"
                />
                <button type="submit">Guardar Cambios</button>
              </Grid>
            </Grid>
          </form>
        </>
      )}
    </React.Fragment>
  );
}
