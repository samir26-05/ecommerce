/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
/* MATERIAL UI */
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Error, LoginBoxInput } from "../../../pages/Login/registerstyled";

export default function AddressForm({ onFormValid }) {
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

  const [setError] = useState();

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
      await axios.put(
        `http://localhost:3000/user/personal_information/${userName}`,
        oneClients,
        {
          headers: {
            accessToken: token,
          },
        }
      );
      Swal.fire("BIEN HECHO!", "Informacion almacenada con exito!", "success");
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
      } catch (error) {
        setError(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error al intentar almacenar la información!",
        });
      }
    }

    fetchOneClients();
  }, [userName]);

  const validationSchema = Yup.object().shape({
    Phone_number: Yup.string().required("Debes ingresar un Número de teléfono *"),
    address: Yup.string().required("Debes ingresar una dirección *"),
    city: Yup.string().required("Debes ingresar la cuidad de envío *"),
    country: Yup.string().required("Debes ingresar el país de envío *"),
    postalcode: Yup.string().required("Debes ingresar código postal *"),
    state: Yup.string().required("Debes ingresar una contraseña *"),
  });
  
  const initialValues = {
    Phone_number: "",
    address: "",
    city: "",
    country: "",
    postalcode: "",
    state: "",
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Direccion de envio.
      </Typography>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {({ isValid }) => (
          <Form>
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
                <LoginBoxInput>
                  <Field name="Phone_number" required />
                  <Error>
                    <ErrorMessage name="Phone_number" component="div" />
                  </Error>
                  <label>Número de teléfono *</label>
                </LoginBoxInput>
              </Grid>
              <Grid item xs={12}>
                <LoginBoxInput>
                  <Field name="address" required />
                  <Error>
                    <ErrorMessage name="address" component="div" />
                  </Error>
                  <label>Dirección *</label>
                </LoginBoxInput>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LoginBoxInput>
                  <Field name="city" required />
                  <Error>
                    <ErrorMessage name="city" component="div" />
                  </Error>
                  <label>Ciudad *</label>
                </LoginBoxInput>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LoginBoxInput>
                  <Field name="country" required />
                  <Error>
                    <ErrorMessage name="country" component="div" />
                  </Error>
                  <label>País *</label>
                </LoginBoxInput>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LoginBoxInput>
                  <Field name="postalcode" required />
                  <Error>
                    <ErrorMessage name="postalcode" component="div" />
                  </Error>
                  <label>Código postal *</label>
                </LoginBoxInput>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LoginBoxInput>
                  <Field name="state" required />
                  <Error>
                    <ErrorMessage name="state" component="div" />
                  </Error>
                  <label>Estado / Departamento *</label>
                </LoginBoxInput>
              </Grid>

              <Grid item xs={12}>
                {onFormValid(isValid)}
                <Button
                  variant=""
                  type="submit"
                  sx={{ ml: 1 }}
                  style={{
                    backgroundColor: isValid ? "black" : "grey",
                    color: "white",
                  }}
                  disabled={!isValid}
                >
                  Guardar Cambios
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}
