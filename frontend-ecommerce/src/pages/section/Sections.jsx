/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Header, { pages } from "../../components/Layout/header/Header.jsx";
import { useCart } from "../../components/Layout/body/products/CardContext.jsx";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  ContainerCard,
  Tiltle,
} from "../../components/Layout/body/products/StyledProductList.jsx";
import { Card, CardContent, Pagination, Tab, Tabs } from "@mui/material";
import { Price } from "../infoProducts/styleProducts.jsx";
import { GiShoppingBag } from "react-icons/gi";

export default function Sections() {
  const { page } = useParams();
  const { cart, updateCart } = useCart();
  const [products, setProducts] = useState([]);
  const [userEnterUser, setUserEnterUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let sectionProducts;
  const verifyEnter = () => {
    return true;
  };

  let navigate = useNavigate();

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



  if (page === 'Hombre' || page === 'Mujer') {
    sectionProducts = products.filter((product) => product.section.section === page);
  } else {
    sectionProducts = products.filter((product) => product.category.category === page);
  }

  const onAddProduct = (product) => {
    const updatedCart = Array.isArray(cart) ? [...cart] : [];
    const existingProduct = updatedCart.find(
      (item) => item.product_id === product.product_id
    );

    if (existingProduct) {
      existingProduct.quantity++; 
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    updateCart(updatedCart);
  };

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

    // Llama a la función fetchProducts dentro del efecto
    fetchProducts();
  }, []);

  return (
    <Box sx={{ width: "100%", height: "100vh", overflowY: "scroll"}}>
      <Header isUsedUser={userEnterUser} />
      <h1 style={{ marginTop: "120px", textAlign:"center" }}>{page}</h1>
      <Box sx={{ width:'100%', bgcolor: 'background.paper', display:"flex", justifyContent:"center", border: "solid 1px red"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
      <FlexRow style={{ flexWrap: "wrap"}}>
        {sectionProducts.map((item) => (
          <ContainerCard key={item.id} style={{width:"18%"}}>
            <Card>
              <Link to={`/InfoProducts/${item.id}`}>
                <Imagen src={item.img_video} alt={item.name} style={{width:"100%", objectFit:"cover"}}/>
              </Link>
              <CardContent>
                <Tiltle>{item.name}</Tiltle>
                <Price style={{justifyContent:"space-between", display:"flex"}}>
                  ${item.price}
                  <GiShoppingBag
                    onClick={() => onAddProduct(item)}
                    size={"10%"}
                  />
                </Price>
              </CardContent>
            </Card>
            
          </ContainerCard>
          
        ))}
      </FlexRow><Pagination count={10} variant="outlined" />
    </Box>
  );
}

import styled from "styled-components";
import { FlexRow } from "../../components/StyledMain.jsx";
import { ClassNames } from "@emotion/react";

export const Imagen = styled.img`
  width: 300px;
  height: 450px;
`;
