/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* MATERIAL UI */
import {
  Button,
  Box,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import SendIcon from "@mui/icons-material/Send";
/* COMPONENETS */
import StockProducts from "../forms/products/StockProducts";
import { FormProduct } from "../forms/products/CreateProducts";
/* IMG */
import bgr from "../../assets/Img/bgr.png";
/* STYLES */
import { Img, Div, BoxProducts } from "./NavHorizontalStyled";
import ShowOrders from "./orders/ShowOrders";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateUser from "../forms/clients/FormClient";
import CrudProvider from "./provider/ShowProvider";
import { FlexDirCol } from "../StyledMain";
import ShowClients from "../forms/clients/ShowClients";
import Swal from "sweetalert2";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <FlexDirCol>{children}</FlexDirCol>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NavHorizontal(props) {
  const { type } = props;
  const [value, setValue] = useState(0);
  const [setError] = useState();
  const userName = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
  return (
    <Box sx={{ width: "100%" }}>
      {type === "buy" ? (
        <div>
          <Box>
            <h3 style={{ paddingButton: "50px", left: 570 }}>MIS COMPRAS</h3>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Pedidos"
                {...a11yProps(0)}
                className="whithoutOutline"
              />
              <Tab
                label="Tienda"
                {...a11yProps(1)}
                className="whithoutOutline"
              />
            </Tabs>
          </Box>
          <Div>
            <CustomTabPanel value={value} index={0}>
              <Img src={bgr} alt="" />
              <h4>Aun no tienes compras online</h4>
              <span>
                Si no encuentras tu compra tal vez es porque hiciste el pedido
                sin estar registrado.
              </span>
              <Button
                variant="text"
                className="whithoutOutline"
                endIcon={<SendIcon />}
              >
                Encontrar pedido
              </Button>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Img src={bgr} alt="" />
              <h4>Aún no tienes compras en tienda</h4>
              <span>
                Pero puedes hacer tu pedido online ¡y te lo mandamos a casa!
              </span>
              <br />
              <Link to={"/"}>
                <Button
                  variant="contained"
                  className="whithoutOutline"
                  style={{ backgroundColor: "black" }}
                >
                  Compra online
                </Button>
              </Link>
            </CustomTabPanel>
          </Div>
        </div>
      ) : (
        ""
      )}

      {type === "products" ? (
        <BoxProducts>
          <Box>
            <Tabs value={value} onChange={handleChange}>
              <Tab
                label="Crear producto"
                {...a11yProps(0)}
                className="whithoutOutline"
              />
              <Tab
                label="Inventario"
                {...a11yProps(1)}
                className="whithoutOutline"
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <FormProduct />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <StockProducts />
          </CustomTabPanel>
        </BoxProducts>
      ) : (
        ""
      )}

      {type === "order" ? (
        <div>
          <ShowOrders />
        </div>
      ) : (
        ""
      )}

      {type === "clientes" ? (
        <div>
          <ShowClients />
          {/* <Accordion >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>Crear Nuevo Usuario</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CreateUser />
            </AccordionDetails>
          </Accordion> */}
        </div>
      ) : (
        ""
      )}

      {type === "provider" ? (
        <div>
          <CrudProvider />
        </div>
      ) : (
        ""
      )}
    </Box>
  );
}
