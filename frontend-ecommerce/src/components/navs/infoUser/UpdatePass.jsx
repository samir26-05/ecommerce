/* eslint-disable react/prop-types */
import { Button, TextField, Box } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

export default function UpdatePass({ txtPassword, setTxtPassword }) {
  const urlBackend = import.meta.env.VITE_BACKEND_URL;

  const handleInputChange = (e) => {
    setTxtPassword({
      ...txtPassword,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (txtPassword.newpassword === txtPassword.confirmPassword) {
      updatePassword(txtPassword);
    } else {
      Swal.fire({
        icon: "error",
        title: "Las contraseñas no coinciden",
        iconColor: "#ff0000",
        color: "#000",
        showConfirmButton: false,
        confirmButtonColor: "#000",
        timer: 1000,
      });
    }
  };
  const handleDelete = () => {
    setTxtPassword({
      password: "",
      newpassword: "",
      confirmPassword: "",
    });
  };

  const updatePassword = async () => {
    try {
      const response = await axios.put(
        `${urlBackend}/user/password/update/`,
        txtPassword,
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      );
      const successMessage = response.data;
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
      handleDelete(); // Llamar a handleDelete después de un cambio exitoso
    } catch (error) {
      const messageError = error.response.data.message;
      Swal.fire({
        icon: "error",
        title: messageError,
        iconColor: "#ff0000",
        color: "#000",
        showConfirmButton: false,
        confirmButtonColor: "#000",
        timer: 1000,
      });
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
          type="password"
          required
          value={txtPassword.password}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Nueva contraseña"
          name="newpassword"
          onChange={handleInputChange}
          type="password"
          required
          value={txtPassword.newpassword}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Confirmar nueva contraseña"
          name="confirmPassword"
          onChange={handleInputChange}
          type="password"
          required
          value={txtPassword.confirmPassword}
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
        >
          CAMBIAR
        </Button>
      </div>
    </Box>
  );
}
