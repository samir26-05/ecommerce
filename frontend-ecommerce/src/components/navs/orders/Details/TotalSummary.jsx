/* MATERIAL UI */
import { Card, Box, Grid, Typography, ListItem, ListItemText } from '@mui/material';
import { useCart } from '../../../Layout/body/products/CardContext';


export default function TotalSummary() {

    const { cart } = useCart();
    const products = Array.isArray(cart) ? [...cart] : [];
    const totalCantidadProductos = products.reduce((total, product) => total + product.quantity, 0);
    const isTotalMayor6 = totalCantidadProductos > 6;
    const descuento = isTotalMayor6 ? products.reduce((total, product) => total + product.price * product.quantity, 0) * 0.1 : 0;

    const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
    const iva = subtotal * 0.19;
    const subTotal2 = subtotal - iva
    const valorTotal = subTotal2 + iva - descuento

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
                                <ListItemText primary={subTotal2} />
                            </ListItem>
                            <ListItem sx={{ py: 1, px: 4 }}>
                                <ListItemText secondary="IVA 19% --------------------------------" />
                                <ListItemText primary={iva} />
                            </ListItem>
                            <ListItem sx={{ py: 1, px: 4 }}>
                                <ListItemText secondary="DESCUENTO --------------------------" />
                                <ListItemText primary={descuento} />
                            </ListItem>
                            <ListItem sx={{ py: 1, px: 4 }}>
                                <ListItemText secondary="ENVIO -----------------------------------" />
                                <ListItemText primary="$ 0" />
                            </ListItem>

                        </Grid>
                    </Grid>
                    {/* TOTALES */}
                    <Grid item container xs={6} sm={10} sx={{
                        border: "solid 1px gray", marginLeft: "40px", justifyContent: "space-around", textAlign: "center", fontWeight: "bold", height: "auto"
                    }}>
                        <Typography > {totalCantidadProductos} Productos </Typography>
                        <Typography style={{ fontWeight: "bold" }}>Total a pagar: {valorTotal}</Typography>
                    </Grid>
                </Box>


            </Card>
        </div>
    )
}
