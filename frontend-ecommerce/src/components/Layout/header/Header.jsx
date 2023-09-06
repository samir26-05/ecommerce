/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Cta, Span } from "./styledHeader";
import { Carrito } from "./Carrito";
import { useState, useEffect } from "react";
import "./car.css";
import "./header.css";
import { Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

export const pages = ["Inicio", "Mujer", "Hombre"];

const Header = ({
  products,
  newProducts,
  inTotal,
  newTotal,
  cantProducts,
  newCantProducts,
  isUsedUser,
  isUsedPayment,
  isUsedBody,
}) => {
  const handleCloseNavMenu = () => {};
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const [, setScrollPosition] = useState(0);
  const [headerColor, setHeaderColor] = useState("transparent");
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

  const isAdmin = false

  return (
    <AppBar style={{ background: "none" }}>
      <Container
        maxWidth=""
        sx={{
          position: (isUsedUser ? "fixed" : "") || (isUsedBody ? "fixed" : ""),
          zIndex: 3,
          boxShadow: isUsedBody
            ? headerColor !== "transparent"
              ? "0px 0px 3px 2px #0000003b"
              : "0px 0px 0px 0px"
            : "0px 0px 3px 2px #0000003b",
          transition: "all 0.2s ease-in-out",
        }}
        style={{
          backgroundColor:
            isUsedUser || isUsedPayment
              ? "#fff"
              : hovered
              ? "#fff"
              : headerColor,
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
              mr: 1,
              display: { xs: "none", md: "flex" },
              color: isUsedUser || isUsedPayment ? "#000" : "#fff" && textColor,
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
              <Link
                to={
                  page === "Inicio"
                    ? "/"
                    : page === "Hombre"
                    ? "/hombres"
                    : "/mujer"
                }
                key={page}
                onClick={handleCloseNavMenu}
                style={{
                  textDecoration: "none",
                  color:
                    isUsedUser || isUsedPayment
                      ? "#000"
                      : hovered
                      ? "#000"
                      : textColor,
                }}

              >
                <Cta className="cta">
                  <Span className="span"
                  textColor = {textColor}
                  style={{
                    textDecoration: "none",
                    color:
                      isUsedUser || isUsedPayment
                        ? "#000"
                        : hovered
                        ? "#000"
                        : textColor,
                  }}> {page} </Span>
                </Cta>
              </Link>
            ))}
          </Box>

          {isAdmin ? 
          <AdminDashboard textColor={textColor}/>
          : 
          <Carrito
            allProducts={products}
            setAllProducts={newProducts}
            total={inTotal}
            setTotal={newTotal}
            countProducts={cantProducts}
            setCountProducts={newCantProducts}
            color={textColor}
            hover={hovered}
            pageUsed={isUsedUser}
            pagePayment={isUsedPayment}
          />}
          
          <Box
            sx={{
              fontWeight: "bold",
              my: 1,
              color: "black",
              margin: "0 15px",
            }}
          >
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
