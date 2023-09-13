/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Cta, Span } from "./HeaderStyled";
import { BiUser } from "react-icons/bi";
import { Carrito } from "./Car";
import { useState, useEffect } from "react";
import "./car.css";
import { Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

// eslint-disable-next-line react-refresh/only-export-components
export const pages = ["Inicio", "Mujer", "Hombre", "Todxs"];

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

  const isAdmin = false;

  return (
    <Container
      isUsedUser={isUsedUser}
      isUsedBody={isUsedBody}
      isUsedPayment={isUsedPayment}
      headerColor={headerColor}
      hovered={hovered}
    >
      <Toolbar>
        <Typography
          className="Typography"
          variant="h1"
          noWrap
          component="a"
          href="/home"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          sx={{
            mr: 1,
            display: { xs: "none", md: "flex" },
            color: isUsedUser || isUsedPayment ? "#000" : "#fff" && textColor,
            letterSpacing: ".8rem",
            fontWeight: 700,
            "&:hover": {
              color: "#000",
              textDecoration: "none",
            },
          }}
        >
          KALARY
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            margin: "0 1%",
          }}
        >
          {pages.map((page) => (
            <Link
              to={page === "Inicio" ? "/home" : `/section/${page}`}
              key={page}
              onClick={handleCloseNavMenu}
              style={{
                margin: "0 1%",
                textDecoration: "none",
                color:
                  isUsedUser || isUsedPayment
                    ? "#000"
                    : hovered
                    ? "#000"
                    : textColor,
              }}
            >
              <Cta>
                <Span
                  className="span"
                  textColor={textColor}
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
                  {" "}
                  {page}{" "}
                </Span>
              </Cta>
            </Link>
          ))}
        </Box>

        {isAdmin ? (
          <AdminDashboard textColor={textColor} />
        ) : (
          <>
            <Link
              to="/user"
              style={{
                width: "50px",
                margin: ".2% .1% 0 0",
              }}
            >
              <a className="icon-user">
                <BiUser
                  size={"70%"}
                  style={{
                    fill:
                      isUsedUser || isUsedPayment
                        ? "#000"
                        : hovered
                        ? "#000"
                        : textColor,
                  }}
                />
              </a>
            </Link>
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
            />
          </>
        )}
      </Toolbar>
    </Container>
  );
};

export default Header;
