/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  MainDiv,
  BoxMain,
  Section1,
  Section2,
  Image,
  Title,
  Sizes,
  ButtonBuys,
  ColorProducts,
  Buys,
} from "./styleProducts";
import Header from "../../components/Layout/header/Header";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AddProduct from "../../utils";
import Loading from "../../components/loading/Loading";

const InfoProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEnterUser, setUserEnterUser] = useState(false);
  let navigate = useNavigate();

  const verifyEnter = () => {
    return true;
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setLoading(false);
    } else {
      navigate("/");
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
      const response = await axios.get("http://localhost:3000/product");
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

  const product = products.find((element) => element.name === name);
  if (!product) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {loading ? (
        <Loading />
      ) : (
        <MainDiv>
          <Header isUsedUser={userEnterUser} />
          <BoxMain>
            <Section1>
              <Image src={product.img_video} alt={product.name}></Image>
            </Section1>
            <Section2>
              <Title>
                <div className="Tiltle">{product.name}</div>
                <div className="Reference">Ref: {product.product_id}</div>
                <div className="Price">$ {product.price}</div>
              </Title>
              <ColorProducts>
                <p className="Tiltle">Selecciona un color:</p>
                {/* {product.img_video.map((img, index) => (
                  <div className="Colores" key={index}>
                    <img src={img.img_video} alt={img.name} />
                  </div>
                ))} */}
                <div className="ColoresBox">
                  <div className="Colores">
                    <img src={product.img_video} alt={product.name} />
                  </div>
                  <div className="Colores">
                    <img src={product.img_video} alt={product.name} />
                  </div>
                  <div className="Colores">
                    <img src={product.img_video} alt={product.name} />
                  </div>
                </div>
              </ColorProducts>
              <Sizes>
                <p className="Tiltle">Selecciona una talla:</p>
                {/* {product.Sizes.map((talla, index) => (
                  <button
                    className="Size"
                    style={{
                      backgroundColor:
                        selectedSize === index ? "black" : "white",
                      color: selectedSize === index ? "white" : "black",
                    }}
                    onClick={() => handleSizeClick(index)}
                    key={index}
                  >
                    {talla}
                  </button>
                ))} */}
                <div className="SizeBox">
                  <button className="Size">S</button>
                  <button className="Size">M</button>
                  <button className="Size">L</button>
                  <button className="Size">XL</button>
                  <button className="Size">XXL</button>
                </div>
              </Sizes>
              <AddProduct product={product}>
                <ButtonBuys>
                  <Buys>Añadir A La Cesta</Buys>
                </ButtonBuys>
              </AddProduct>
            </Section2>
          </BoxMain>
        </MainDiv>
      )}
    </div>
  );
};

export default InfoProducts;
