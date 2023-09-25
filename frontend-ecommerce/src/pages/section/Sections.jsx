/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const verifyEnter = () => {
    return true;
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      console.log(jwt_decode(localStorage.getItem("accessToken")), "❤❤❤❤");
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
        const response = await axios.get("http://localhost:3000/product/");
        setProducts(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    }
    fetchProducts();
  }, []);

  let sectionProducts;
  let categoryProducts;
  if (page === "Hombre" || page === "Mujer") {
    sectionProducts = products.filter(
      (product) => product.section.section === page
    );
  } if (page === "Todxs") {
      sectionProducts = products
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

  return (
    <PageSections>
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
            <Tab label="productos" index={0} onClick={scrollToTop} />
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
            products={sectionProducts}
            currentPage={currentPage}
            productsPerPage={productsPerPage}
          />
          {/* {sectionProducts.length > productsPerPage && (
            <Pagination
              count={Math.ceil(sectionProducts.length / productsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          )} */}
        </CustomTabPanel>
        {Categories.map((item, index) => (
          <CustomTabPanel value={value} index={index + 1} key={index}>
            {page === "Mujer" || page === "Hombre" ? (
              <FilterSections
                category={item.name}
                sectionProducts={sectionProducts}
              />
            ) : (
              <ShowProducts products={categoryProducts} />
            )}
            {/* {sectionProducts.length > productsPerPage && (
              <Pagination
                count={Math.ceil(sectionProducts.length / productsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
              />
            )} */}
          </CustomTabPanel>
        ))}
      </Div>
      <Footer />
    </PageSections>
  );
}
