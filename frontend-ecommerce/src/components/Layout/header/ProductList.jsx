import { ThemeProvider, CssBaseline, Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'; // Importa los componentes de Material-UI que necesitas
import { data } from '../../../data';
import '../../../car.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const ProductList = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal, }) => {
	const onAddProduct = (product) => {
		if (allProducts.find((item) => item.id === product.id)) {
			const products = allProducts.map((item) =>
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
							<Grid item key={product.id} xs={12} sm={3} md={3}>
								<Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }} >
									<CardMedia component="img" sx={{ width: '100%', height: '100%' }} src={product.img} alt={product.nameProduct} />
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography gutterBottom variant="h6" component="h6">
											{product.nameProduct}
										</Typography>
										<Typography sx={{ fontSize: 14, color: 'grey' }} >
											Ref 5403/171/800.
										</Typography>
										<Typography sx={{ fontSize: 18, fontWeight: 'bold', marginTop: 2 }} >
											${product.price}
										</Typography>
									</CardContent>
									<CardActions>
										<button className='btn-add-car' size="small" onClick={() => onAddProduct(product)}>
											<AddShoppingCartIcon style={{ color: 'white' }}/>
										</button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
};


const defaultTheme = {};

export default ProductList;
