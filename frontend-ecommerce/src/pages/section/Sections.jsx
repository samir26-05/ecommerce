/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Header from "../../components/Layout/header/Header.jsx";
import Footer from "../../components/Layout/footer/Footer.jsx";
import { useParams } from "react-router-dom";
import { Tab, Tabs, Pagination } from "@mui/material";
import { Categories } from "../../components/Layout/body/Category/IndexCategory.jsx";
import axios from "axios";
import { PageSections, Div } from "./SectionsStyled.jsx";
import { FlexDirCol } from "../../components/StyledMain.jsx";
import ShowProducts from "./ShowProducts.jsx";
import FilterSections from "./FilterSections.jsx";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <FlexDirCol>{children}</FlexDirCol>
        </Box>
      )}
    </div>
  );
}

export default function Sections() {
  const { page } = useParams();
  const [products, setProducts] = useState([]);
  const [userEnterUser, setUserEnterUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = React.useState(0);
  const [currentPageProductos, setCurrentPageProductos] = useState(1);
  const [currentPageHombre, setCurrentPageHombre] = useState(1);
  const [currentPageMujer, setCurrentPageMujer] = useState(1);
  const productsPerPage = 15;
  const urlBackend = import.meta.env.VITE_BACKEND_URL;

  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const verifyEnter = () => {
    return true;
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      // console.log(jwt_decode(localStorage.getItem("accessToken")), "❤❤❤❤");
      setLoading(false);
    } else {
      navigate("/");
    }

    const trueEnter = verifyEnter();
    setUserEnterUser(trueEnter);
    return () => {
      setUserEnterUser(false);
    };
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`${urlBackend}/product/`);
        setProducts(response.data.result);
        // console.log(response.data.result);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    }
    fetchProducts();
  }, []);

  let sectionProductsHombre;
  let sectionProductsMujer;
  let categoryProducts;
  if (page === "Hombre" || page === "Mujer") {
    sectionProductsHombre = products.filter(
      (product) => product.section.section === "Hombre"
    );
    sectionProductsMujer = products.filter(
      (product) => product.section.section === "Mujer"
    );
  }
  if (page === "Todxs") {
    sectionProductsHombre = products;
    sectionProductsMujer = products;
  } else {
    categoryProducts = products.filter(
      (product) => product.category.category === page
    );
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [ShadowColor, setShadowColor] = useState("#fff");
  const [ScrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (position > 100) {
      setShadowColor("transparent");
    } else {
      setShadowColor("#fff");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Función para manejar el cambio de página para la categoría "PRODUCTOS"
  const handlePageChangeProductos = (event, newPage) => {
    setCurrentPageProductos(newPage);
  };

  // Función para manejar el cambio de página para la categoría "Hombre"
  const handlePageChangeHombre = (event, newPage) => {
    setCurrentPageHombre(newPage);
  };

  // Función para manejar el cambio de página para la categoría "Mujer"
  const handlePageChangeMujer = (event, newPage) => {
    setCurrentPageMujer(newPage);
  };

  return (
    <PageSections ShadowColor={ShadowColor}>
      <Header isUsedUser={userEnterUser} />
      <h1 className="Tiltle">{page}</h1>
      {page === "Mujer" || page === "Hombre" ? (
        <div className="Category">
          <Tabs
            className="panel"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              className="Productos"
              label="productos"
              index={0}
              onClick={scrollToTop}
            />
            {Categories.map((item, index) => (
              <Tab label={item.name} key={index} onClick={scrollToTop} />
            ))}
          </Tabs>
        </div>
      ) : (
        ""
      )}
      <Div>
        <CustomTabPanel value={value} index={0}>
          <ShowProducts
            products={
              page === "Hombre" || page === "Mujer"
                ? page === "Hombre"
                  ? sectionProductsHombre.slice(
                      (currentPageHombre - 1) * productsPerPage,
                      currentPageHombre * productsPerPage
                    )
                  : sectionProductsMujer.slice(
                      (currentPageMujer - 1) * productsPerPage,
                      currentPageMujer * productsPerPage
                    )
                : page === "Todxs"
                ? products.slice(
                    (currentPageProductos - 1) * productsPerPage,
                    currentPageProductos * productsPerPage
                  )
                : categoryProducts.slice(
                    (currentPageProductos - 1) * productsPerPage,
                    currentPageProductos * productsPerPage
                  )
            }
            currentPage={
              page === "Hombre"
                ? currentPageHombre
                : page === "Mujer"
                ? currentPageMujer
                : currentPageProductos
            }
            productsPerPage={productsPerPage}
          />
          {/* Paginación para la categoría "PRODUCTOS" */}
          {page === "Todxs" && (
            <Pagination
              count={Math.ceil(products.length / productsPerPage)}
              page={currentPageProductos}
              onChange={              handlePageChangeProductos}
              variant="outlined"
              shape="rounded"
            />
          )}

          {/* Paginación para la categoría "Hombre" */}
          {page === "Hombre" && (
            <Pagination
              count={Math.ceil(sectionProductsHombre.length / productsPerPage)}
              page={currentPageHombre}
              onChange={handlePageChangeHombre}
              variant="outlined"
              shape="rounded"
            />
          )}

          {/* Paginación para la categoría "Mujer" */}
          {page === "Mujer" && (
            <Pagination
              count={Math.ceil(sectionProductsMujer.length / productsPerPage)}
              page={currentPageMujer}
              onChange={handlePageChangeMujer}
              variant="outlined"
              shape="rounded"
            />
          )}
        </CustomTabPanel>
        {Categories.map((item, index) => (
          <CustomTabPanel value={value} index={index + 1} key={index}>
            {page === "Mujer" || page === "Hombre" ? (
              <FilterSections
                category={item.name}
                sectionProducts={
                  page === "Hombre" ? sectionProductsHombre : sectionProductsMujer
                }
              />
            ) : (
              <ShowProducts products={products} />
            )}
          </CustomTabPanel>
        ))}
      </Div>
      <Footer />
    </PageSections>
  );
}

