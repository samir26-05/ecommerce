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
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "../../components/Layout/header/styled.css";
import { Link } from "react-router-dom";

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

function BasicTextFields({ Placeholder }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={Placeholder} variant="outlined" />
    </Box>
  );
}

const Login = () => {
  return (
    <FlexDirCol style={{ gap: ".5rem" }}>
      <BasicTextFields Placeholder={"E-mail"} />
      <BasicTextFields Placeholder={"Contraseña"} />
      <FlexRow style={{ justifyContent: "space-between" }}>
        <Span>
          <Checkbox {...label} style={{ color: "black" }} /> Recordar contraseña
        </Span>
        <Span>¿Olvidaste tu contraseña?</Span>
      </FlexRow>

      <Link to={"/user"}>
        <Btn>Iniciar Sesión</Btn>
      </Link>
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

const Register = () => {
  return (
    <FlexDirCol style={{ gap: ".2rem" }}>
      <BasicTextFields Placeholder={"Nombres"} />
      <BasicTextFields Placeholder={"Apellidos"} />
      <BasicTextFields Placeholder={"E-mail"} />
      <BasicTextFields Placeholder={"Dirección"} />
      <BasicTextFields Placeholder={"Teléfono"} type="number" />
      <BasicTextFields Placeholder={"Contraseña"} type="password" />
      <BasicTextFields Placeholder={"Confirmar Contraseña"} type="password" />
      <Btn>Crear Cuenta</Btn>
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
