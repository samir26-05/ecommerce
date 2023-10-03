/* MATERIAL UI */
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import Swal from "sweetalert2";
import axios from 'axios';

export default function DataPersonal({updateProfile, setUpdateProfile}) {

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setUpdateProfile((datosPrevios) => ({
      ...datosPrevios,
      [name]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    updateInfoPersonal(updateProfile);
  };

  const userName = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");
  const urlBackend = import.meta.env.VITE_BACKEND_URL

  const updateInfoPersonal = async () => {
    try {
     const response = await axios.put(
        `${urlBackend}/user/personal_information/${userName}`,
        updateProfile,
        {
          headers: {
            accessToken: token,
          },
        }
      )

      const successMessage = response.data.message;
      Swal.fire("CAMBIO EXITOSO!", successMessage, "success");

    } catch (error) {
     
      console.log("Error al actualizar los datos:", error);
    }
  };
  

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', top: '20px' },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField id="outlined-multiline-flexible" label="Nombre" onChange={handleInputChange} name='nombre'/>
        <TextField id="outlined-multiline-flexible" label="Apellido" name='apellido' onChange={handleInputChange} />
        <TextField id="outlined-multiline-flexible" label="Direccion" name='address' onChange={handleInputChange} />
        <TextField id="outlined-multiline-flexible" label="Ciudad" name='city' onChange={handleInputChange} />
      </div>
      <div>
        <TextField id="outlined-multiline-flexible" label="Pais" name='country' onChange={handleInputChange} />
        <TextField id="outlined-multiline-flexible" label="Estado" name='state' onChange={handleInputChange} />
        <TextField id="outlined-multiline-flexible" label="Codigo Postal" name='postalcode' onChange={handleInputChange} />
        <TextField id="outlined-multiline-flexible" label="# Contacto" name='Phone_number' onChange={handleInputChange} />
      </div>
      <div>
        <Button type="submit" variant="contained"  style={{ backgroundColor: "black", marginTop: "45px", marginLeft: 430 }}>CAMBIAR</Button>
      </div>
    </Box>
  );
}