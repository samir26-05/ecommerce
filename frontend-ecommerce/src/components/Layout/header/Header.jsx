import LoginDrawer from "../../../pages/Login/Login";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Carrito } from "./Carrito";
/* import { ProductList } from "./ProductList"; 
 import { CardProduct } from "../body/card/CardProduct"; */
import { useState, useEffect } from "react";
import "./styled.css";
import "../../../car.css";

const pages = ["Inicio", "Mujer", "Hombre"];

const Header = ({ products, newProducts, inTotal, newTotal, cantProducts, newCantProducts, isUsed }) => {
  const handleCloseNavMenu = () => {};

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerColor, setHeaderColor] = useState("#00000000");
  const [textColor, setTextColor] = useState("#fff");

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    // Cambiar el color del header según la posición del scroll
    if (position > 100) {
      setHeaderColor("#fff");
      setTextColor("#000");
    } else {
      setHeaderColor("transparent");
      setTextColor("#fff");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position="relative">
      <Container
        maxWidth=""
        sx={{
          position: isUsed ? '' : "fixed",
          zIndex: 3,
          transition: "all 0.2s ease-in-out",
        }}
        style={{
          backgroundColor: (hovered ? "#fff" : "#00000000" && isUsed ? '#000' : headerColor),
        }}
      >
        <Toolbar disableGutters>
          <Typography
            className="Typography"
            variant="h1"
            noWrap
            component="a"
            href="/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              color: isUsed ? '#fff' : textColor,
              textDecoration: "none",
              letterSpacing: ".8rem",
              fontWeight: 700,
              "&:hover": {
                color: "#000",
              },
            }}
          >
            KALARY
          </Typography>

          <Box
            className="box-primary"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                className="ja whithoutOutline"
                variant=""
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ fontWeight: "bold", my: 1, margin: "0 15px" }}
                style={{ color: hovered ? "black" : "white" && isUsed ? '#fff' : textColor }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Carrito
            allProducts={products}
            setAllProducts={newProducts}
            total={inTotal}
            setTotal={newTotal}
            countProducts={cantProducts}
            setCountProducts={newCantProducts}
            color={textColor}
            hover={hovered}
            pageUsed={isUsed}
          />
          <Box
            sx={{
              fontWeight: "bold",
              my: 1,
              color: "black",
              margin: "0 15px",
            }}
          >
            <LoginDrawer hover={hovered} color={textColor} pageUsed={isUsed}/>
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
};

export default Header;
