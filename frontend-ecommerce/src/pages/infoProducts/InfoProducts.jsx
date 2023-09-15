/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { MainDiv, Colores, BoxMain, Section1, Section2, Image, Title, Reference, Price, TitleSize, Sizes, ButtonBuys, Size, ColorProducts, Buys, } from "./styleProducts";
import Header from "../../components/Layout/header/Header";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AddProduct from "../../utils";

const InfoProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [userEnterUser, setUserEnterUser] = useState(false);
  let navigate = useNavigate();

  const verifyEnter = () => {
    return true;
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLoading(false)
    } else {
      navigate('/')
    }

    // Llama a la función fetchProducts dentro del efecto
    fetchProducts();

    const trueEnter = verifyEnter();
    setUserEnterUser(trueEnter);
    return () => {
      setUserEnterUser(false);
    };
  }, []);   
  
  
  async function fetchProducts() {
    try {
      const response = await axios.get("http://localhost:3000/product/");
      setProducts(response.data.result);
      console.log(response.data.result);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  }


  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (index) => {
    if (selectedSize === index) {
      setSelectedSize(null);
    } else {
      setSelectedSize(index);
    }
  };

  const product = products.find(element => element.name === name);
  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <MainDiv>
            {loading ? (
        <>
          <h1>Cargando......</h1>
        </>
      ) : ( <>
      <Header isUsedUser={userEnterUser}/>
      <BoxMain>
        <Section1>
          <Image src={product.img_video} alt={product.name}></Image>
        </Section1>
        <Section2>
          <Title>{product.name}</Title>
          <Reference>Ref: {product.product_id}</Reference>
          <Price>{product.price}</Price>
          <ColorProducts>
           {/*  {product.color.map((img, index) => (
              <Colores key={index} src={img.img_video} alt={img.name}></Colores>
            ))} */}
            [Colores]
          </ColorProducts>

          <TitleSize>Selecciona talla</TitleSize>
          <Sizes>
            {/* {product.size.map((talla, index) => (
              <Size
                style={{
                  backgroundColor: selectedSize === index ? "black" : "white",
                  color: selectedSize === index ? "white" : "black",
                }}
                onClick={() => handleSizeClick(index)}
                key={index}
              >
                {talla}
              </Size>
            ))} */}
            [Tallas]
          </Sizes>
          <AddProduct product={product}>
            <ButtonBuys>
              <Buys>Añadir A La Cesta</Buys>
            </ButtonBuys>
          </AddProduct>
        </Section2>
      </BoxMain>
      </> )}
    </MainDiv>
  );
};

export default InfoProducts;
