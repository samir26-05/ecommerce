import LoginDrawer from "../../../pages/Login/Login";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './styled.css'
import { Carrito } from "./Carrito";
import { ProductList } from "./ProductList";
import { useState } from "react";
import "../../../car.css"

const pages = ['Inicio', 'Mujer', 'Hombre'];

const Header = () => {
  const handleCloseNavMenu = () => {
  };
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <AppBar position="sticky" style={{ backgroundColor: "#ffffff" }}>
      <Container maxWidth="">
        <Toolbar disableGutters>
          <Typography
            className="Typography"
            variant="h1"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              color: '#000',
              textDecoration: 'none',
              letterSpacing: '.8rem',
              fontWeight: 700,
              "&:hover": {
                color: '#d8d8d8',
              },
            }}>KALARY
          </Typography>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000000',
              textDecoration: 'none',
            }}>KALARY
          </Typography>

          <Box
            className='box-primary'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}>
            {pages.map((page) => (
              <Button
                className="ja"
                variant=""
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  fontWeight: 'bold',
                  my: 1,
                  color: 'black',
                  margin: '0 15px',
                }}>
                {page}
              </Button>
            ))}
          </Box>

          <Carrito
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
          <Box sx={{
            fontWeight: 'bold',
            my: 1,
            color: 'black',
            margin: '0 15px',

          }}>
            <LoginDrawer />
          </Box>
        </Toolbar>
      </Container>
     {/*  <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts} /> */}
    </AppBar>
  );
}

export default Header;