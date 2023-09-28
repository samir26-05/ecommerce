import React from "react";
import { Button, TextField, Box } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

export default function UpdatePass({ txtPassword, setTxtPassword }) {
  
  const handleInputChange = (e) => {
    setTxtPassword({
      ...txtPassword,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePassword(txtPassword);
  };

  const handleDelete = () =>{
    setTxtPassword("")
  }

  const updatePassword = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/user/password/update/`,
        txtPassword,
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );
      const successMessage = response.data;
      Swal.fire("CAMBIO EXITOSO!", successMessage, "success");
      handleDelete()

    } catch (error) {
      const messageError = error.response.data.message;
      Swal.fire(messageError, error, "error");
    }
  };



  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch", top: "20px" },
      }}
      autoComplete="off"
    >
      <div style={{ marginLeft: 50 }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Tu contraseña"
          name="password"
          onChange={handleInputChange}
          type= 'password'
          required
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Nueva contraseña"
          name="newpassword"
          onChange={handleInputChange}
          type= 'password'
          required
        />
        {/* <TextField id="outlined-multiline-flexible" label="Confirmar nueva contraseña" multiline maxRows={4} required/> */}
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
        >
          CAMBIAR
        </Button>
      </div>
    </Box>
  );
}
