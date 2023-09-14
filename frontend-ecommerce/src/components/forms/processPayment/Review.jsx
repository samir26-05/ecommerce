/* eslint-disable no-unused-vars */
import React from 'react';
/* MATERIAL UI */
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import CryptoJS from 'crypto-js'
import { useState } from 'react';
/* COMPONENTS */
import { useCart } from '../../Layout/body/products/CardContext';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const addresses = ['Calle', '1 de 2 que hay en el barrio', 'Mesolandia', 'Malambo', 'ATLCO'];
const payments = [
  { name: "Tipo tarjeta", detail: "Visa" },
  { name: "Titular tarjeta", detail: "Sr. Samir Orozco" },
  { name: "No. tarjeta", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Fecha expiracion", detail: "04/2024" },
];



export default function Review() {
  const { cart, updateCart } = useCart();
  const products = Array.isArray(cart) ? [...cart] : [];
  const totalCantidadProductos = products.reduce((total, product) => total + product.quantity, 0);
  const isTotalMayor6 = totalCantidadProductos > 6;
  const descuento = isTotalMayor6 ? products.reduce((total, product) => total + product.price * product.quantity, 0) * 0.1 : 0;
  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0) - descuento;
  const iva = subtotal * 0.19;

  
  const apiKey = '4Vj8eK4rloUd272L48hsrarnUA';// defecto
  const merchantId = '508029';// defecto
  const referenceCode = '00012345678901234';
  const amount = subtotal;
  const currency = 'COP';// defecto
  
  // Concatenamos las variables en el orden correcto
  const textToHash = `${apiKey}~${merchantId}~${referenceCode}~${amount}~${currency}`;
  
  // Creamos el hash MD5
  const hash = CryptoJS.MD5(textToHash).toString();
  console.log(hash);


  return (

    <React.Fragment>
      <div style={{ fontFamily: "-moz-initial", display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" gutterBottom sx={{ fontFamily: "-moz-initial" }}>
          DETALLE DE ORDEN DE COMPRA
        </Typography>
        <Typography gutterBottom sx={{ fontFamily: "-moz-initial" }}> {totalCantidadProductos} Productos
        </Typography>
      </div>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={`x ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.price * product.quantity}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0, marginTop: "20px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, flexDirection: "column", display: "flex" }}>
            {isTotalMayor6 && (
              <React.Fragment>
                <Typography>Descuento (10%): $ {descuento}</Typography>
                <Typography>Subtotal: $ {subtotal}</Typography>
              </React.Fragment>
            )}
            <Typography style={{ fontWeight: "bold" }}>Total a pagar: {subtotal}</Typography>
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Envío
          </Typography>
          <Typography gutterBottom>Samir Orozco</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalle de pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
           
          </Grid>
        </Grid>
      </Grid>
            <div>
              <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                <input name="merchantId" type="hidden" value="508029" />
                <input name="accountId" type="hidden" value="512321" />
                <input name="description" type="hidden" value="PAGOS ECOMMERCE KALARY" />
                <input name="referenceCode" type="hidden" value="00012345678901234" />
                <input name="amount" type="hidden" value={subtotal} />
                <input name="tax" type="hidden" value="0" />
                <input name="taxReturnBase" type="hidden" value="0" />
                <input name="currency" type="hidden" value="COP" />
                <input name="signature" type="hidden" value={hash}/>
                <input name="test" type="hidden" value="0" />
                <input name="buyerEmail" type="hidden" value="test@test.com" />
                <input name="responseUrl" type="hidden" value="http://www.test.com/response" />
                <input name="confirmationUrl" type="hidden" value="http://www.test.com/confirmation" />
                
                <Button  name="Submit"  type="submit" variant="" style={{ backgroundColor: "black", color: "white" }} >
                  PAGAR
                </Button>
              </form>
            </div>
           
    </React.Fragment>  
    
  );

}




