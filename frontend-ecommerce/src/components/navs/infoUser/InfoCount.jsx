import { useState, useEffect } from "react";
/* MATERIAL UI */
import { Button, Accordion, Typography, AccordionSummary, AccordionDetails, Card, ListItem, Avatar, ListItemText, } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
/* COMPONENTS */
import UpdatePass from "./UpdatePass";
import DataPersonal from "./DataPersonal";
import axios from "axios";
import { BiPencil, BiUserCircle } from "react-icons/bi";
import Swal from "sweetalert2";

const states = ['Exitoso', 'Pendiente', 'Rechazado']


export default function InfoCountUser() {
  const [oneClients, setOneClients] = useState({
    nombre: "",
    apellido: "",
    Phone_number: "",
    address: "",
    city: "",
    country: "",
    postalcode: "",
    state: "",
    avatarUrl: "",
  });

  const [updateProfile, setUpdateProfile] = useState({
    nombre: "",
    apellido: "",
    Phone_number: "",
    address: "",
    city: "",
    country: "",
    postalcode: "",
    state: "",
  });

  const [txtPassword, setTxtPassword] = useState({
    password: "",
    newpassword: "",
  });

  const [avatar, setAvatar] = useState({
    avatar: "",
  });

  const [error, setError] = useState();
  const [showAccordions, setShowAccordions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [allOrders, setAllOrders] = useState([])
  const [ordersByState, setOrdersByState] = useState([]);


  const token = localStorage.getItem("accessToken");
  const userName = localStorage.getItem("username");

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
        setAvatar(response.data);
      } catch (error) {
        setError(error);
      }
    }

    async function fetchAllOrders() {
      try {
        const response = await axios.get(
          `http://localhost:3000/order`,
          {
            headers: {
              accessToken: token,
            },
          }
        );
        setAllOrders(response.data);
      } catch (error) {
        setError(error);
      }
    }

    async function fetchOrdersByState() {
      try {
        const ordersByStateData = {};
        for (const stateName of states) {
          const response = await axios.get(
            `http://localhost:3000/order/status/${stateName}`,
            {
              headers: {
                accessToken: token,
              },
            }
          );
          ordersByStateData[stateName] = response.data.length;
        }
        setOrdersByState(ordersByStateData);
      } catch (error) {
        console.error("Error al obtener los pedidos por estado:", error);
      }
    }

    fetchOneClients();
    fetchAllOrders()
    fetchOrdersByState();
  }, [token]);



  const handleUpdateProfileClick = () => {
    setShowAccordions(true);
  };

  const handleImageSelect = (event) => {
    const filed = event.target.files[0];
    setSelectedImage(filed);
  };

  const handleUpdateAvatar = async () => {
    if (!selectedImage) {
      console.error("No se ha seleccionado ninguna imagen.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await axios.patch(
        "http://localhost:3000/user/avatar", formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            accessToken: token,
          },
        }
      );
      setAvatarUrl(response.data);
      Swal.fire(
        "BIEN HECHO!",
        "Foto de perfil actualizado con exito!",
        "success"
      );
    } catch (error) {
      console.log('❤️❤️❤️❤️❤️😒', error)
      console.error("Error al actualizar el avatar:", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error al intentar actualizar la foto de perfil!",
      });
    }
  };

  useEffect(() => {
    handleUpdateAvatar();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex" }}>
        <h3 style={{ paddingButton: "50px" }}>
          <BiUserCircle style={{ fontSize: "40px", marginTop: "-5px" }} /> MI
          CUENTA
        </h3>
        <Button
          variant="contained"
          className="whithoutOutline"
          style={{
            backgroundColor: "black",
            height: 50,
            marginLeft: "72%",
            marginBotton: "10px",
          }}
          type="submit"
          value="registrar"
          onClick={handleUpdateProfileClick}
        >
          ACTUALIZAR PERFIL
        </Button>
      </div>

      <div style={{ paddingTop: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card
            sx={{
              display: "flex",
              width: "60%",
              marginBtton: 20,
              justifyContent: "space-between",
            }}
          >
            <ListItem className="ListItem" style={{ marginLeft: "30px" }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                style={{ display: "none", backgroundColor: "none" }}
                id="avatar-upload-input"
              />
              <label htmlFor="avatar-upload-input">
                <Button variant="" component="span">
                  <Avatar
                    alt={localStorage.getItem("username")}
                    src={
                      selectedImage
                        ? URL.createObjectURL(selectedImage)
                        : avatar.avatar || "URL_DE_AVATAR_POR_DEFECTO"
                    }
                    sx={{ width: 100, height: 100, objectFit: "contain" }}
                  />
                  <BiPencil style={{ marginTop: "70px" }} />
                </Button>
              </label>

              <ListItemText
                primary={
                  oneClients?.Personal_information?.nombre +
                  " " +
                  oneClients?.Personal_information?.apellido
                }
                secondary={userName}
                sx={{ px: 1, width: 170 }}
              />
            </ListItem>

            <ListItem sx={{ py: 2, px: 8 }}>
              <ListItemText primary="SILVER USER" />
            </ListItem>
            <Button
              variant="contained"
              onClick={handleUpdateAvatar}
              sx={{
                ml: 1,
                backgroundColor: "black",
                color: "white",
                fontSize: "9px",
                width: "20%",
              }}
            >
              Actualizar Avatar
            </Button>
          </Card>
          <Card sx={{ display: "flex", width: "10%" }}>
            <ListItem className="ListItem">
              <ListItemText
                primary={
                  <Typography variant="h4">
                    {allOrders.length}
                  </Typography>
                }
                secondary="Todos mis pedidos"
              />
            </ListItem>
          </Card>
          {states.map((stateName, index) => (
            <Card key={index} sx={{ display: "flex", width: "8%" }}>
              <ListItem className="ListItem">
                <ListItemText
                  primary={
                    <Typography variant="h4">
                      {ordersByState[stateName]}
                    </Typography>
                  }
                  secondary={`Pedidos ${stateName}`}
                />
              </ListItem>
            </Card>
          ))}
        </div>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: 100,
            marginTop: 5,
            marginBottom: 1,
          }}
        >
          <ListItem sx={{ py: 1, px: 10 }}>
            <ListItemText
              primary="Nombre(s)"
              secondary={oneClients?.Personal_information?.nombre}
            />
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary="Apellido(s)"
              secondary={oneClients?.Personal_information?.apellido}
            />
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary="Email"
              secondary={oneClients?.Personal_information?.Phone_number}
            />
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary="Contacto"
              secondary={oneClients?.Personal_information?.Phone_number}
            />
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary="Direccion"
              secondary={oneClients?.Personal_information?.address}
            />
          </ListItem>
        </Card>

        {showAccordions && (
          <>
            <Accordion style={{ marginTop: "30px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>CONTRASEÑA</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ paddingButton: "50px" }}>
                  Por favor, recuerda que la nueva contraseña debe contener un
                  número y una letra mayúscula, además de un mínimo de 8
                  caracteres.
                </Typography>
                <UpdatePass
                  setTxtPassword={setTxtPassword}
                  txtPassword={txtPassword}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>DATOS PERSONALES Y FACTURACION</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Si quieres cambiar informacion personal asociados a tu cuenta
                  completa los siguientes campos.
                </Typography>
                <Typography>
                  Consulta y modifica tus datos personales. Datos de facturación
                </Typography>
                <DataPersonal
                  updateProfile={updateProfile}
                  setUpdateProfile={setUpdateProfile}
                />
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </div>
    </div>
  );
}
