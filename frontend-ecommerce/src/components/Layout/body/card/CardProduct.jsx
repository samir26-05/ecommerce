import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { data } from '../../../../data';

const defaultTheme = createTheme();

export const CardProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />

            <main>
                <Container sx={{ py: 15 }} maxWidth="lg">
                    <Grid container spacing={1.5}>
                        {data.map((product) => (
                            <Grid item key={product.id} xs={12} sm={4} md={4}>
                                <Card
                                    sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia component="img" sx={{ width:"100%", height:"100%" }} src={product.img} alt={product.nameProduct} />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6" component="h6">
                                            {product.nameProduct}
                                        </Typography>
                                        <Typography sx={{ fontSize: 14, color: 'grey' }}>
                                            Ref 5403/171/800.
                                        </Typography>
                                        <Typography sx={{ fontSize: 18, fontWeight: 'bold', marginTop: 2 }}>
                                            ${product.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => onAddProduct(product)}>Añadir al carrito</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider>
    );
}