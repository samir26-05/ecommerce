/* eslint-disable no-unused-vars */
import React from 'react';
/* MATERIAL UI */
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
/* COMPONENTS */
import { useCart } from '../../Layout/body/products/CardContext';

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
  const totalFactura = subtotal;

  return (
    
    <React.Fragment>
      <div style={{ fontFamily:"-moz-initial", display: "flex", justifyContent:"space-between"}}>
      <Typography variant="h5" gutterBottom sx={{ fontFamily:"-moz-initial"}}>
        Order summary
      </Typography>
      <Typography  gutterBottom sx={{ fontFamily:"-moz-initial"}}> {totalCantidadProductos} Productos
      </Typography>
      </div>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.nameProduct} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.nameProduct}
              secondary={`x ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.price * product.quantity}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0, marginTop:"20px" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, flexDirection:"column", display:"flex" }}>
            {isTotalMayor6 && (
              <React.Fragment>
                <Typography>Descuento (10%): $ {descuento.toFixed(3)}</Typography>
                <Typography>Subtotal: $ {subtotal.toFixed(3)}</Typography>
              </React.Fragment>
            )}
            <Typography style={{fontWeight:"bold"}}>Total a pagar: {subtotal.toFixed(3)}</Typography>
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
    </React.Fragment>
  );
}