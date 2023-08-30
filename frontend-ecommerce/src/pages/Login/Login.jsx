/* eslint-disable react/prop-types */
import * as React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { Box, Checkbox } from "@mui/material";
import { Btn, Login_Register, SignInBtn, Span } from "./Styled";
import { FlexDirCol, FlexRow } from "../../components/StyledMain";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "../../components/Layout/header/header.css";


export default function LoginDrawer({ hover, color, pageUsed, pagePayment }) {
  const [haveAccount, setHaveAccount] = useState(true);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 400,
        overflow: "hidden",
      }}
      role="presentation"
    >
      <List style={{ paddingTop: "0" }}>
        <FlexRow style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
          <Login_Register
            onClick={() => setHaveAccount(true)}
            Page={haveAccount}
          >
            Iniciar Sesión
          </Login_Register>
          <Login_Register
            onClick={() => setHaveAccount(false)}
            Page={haveAccount}
          >
            Registarse
          </Login_Register>
        </FlexRow>
        {haveAccount ? <Login /> : <Register />}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="whithoutOutline" style={{display: pageUsed ? 'none' : 'block' && pagePayment ? "none" : 'block'}}>
            <PersonOutlineOutlinedIcon
              style={{
                fontSize: "2.5rem",
                fill: hover ? "black" : "white" && pageUsed ? '#000' : color,
              }}
              
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function BasicTextFields({ Placeholder, onChange, value, type, name , required, className, error, helperText }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={Placeholder}
        label={Placeholder}
        onChange={onChange}
        name= {name}
        value={value}
        type= {type}
        required = {required}
        className= {className}
        error = {error}
        helperText = {helperText}
        variant="outlined"
      />
    </Box>
  );
}



export const Login = () => {
  

  const [email,setemail] = useState("");
  const [contraseña,setcontraseña] = useState("");
/*   const history = useHistory(); */
  let navigate = useNavigate();

  const Add = async(event) => {
  event.preventDefault();

    try {

    const response = await axios.post("http://localhost:3000/login",{
      email:email,
      contraseña:contraseña
    })

    if(response.status === 200){
      alert(response.data.message );
      navigate('/user')

    } else {
      setErrorMessage(response.data.message);
    }

    } catch (error) {
      console.log("Error en la solicitud: ",error);
      setErrorMessage('Ocurrio un error en la solicitud. ');
     
    }
  }
  
  return (
    <FlexDirCol style={{ gap: ".5rem" }}>

      <form onSubmit={Add}>

        

        <BasicTextFields
          className="controls"
          type="email"
          name="email"
          Placeholder="Ingrese su email"
          required
          onChange={(e) => setemail(e.target.value) }
        />

      <BasicTextFields
          className="controls"
          type="password"
          name="contraseña"
          Placeholder="Ingrese su contraseña"
          required
          onChange={(e) => setcontraseña(e.target.value)}
        />

      
      <Btn type="submit" value="iniciar sesion">Iniciar Sesión</Btn>
      </form>


      <FlexRow style={{ justifyContent: "space-between" }}>
        <Span>
          <Checkbox {...label} style={{ color: "black" }} /> Recordar contraseña
        </Span>
        <Span>¿Olvidaste tu contraseña?</Span>
      </FlexRow>
      
      <FlexDirCol style={{ gap: ".5rem" }}>
        <SignInBtn bgcolor="#003aaf">
          <FacebookIcon /> Continuar con Facebook
        </SignInBtn>
        <SignInBtn bgcolor="#fff">
          <GoogleIcon /> Continuar con Google
        </SignInBtn>
      </FlexDirCol>
    </FlexDirCol>
  );
};

export const Register = () => {

  let navigate = useNavigate();

  const [register, setRegister] = useState({
    email: "",
    password_hash: "",
    first_name: "",
    last_name: "",
    address: "",
    phone_number: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    phoneNumber: ""
  });

  const handleInputChange = (campo, valor) => {
    setRegister((datosPrevios) => ({ ...datosPrevios, [campo]: valor }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!validateEmail(register.email)) {
      newErrors.email = "Ingrese un correo electrónico válido.";
    }
    if (!validatePassword(register.password_hash)) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula y un número.";
    }
    if (!validatePhoneNumber(register.phone_number)) {
      newErrors.phoneNumber = "El número de teléfono debe tener exactamente 10 dígitos numéricos.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const add = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/users/register", {
        ...register
      });
      if (response.status === 200) {
        navigate('/user');
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      alert("Ocurrió un error durante el registro. Por favor, inténtelo de nuevo más tarde.");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  };


  return (
    <FlexDirCol style={{ gap: ".5rem" }}>
    <form onSubmit={add} >
        <BasicTextFields
         className="controls"
         type="text"
         name="email"
         label="Correo electrónico"
         Placeholder="Ingrese su correo"
         required
         error={Boolean(errors.email)}
         helperText={errors.email}
         onChange={(event) => {
           handleInputChange("email", event.target.value);
         }}
        />
        <BasicTextFields
          className="controls"
          type="password"
          name="password_hash" 
          id="email"
          Placeholder="Ingrese su contraseña"
          required
          error={Boolean(errors.password)}
         helperText={errors.password}
          onChange={(event) => {
            handleInputChange("password_hash",event.target.value);
          }}
        />
        <BasicTextFields
          className="controls"
          type="text"
          name="first_name"
          id="contraseña"
          Placeholder="Ingrese su nombre"
          required
          onChange={(event) => {
            handleInputChange("first_name",event.target.value);
          }}
        />
        <BasicTextFields
          className="controls"
          type="text"
          name="contraseña"
          id="contraseña"
          Placeholder="ingrese su apellido"
          required
          onChange={(event) => {
            handleInputChange("last_name",event.target.value);
          }}
        />
        <BasicTextFields
          className="controls"
          type="text"
          name="address"
          id="contraseña"
          Placeholder="Ingrese su direccion"
          required
          onChange={(event) => {
            handleInputChange("address",event.target.value);
          }}
        />
        <BasicTextFields
          className="controls"
          type="text"
          name="phone_number"
          id="contraseña"
          Placeholder="Ingrese su numero de telefono"
          required
          error={Boolean(errors.phoneNumber)}
          helperText={errors.phoneNumber}
          onChange={(event) => {
            handleInputChange("phone_number",event.target.value);
          }}
        />
        <Btn type="submit" value="registrar">Registrar</Btn>

      </form>

      <FlexDirCol style={{ gap: ".5rem" }}>
        <SignInBtn bgcolor="#003aaf">
          <FacebookIcon /> Continuar con Facebook
        </SignInBtn>
        <SignInBtn bgcolor="#fff">
          <GoogleIcon /> Continuar con Google
        </SignInBtn>
      </FlexDirCol>
      
      </FlexDirCol>
  );
};
