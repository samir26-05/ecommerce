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
import "../../components/Layout/header/styled.css";


export default function LoginDrawer({ hover, color }) {
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
          <Button onClick={toggleDrawer(anchor, true)} className="whithoutOutline">
            <PersonOutlineOutlinedIcon
              style={{
                fontSize: "2.5rem",
                fill: hover ? "black" : "white" && color,
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

function BasicTextFields({ Placeholder, onChange, value, type, name , required, className }) {
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

    navigate('/user')

/*     alert(response.data.message ); */

    
    } catch (error) {
      console.log(error.data.message)
     
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

  const [register,setRegister] = useState({
    email: "",
    password_hash: "",
    first_name: "",
    last_name: "",
    address: "",
    phone_number: ""
  })
  const handleInputChange = (campo, valor) => {
    setRegister((datosPrevios) => ({ ...datosPrevios, [campo]: valor }));
  };
  console.log(register)
  
  const add = async (event) =>{
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:3000/users/register",{
            ...register
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

  return (
    <FlexDirCol style={{ gap: ".5rem" }}>
    <form onSubmit={add} >
        <BasicTextFields
          className="controls"
          type="text"
          name="nombre"
          Placeholder="Ingrese su correo"
          required
          onChange={(event) => {
            handleInputChange("email",event.target.value);
          }}
        />
        <BasicTextFields
          className="controls"
          type="password"
          name="email"
          id="email"
          Placeholder="Ingrese su contraseña"
          required
          onChange={(event) => {
            handleInputChange("password_hash",event.target.value);
          }}
        />
        <BasicTextFields
          className="controls"
          type="text"
          name="contraseña"
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
          name="contraseña"
          id="contraseña"
          Placeholder="Ingrese su dirrecion"
          required
          onChange={(event) => {
            handleInputChange("address",event.target.value);
          }}
        />
        <BasicTextFields
          className="controls"
          type="text"
          name="contraseña"
          id="contraseña"
          Placeholder="Ingrse su numero de telefono"
          required
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
