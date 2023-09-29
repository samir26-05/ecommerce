import React, { useState, useEffect } from "react";
/* MATERIAL UI */
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Swal from 'sweetalert2'
import { Button } from "@mui/material";

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

  const [ setError] = useState();

  const userName = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");
  const urlBackend = import.meta.env.VITE_BACKEND_URL

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
      await axios.put(
        `${urlBackend}/user/personal_information/${userName}`,
        oneClients,
        {
          headers: {
            accessToken: token,
          },
        }
      )
      Swal.fire(
        'BIEN HECHO!',
        'Informacion almacenada con exito!',
        'success'
      )
    } catch (error) {
      setError(error);
      console.log("Error al actualizar los datos:", error);
    }
  };


  useEffect(() => {
    async function fetchOneClients() {
      try {
        const response = await axios.get(
          `${urlBackend}/user/name/${userName}`,
          {
            headers: {
              accessToken: token,
            },
          }
        );
        setOneClients(response.data);
      } catch (error) {
        setError(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrió un error al intentar almacenar la información!'
        })
      }
    } 

    Swal.fire(
      'Diligencie el formulario completo',
      '',
      'info'
    );

    fetchOneClients();
  }, [userName]);

 
  return (
    <React.Fragment>
      
      <Typography variant="h6" gutterBottom>
        Direccion de envio.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="nombre"
              value={oneClients?.Personal_information?.nombre}
              onChange={handleInputChange}
              fullWidth
              autoComplete="given-name"
              variant="standard"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="apellido"
              value={oneClients?.Personal_information?.apellido}
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={handleInputChange}
              disabled
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="contact"
              name="Phone_number"
              label="# Contacto"
              onChange={handleInputChange}
              value={oneClients?.Personal_information?.Phone_number}
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
             <Button
                variant=""
                type="submit"
                sx={{ ml: 1 }}
                style={{ backgroundColor: "black", color: "white" }}
              >Guardar Cambios</Button>

          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
