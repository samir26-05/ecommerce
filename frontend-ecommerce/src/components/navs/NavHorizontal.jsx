/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
/* MATERIAL UI */
import { Button, Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import SendIcon from "@mui/icons-material/Send";
import { MaterialReactTable } from "material-react-table";


/* COMPONENETS */
import StockProducts from "../navs/products/StockProducts";
import { FormProduct } from "../navs/products/CreateProducts";
import ShowOrders from "./orders/ShowOrders";
import CrudProvider from "./provider/ShowProvider";
import ShowClients from "./clients/ShowClients";
/* IMG */
import bgr from "../../assets/Img/bgr.png";
/* STYLES */
import { Img, Div, BoxProducts } from "./NavHorizontalStyled";
import { FlexDirCol } from "../StyledMain";
import { HiOutlineShoppingBag } from "react-icons/hi";

import Swal from "sweetalert2";
import { LiaDropbox } from "react-icons/lia";
import DetailsOrder from "./orders/Details/DetailsOrder";

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

  const urlBackend = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function fetchOneClients() {
    try {
      const response = await axios.get(`${urlBackend}/user/name/${userName}`, {
        headers: {
          accessToken: token,
        },
      });
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

  useEffect(() => {
    fetchOneClients();
  }, [userName]);

  const [orders, setOrders] = useState([]);

  const fecthShopping = async () => {
    try {
      const response = await axios.get(`${urlBackend}/order/user`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      });
      setOrders(response.data);
      console.log(orders);
    } catch (error) {}
  };

  useEffect(() => {
    fecthShopping();
  }, []);
  return (
    <Box>
      {type === "buy" ? (
        <div>
          <Box sx={{ width: "100%" }}>
            <h3 style={{ textAlign: "center" }}>
              {" "}
              <HiOutlineShoppingBag
                style={{ fontSize: "35px", marginTop: "-5px" }}
              />{" "}
              MIS COMPRAS
            </h3>
            <Tabs
              sx={{ width: "100%" }}
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
          {orders.length ? (
            <>
              <Div>
                <CustomTabPanel value={value} index={0}>
                  {/* {orders.map((order, index) => (
                  <div key={index}>
                    <h2>Pedido {order.id_order}</h2>
                    <p>ID de Usuario: {order.user_id}</p>
                    <p>Subtotal: {order.subtotal}</p>
                    <ul>
                      {order.products.map((product, productIndex) => (
                        <li key={productIndex}>
                          <h3>Producto {productIndex + 1}</h3>
                          <p>Nombre del producto: {product.producto}</p>
                          <p>Valor unitario: {product.valor_unitario}</p>
                          <p>Cantidad: {product.cantidad}</p>
                          <p>Valor total: {product.valor}</p>
                          <img
                            src={product.img}
                            alt={`Imagen de ${product.producto}`}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))} */}
                  
                    <MaterialReactTable
                      columns={columns}
                      data={rows}
                      
                    />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <h2>awdawd</h2>
                </CustomTabPanel>
              </Div>
            </>
          ) : (
            <Div>
              <CustomTabPanel value={value} index={0}>
                <Img src={bgr} alt="" />
                <h4 style={{ width: "100%" }}>Aun no tienes compras online</h4>
                <span style={{ width: "100%" }}>
                  Si no encuentdras tu compra tal vez es porque hiciste el
                  pedido sin estar registrado.
                </span>
                <Button
                  sx={{ width: "100%" }}
                  variant="text"
                  className="whithoutOutline"
                  endIcon={<SendIcon />}
                >
                  Encontrar pedido
                </Button>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Img sx={{ width: "100%" }} src={bgr} alt="" />
                <h4>Aún no tienes compras en tienda</h4>
                <span>
                  Pero puedes hacer tu pedido online ¡y te lo mandamos a casa!
                </span>
                <br />
                <Link to={"/home"}>
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
          )}
        </div>
      ) : (
        ""
      )}

      {type === "products" ? (
        <BoxProducts>
          <h3 style={{ paddingButton: "50px", left: 570 }}>
            {" "}
            <LiaDropbox style={{ fontSize: "40px", marginTop: "-5px" }} /> MIS
            PRODUCTOS
          </h3>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              style={{ display: "flex", flexDirection: "row" }}
            >
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
        /* <div>
          <ShowOrders />
        </div> */
        <BoxProducts>
          <DetailsOrder />
        </BoxProducts>
      ) : (
        ""
      )}

      {type === "clientes" ? (
        <div>
          <ShowClients />
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

const columns = [
  {
    accessorKey: "firstName",
    header: "First name",
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 80,
  },
  {
    accessorKey: "lastName",
    header: "Last name",
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 80,
  },
  {
    accessorKey: "age",
    header: "Age",
    enableEditing: false, //disable editing on this column
    enableSorting: false,
    size: 80,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
