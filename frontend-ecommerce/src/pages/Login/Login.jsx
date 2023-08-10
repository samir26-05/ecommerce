import * as React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Welcome from "../../assets/Img/Welcome.jpg";
import { Box, Checkbox } from "@mui/material";
import { Btn, LoginImg, SignInBtn, Span } from "./Styled";
import { FlexDirCol, FlexRow, Text } from "../../components/StyledMain";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

export default function LoginDrawer() {
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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
    >
      <List style={{ padding: "0" }}>
        <ListItem disablePadding>
          <LoginImg src={Welcome} />
        </ListItem>
        <Text style={{ display:"flex", gap:"1rem", justifyContent:"center"}}>
          <Button variant="contained" style={{backgroundColor:"black"}} onClick={() => setHaveAccount(true)}>Iniciar Sesión</Button>
          <Button variant="contained" style={{backgroundColor:"black"}} onClick={() => setHaveAccount(false)}>Registarse</Button>
        </Text>
        {haveAccount ? <Login /> : <Register />}
      </List>
    </Box>
  );
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
        "& > :not(style)": { m: 1, width: "25ch" },
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
    <FlexDirCol style={{ gap: "1rem" }}>
      <SignInBtn bgcolor="#003aaf">
        <FacebookIcon /> Continuar con Facebook
      </SignInBtn>
      <SignInBtn bgcolor="#aaaaaa">
        <GoogleIcon /> Continuar con Google
      </SignInBtn>
      <BasicTextFields Placeholder={"E-mail"} />
      <BasicTextFields Placeholder={"Contraseña"} />
      <FlexRow style={{ justifyContent: "space-between" }}>
        <Span>
          <Checkbox {...label} /> Recordar contraseña
        </Span>
        <Span>¿Olvidaste tu contraseña?</Span>
      </FlexRow>
      <Btn>Iniciar Sesión</Btn>
    </FlexDirCol>
  );
};

const Register = () => {
  return (
    <FlexDirCol style={{ gap: "1rem" }}>
      <SignInBtn bgcolor="#003aaf">
        <FacebookIcon /> Continuar con Facebook
      </SignInBtn>
      <SignInBtn bgcolor="#aaaaaa">
        <GoogleIcon /> Continuar con Google
      </SignInBtn>
      <BasicTextFields Placeholder={"Nombre de Usuario"} />
      <BasicTextFields Placeholder={"Nombres"} />
      <BasicTextFields Placeholder={"Apellidos"} />
      <BasicTextFields Placeholder={"E-mail"} />
      <BasicTextFields Placeholder={"Dirección"} />
      <BasicTextFields Placeholder={"Teléfono"} type="number" />
      <BasicTextFields Placeholder={"Contraseña"} type="password" />
      <BasicTextFields Placeholder={"Confirmar Contraseña"} type="password" />
      <Btn>Crear Cuenta</Btn>
    </FlexDirCol>
  );
};
