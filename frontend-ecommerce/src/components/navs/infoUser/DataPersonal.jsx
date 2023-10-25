import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

export default function DataPersonal({ updateProfile, setUpdateProfile }) {
  
  const [nombre, setNombre] = useState(updateProfile.nombre || "");
  const [apellido, setApellido] = useState(updateProfile.apellido || "");
  const [address, setAddress] = useState(updateProfile.address || "");
  const [city, setCity] = useState(updateProfile.city || "");
  const [country, setCountry] = useState(updateProfile.country || "");
  const [state, setState] = useState(updateProfile.state || "");
  const [postalcode, setPostalcode] = useState(updateProfile.postalcode || "");
  const [Phone_number, setPhone_number] = useState(
    updateProfile.Phone_number || ""
  );

  // Estado para indicar si se han realizado cambios
  const [hasChanges, setHasChanges] = useState(false);

  // Mapeo de nombres de campos a funciones set correspondientes
  const fieldSetters = {
    nombre: setNombre,
    apellido: setApellido,
    address: setAddress,
    city: setCity,
    country: setCountry,
    state: setState,
    postalcode: setPostalcode,
    Phone_number: setPhone_number,
  };

  useEffect(() => {
    // Comprueba si algún campo ha cambiado
    const fields = [
      nombre,
      apellido,
      address,
      city,
      country,
      state,
      postalcode,
      Phone_number,
    ];
    const profileData = Object.values(updateProfile);

    const changed = fields.some((field, index) => field !== profileData[index]);

    setHasChanges(changed);
  }, [
    nombre,
    apellido,
    address,
    city,
    country,
    state,
    postalcode,
    Phone_number,
    updateProfile,
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Usamos el mapeo para obtener la función set correspondiente y actualizar el campo
    const fieldSetter = fieldSetters[name];

    if (fieldSetter) {
      fieldSetter(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedFields = {};
    if (nombre !== updateProfile.nombre) {
      updatedFields.nombre = nombre;
    }
    if (apellido !== updateProfile.apellido) {
      updatedFields.apellido = apellido;
    }
    if (address !== updateProfile.address) {
      updatedFields.address = address;
    }
    if (city !== updateProfile.city) {
      updatedFields.city = city;
    }
    if (country !== updateProfile.country) {
      updatedFields.country = country;
    }
    if (state !== updateProfile.state) {
      updatedFields.state = state;
    }
    if (postalcode !== updateProfile.postalcode) {
      updatedFields.postalcode = postalcode;
    }
    if (Phone_number !== updateProfile.Phone_number) {
      updatedFields.Phone_number = Phone_number;
    }

    if (Object.keys(updatedFields).length > 0) {
      setUpdateProfile((datosPrevios) => ({
        ...datosPrevios,
        ...updatedFields,
      }));

      try {
        const userName = localStorage.getItem("username");
        const token = localStorage.getItem("accessToken");
        const urlBackend = import.meta.env.VITE_BACKEND_URL;

        const response = await axios.put(
          `${urlBackend}/user/personal_information/${userName}`,
          updatedFields,
          {
            headers: {
              accessToken: token,
            },
          }
        );

        const successMessage = response.data.message;
        Swal.fire({
          icon: "success",
          title: "Cambio Exitoso!",
          text: successMessage,
          iconColor: "#09ff00",
          color: "#000",
          showConfirmButton: false,
          confirmButtonColor: "#000",
          timer: 1000,
        });
      } catch (error) {
        console.log("Error al actualizar los datos:", error);
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch", top: "20px" },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Nombre"
          onChange={handleInputChange}
          name="nombre"
          value={nombre}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Apellido"
          name="apellido"
          onChange={handleInputChange}
          value={apellido}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Direccion"
          name="address"
          onChange={handleInputChange}
          value={address}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Ciudad"
          name="city"
          onChange={handleInputChange}
          value={city}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Pais"
          name="country"
          onChange={handleInputChange}
          value={country}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Estado"
          name="state"
          onChange={handleInputChange}
          value={state}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Codigo Postal"
          name="postalcode"
          onChange={handleInputChange}
          value={postalcode}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="# Contacto"
          name="Phone_number"
          onChange={handleInputChange}
          value={Phone_number}
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "black",
            marginTop: "45px",
            marginLeft: 430,
          }}
          disabled={!hasChanges}
        >
          CAMBIAR
        </Button>
      </div>
    </Box>
  );
}
