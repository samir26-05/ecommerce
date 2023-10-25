/* eslint-disable react/prop-types */
/* MATERIAL UI */
import { Card, Box, Grid, Typography, ListItem, ListItemText } from '@mui/material';


export default function TotalSummary({order}) {

  const countProducts = Array.isArray(order.products)
    ? order.products.reduce((count, product) => count + product.cantidad, 0) : 0

  return (
    <div style={{ width: "100%" }}>
      <Card sx={{ display: 'flex', width: "100%", marginBottom: 5, padding: "20px 0px 20px 0px" }}>
        <Box sx={{ width: '100%' }}>
          <div style={{ fontFamily: "-moz-initial", display: "flex", justifyContent: "center", }}>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: "-moz-initial" }}>
              RESUMEN TOTAL
            </Typography>
          </div>

          <Grid spacing={0} sx={{ padding: "0px 0px 15px 20px" }}>
            <Grid item xs={3} sm={4}>
              <ListItem sx={{ py: 1, px: 4 }}>
                <ListItemText secondary="SUBTOTAL ----------------------------" />
                <ListItemText primary={order.subtotal} />
              </ListItem>
              <ListItem sx={{ py: 1, px: 4 }}>
                <ListItemText secondary="IVA 19% --------------------------------" />
                <ListItemText primary={order.iva} />
              </ListItem>
              <ListItem sx={{ py: 1, px: 4 }}>
                <ListItemText secondary="DESCUENTO --------------------------" />
                <ListItemText primary={order.discount} />
              </ListItem>
              <ListItem sx={{ py: 1, px: 4 }}>
                <ListItemText secondary="ENVIO -----------------------------------" />
                <ListItemText primary={`$${order.envio ? order.envio : 0}`} />
              </ListItem>

            </Grid>
          </Grid>
          {/* TOTALES */}
          <Grid item container xs={6} sm={10} sx={{
            border: "solid 1px gray", marginLeft: "40px", justifyContent: "space-around", textAlign: "center", fontWeight: "bold", height: "auto"
          }}>
            <Typography> {countProducts} Productos </Typography>
            <Typography style={{ fontWeight: "bold" }}>Total a pagar: {order.total_value + order.envio}</Typography>
          </Grid>
        </Box>


      </Card>
    </div>
  )
}
