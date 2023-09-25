/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Header from "../../components/Layout/header/Header.jsx";
import Footer from '../../components/Layout/footer/Footer.jsx'
import { useParams } from "react-router-dom";
import { Pagination, Tab, Tabs } from "@mui/material";
import { Categories } from "../../components/Layout/body/Category/IndexCategory.jsx";
import axios from "axios";
import { Div } from "../../components/Layout/footer/FooterStyled.jsx";
import { FlexDirCol, FlexRow } from "../../components/StyledMain.jsx";
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
  if (page === 'Hombre' || page === 'Mujer') {
    sectionProducts = products.filter((product) => product.section.section === page);
  } else {
    sectionProducts = products.filter((product) => product.category.category === page);
  }

  return (
    <Box sx={{ borde: "1px solid red", width: "100%", height: "100vh", overflowY: "scroll" }}>
      <Header isUsedUser={userEnterUser} />
      <h1 style={{ marginTop: "120px", textAlign: "center" }}>{page}</h1>
      {page === 'Mujer' || page === 'Hombre' ?
        <Box sx={{ width: '100%', bgcolor: 'background.paper', display: "flex", justifyContent: "center" }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example" >
            <Tab label='productos' index={0} />
            {Categories.map((item, index) => (
              <Tab label={item.name} key={index} />
            ))}
          </Tabs>
        </Box>
        : ""}

      <Div>
        <CustomTabPanel value={value} index={0}>
          <FlexRow style={{ flexWrap: "wrap" }}>
            <ShowProducts products={page === 'Hombre' || page === 'Mujer' ? sectionProducts : products} currentPage={currentPage} productsPerPage={productsPerPage} />
          </FlexRow>
          {sectionProducts.length > productsPerPage && (
            <Pagination
              count={Math.ceil(sectionProducts.length / productsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          )}
        </CustomTabPanel>
        {Categories.map((item, index) => (
          <CustomTabPanel value={value} index={index + 1} key={index}>
            <FlexRow style={{ flexWrap: "wrap" }}>

              {page === 'Mujer' || page === 'Hombre' ? 
              <FilterSections category={item.name} sectionProducts={sectionProducts} />
              : 
              <ShowProducts products={products}/>
              }
              
            </FlexRow>
            {sectionProducts.length > productsPerPage && (
              <Pagination
                count={Math.ceil(sectionProducts.length / productsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
              />
            )}
          </CustomTabPanel>
        ))}
      </Div>

      <Footer />
    </Box>
  );
}
