/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
/* MATERIAL UI */
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Swal from 'sweetalert2'
import { Box, Button } from "@mui/material";
import CryptoJS from 'crypto-js'
import axios from "axios";
/* COMPONENTS */
import { useCart } from '../../Layout/body/products/CardContext';
import TotalSummary from '../../navs/orders/Details/TotalSummary';


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
  const [error, setError] = useState();


  const token = localStorage.getItem("accessToken")
  const userName = localStorage.getItem("username");
  const urlBackend = import.meta.env.VITE_BACKEND_URL
  console.log(token)

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
        console.log(response.data, "❤️❤️❤️")
      } catch (error) {
        setError(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrió un error al intentar almacenar la información!'
        })
      }
    }

    fetchOneClients();
  }, [userName]);

  const { cart, updateCart } = useCart();
  const products = Array.isArray(cart) ? [...cart] : [];
  const totalCantidadProductos = products.reduce((total, product) => total + product.quantity, 0);
  const isTotalMayor6 = totalCantidadProductos > 6;
  const descuento = isTotalMayor6 ? products.reduce((total, product) => total + product.price * product.quantity, 0) * 0.1 : 0;

  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const iva = subtotal * 0.19;
  const subTotal2 = subtotal - iva
  const valorTotal = subTotal2 + iva - descuento


  const apiKey = '4Vj8eK4rloUd272L48hsrarnUA';// defecto
  const merchantId = '508029';// defecto
  const referenceCode = '00012345678901234455';
  const amount = subtotal;
  const currency = 'COP';// defecto

  // Concatenamos las variables en el orden correcto
  const textToHash = `${apiKey}~${merchantId}~${referenceCode}~${amount}~${currency}`;

  // Creamos el hash MD5
  const hash = CryptoJS.MD5(textToHash).toString();
  console.log(hash);


  return (
    <React.Fragment>
      <Grid container spacing={6} sx={{ padding: "0px 0px 25px 0px" }}>
        <Grid item xs={12} sm={6}>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Cliente" secondary={oneClients?.Personal_information?.nombre + " " + oneClients?.Personal_information?.apellido} />
          </ListItem>
          <ListItem sx={{ marginTop: "-20px", px: 0 }}>
            <ListItemText secondary={oneClients?.Personal_information?.Phone_number} />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Domicilio y contacto" secondary={oneClients?.Personal_information?.address + " / " + oneClients?.Personal_information?.city} />
          </ListItem>
          <ListItem sx={{ marginTop: "-20px", px: 0 }}>
            <ListItemText secondary={oneClients?.Personal_information?.country} />
          </ListItem>
        </Grid>
      </Grid>

      {/* DETALLE DE PRODUCTOS */}
      <div style={{ fontFamily: "-moz-initial", display: "flex", justifyContent: "center", }}>
        <Typography variant="h5" gutterBottom sx={{ fontFamily: "-moz-initial" }}>
          Detalle orden de compra
        </Typography>
      </div>
      <Grid container spacing={0} sx={{ padding: "0px 0px 15px 0px" }}>
        <Grid item xs={3} sm={4}>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText> {totalCantidadProductos} PRODUCTO(S)</ListItemText>
          </ListItem>
        </Grid>
        <Grid item xs={0} sm={4}>
          <ListItem sx={{ py: 1, px: 16 }}>
            <ListItemText primary="VALOR" />
          </ListItem>
        </Grid>
        <Grid item xs={0} sm={4}>
          <ListItem sx={{ py: 1, px: 8 }}>
            <ListItemText primary="IMPORTE" />
          </ListItem>
        </Grid>
      </Grid>


      <Grid container spacing={1} sx={{ padding: "0px 0px 25px 0px" }}>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 1 }}>
            <Grid item xs={3} sm={7}>
              <ListItemText primary={product.name} secondary={`x ${product.quantity}`} />
            </Grid>
            <Grid item xs={3} sm={1}>
              <ListItem sx={{ py: 0, px: 1 }}>
                {product.price}
              </ListItem>
            </Grid>
            <Grid item xs={3} sm={2}>
              <ListItem sx={{ py: 0, px: 10 }}>
                {product.price * product.quantity}
              </ListItem>
            </Grid>
          </ListItem>
        ))}

      </Grid>

      {/* TOTALES */}
      <Grid item xs={6} sm={12} sx={{ px: 2, flexDirection: "row", display: "flex", border: "solid 1px gray", justifyContent: "space-around", alignItems: "center", fontWeight: "bold", height: "auto" }}>
        <Box>
          <Typography >  SubTotal: ------------------------------------- </Typography>
          <Typography >  Iva (19%): ------------------------------------ </Typography>
          <ListItem sx={{ py: 1, px: 0 }}>
            <Typography variant="subtitle1" sx={{ flexDirection: "row", display: "flex" }}>
              {isTotalMayor6 && (
                <React.Fragment>
                  <Typography>Descuento (10%): -------------------------- </Typography>
                </React.Fragment>
              )}
            </Typography>
          </ListItem>
          <Typography style={{ fontWeight: "bold" }}>Total a pagar: ------------------------------</Typography>
        </Box>
        <Box>
          <Typography > $ {subTotal2} </Typography>
          <Typography > $ {iva} </Typography>
          <ListItem sx={{ py: 1, px: 0 }}>
            <Typography variant="subtitle1" sx={{ flexDirection: "row", display: "flex" }}>
              {isTotalMayor6 && (
                <React.Fragment>
                  <Typography> $ {descuento}</Typography>
                </React.Fragment>
              )}
            </Typography>
          </ListItem>
          <Typography style={{ fontWeight: "bold" }}>$ {valorTotal}</Typography>
          <React.Fragment>

          </React.Fragment>
        </Box>

      </Grid>

      <div>
        <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
          <input name="merchantId" type="hidden" value="508029" />
          <input name="accountId" type="hidden" value="512321" />
          <input name="description" type="hidden" value="PAGOS ECOMMERCE KALARY" />
          <input name="referenceCode" type="hidden" value="00012345678901234455" />
          <input name="amount" type="hidden" value={subtotal} />
          <input name="tax" type="hidden" value="0" />
          <input name="taxReturnBase" type="hidden" value="0" />
          <input name="currency" type="hidden" value="COP" />
          <input name="signature" type="hidden" value={hash} />
          <input name="test" type="hidden" value="0" />
          <input name="buyerEmail" type="hidden" value={localStorage.getItem("email")} />
          <input name="responseUrl" type="hidden" value="http://www.test.com/response" />
          <input name="confirmationUrl" type="hidden" value="http://localhost:5173/home" />
          <Button name="Submit" type="submit" variant="" style={{ backgroundColor: "black", color: "white", marginLeft: "390px", marginTop: "50px" }} >
            PAGAR
          </Button>
        </form>
      </div>

    </React.Fragment>

  );



}




