import { Div } from "./styled"
import Footer from "../footer/Footer"
import DemoAutoPlay from "./carrusel/DemoAutoPlay"
import { useState } from 'react';
import Button from '@mui/material/Button';
import LoginDrawer from "../../../pages/Login/Login";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Carrito } from "../header/Carrito";
import { ProductList } from "./products/ProductList";
import '../header/styled.css'
import "../../../car.css"
import SectionsBody from "./Sections/SectionsBody"

const pages = ['Inicio', 'Mujer', 'Hombre'];

export default function Body() {
  const handleCloseNavMenu = () => {
  };
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: "#ffffff" }}>
        <Container maxWidth="" sx={{ position: 'fixed', zIndex: 3, backgroundColor: "#ffffff" }}>
          <Toolbar disableGutters>
            <Typography className="Typography" variant="h1" noWrap component="a" href="/home" sx={{
              mr: 3, display: { xs: 'none', md: 'flex' }, color: '#000', textDecoration: 'none', letterSpacing: '.8rem', fontWeight: 700,
              "&:hover": {
                color: '#d8d8d8',
              },
            }}>
              KALARY
            </Typography>

            <Box className='box-primary' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button className="ja " variant="" key={page} onClick={handleCloseNavMenu} sx={{ fontWeight: 'bold', my: 1, color: 'black', margin: '0 15px', }}>
                  {page}
                </Button>
              ))}
            </Box>

            <Carrito allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts} />
            <Box sx={{ fontWeight: 'bold', my: 1, color: 'black', margin: '0 15px' }}>
              <LoginDrawer />
            </Box>
          </Toolbar>
        </Container>
        <Div>
          <DemoAutoPlay />

          <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} />
          <SectionsBody />
          <Footer />
        </Div>
      </AppBar>

      <Div>


      </Div>
    </>
  )
}
