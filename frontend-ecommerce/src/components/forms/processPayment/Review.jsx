/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
/* MATERIAL UI */
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Swal from "sweetalert2";
import { Box, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import axios from "axios";
/* COMPONENTS */
import { useCart } from "../../Layout/body/products/CardContext";

export default function Review() {
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
  const [error, setError] = useState(null); // Cambiado para inicializar como nulo

  const token = localStorage.getItem("accessToken");
  const userName = localStorage.getItem("username");
  const urlBackend = import.meta.env.VITE_BACKEND_URL;
  const urlFrontend = import.meta.env.VITE_FRONTEND_URL;
  const apiKey = import.meta.env.VITE_APIKEY; // Llave de la api de payU
  const merchantId = import.meta.env.VITE_MERCHANTID;

  useEffect(() => {
    async function fetchOneClients() {
      try {
        const response = await axios.get(
          `${urlBackend}/user/name/${userName}`,
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
          iconColor: "#ff0000",
          color: "#000",
          showConfirmButton: false,
          confirmButtonColor: "#000",
          timer: 1000,
        });
      }
    }

    fetchOneClients();
  }, [userName, token]); // Agregado token a las dependencias

  const { cart, updateCart } = useCart();
  const products = Array.isArray(cart) ? [...cart] : [];
  const totalCantidadProductos = products.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const isTotalMayor6 = totalCantidadProductos > 6;
  const descuento = isTotalMayor6
    ? products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      ) * 0.1
    : 0;
  const shipment = 4000; // Envío

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity + shipment,
    0
  );
  const iva = subtotal * 0.19;
  const subTotal2 = subtotal - iva;
  const valorTotal = subTotal2 + iva - descuento;

  const referenceCode = uuidv4();
  const amount = subtotal;
  const currency = "COP"; // defecto

  // Concatenamos las variables en el orden correcto
  const textToHash = `${apiKey}~${merchantId}~${referenceCode}~${amount}~${currency}`;

  // Creamos el hash MD5
  const hash = CryptoJS.MD5(textToHash).toString();

  const createOrder = async () => {
    try {
      const productOrder = products.map(producto => ({
        product_id: producto.product_id,
        stock: producto.quantity,
      }));
      
      await axios.post(`${urlBackend}/order/create`,
        {
          subtotal: subtotal,
          discount: descuento,
          iva: iva,
          shipment: shipment,
          total: valorTotal,
          products: productOrder,
          reference: referenceCode,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      localStorage.removeItem("cart") //Limpiar carrito
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error al intentar crear la orden",
        iconColor: "#ff0000",
        color: "#000",
        showConfirmButton: false,
        confirmButtonColor: "#000",
        timer: 1000,
      });
      console.error(error);
    }
  };

  return (
    <>
      <Grid container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Grid>
            <ListItem>
              <ListItemText
                primary="Cliente"
                secondary={
                  oneClients?.Personal_information?.nombre +
                  " " +
                  oneClients?.Personal_information?.apellido
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                secondary={oneClients?.Personal_information?.Phone_number}
              />
            </ListItem>
          </Grid>
          <Grid>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary="Domicilio y contacto"
                secondary={
                  oneClients?.Personal_information?.address +
                  " / " +
                  oneClients?.Personal_information?.city
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                secondary={oneClients?.Personal_information?.country}
              />
            </ListItem>
          </Grid>
        </div>
      </Grid>
      <div
        style={{
          fontFamily: "-moz-initial",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontFamily: "-moz-initial" }}
        >
          Información de compra
        </Typography>
      </div>

      <Grid container spacing={0}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid gray",
          }}
        >
          <div
            style={{
              marginLeft: "4%",
            }}
          >
            <Grid item>
              <ListItem>
                <ListItemText>
                  {totalCantidadProductos} {"Producto(s)"}
                </ListItemText>
              </ListItem>
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "40%",
            }}
          >
            <Grid item>
              <ListItem>
                <ListItemText primary="Precio" />
              </ListItem>
            </Grid>
            <Grid item>
              <ListItem>
                <ListItemText primary="Importe" />
              </ListItem>
            </Grid>
          </div>
        </div>
      </Grid>

      <Grid container spacing={0}>
        {products.map((product) => {
          const totalPrice = product.price * product.quantity;

          return (
            <ListItem
              key={product.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Grid item>
                <ListItem>
                  <ListItemText
                    primary={product.name}
                    secondary={`x ${product.quantity}`}
                  />
                </ListItem>
              </Grid>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "40%",
                }}
              >
                <Grid item>
                  <ListItem>
                    <ListItemText
                      primary={product.price.toLocaleString("es-CO", {
                        style: "currency",
                        currency: "COP",
                        minimumFractionDigits: 0,
                      })}
                    />
                  </ListItem>
                </Grid>

                <Grid item>
                  <ListItem>
                    <ListItemText
                      primary={totalPrice.toLocaleString("es-CO", {
                        style: "currency",
                        currency: "COP",
                        minimumFractionDigits: 0,
                      })}
                    />
                  </ListItem>
                </Grid>
              </div>
            </ListItem>
          );
        })}
      </Grid>

      <Grid item spacing={0}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            width: "100%",
            padding: "2% 2.5% 0 6%",
            borderTop: "1px solid gray",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography>
              SubTotal: ----------------------------------------------
            </Typography>
            <Typography>
              {subTotal2.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
              })}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography>
              Iva (19%): ---------------------------------------------
            </Typography>
            <Typography>
              {iva.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
              })}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography>
              Gasto de envío: --------------------------------------
            </Typography>
            <Typography>
              {shipment.toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
              })}
            </Typography>
          </div>

          {isTotalMayor6 && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                paddingBottom: "3%",
              }}
            >
              <Typography>
                Descuento (10%): -----------------------------------
              </Typography>
              <Typography>
                {descuento.toLocaleString("es-CO", {
                  style: "currency",
                  currency: "COP",
                  minimumFractionDigits: 0,
                })}
              </Typography>
            </div>
          )}
        </div>
      </Grid>
      <Grid item spacing={0}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "2% 2.5% 0 6%",
            borderTop: "1px solid gray",
          }}
        >
          <Typography style={{ fontWeight: "700" }}>
            Total a pagar: ---------------------------------------
          </Typography>
          <Typography style={{ fontWeight: "700" }}>
            {valorTotal.toLocaleString("es-CO", {
              style: "currency",
              currency: "COP",
              minimumFractionDigits: 0,
            })}
          </Typography>
        </div>
      </Grid>

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          padding: "5% 5% 0 0",
          width: "100%",
        }}
      >
        <form
          method="post"
          action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
        >
          <input name="merchantId" type="hidden" value="508029" />
          <input name="accountId" type="hidden" value="512321" />
          <input
            name="description"
            type="hidden"
            value="PAGOS ECOMMERCE KALARY"
          />
          <input name="referenceCode" type="hidden" value={referenceCode} />
          <input name="amount" type="hidden" value={subtotal} />
          <input name="tax" type="hidden" value="0" />
          <input name="taxReturnBase" type="hidden" value="0" />
          <input name="currency" type="hidden" value="COP" />
          <input name="signature" type="hidden" value={hash} />
          <input name="test" type="hidden" value="0" />
          <input
            name="buyerEmail"
            type="hidden"
            value={localStorage.getItem("email")}
          />
          <input
            name="responseUrl"
            type="hidden"
            value="http://localhost:5173/home"
          />
          <input
            name="confirmationUrl"
            type="hidden"
            value="https://3bf7-186-147-59-58.ngrok.io/order/webhook"
          />
          <Button
            name="Submit"
            type="submit"
            onClick={() => createOrder()}
            variant=""
            style={{ backgroundColor: "black", color: "white" }}
          >
            PAGAR
          </Button>
        </form>
      </div>
    </>
  );
}
