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
  ModalContent,
} from "./styleProducts";
import Header from "../../components/Layout/header/Header";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AddProduct from "../../utils";
import Loading from "../../components/loading/Loading";
import { Modal } from "@mui/material";

const InfoProducts = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState([" ", " ", " "," "," "]);
  const [loading, setLoading] = useState(true);
  const [userEnterUser, setUserEnterUser] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const urlBackend = import.meta.env.VITE_BACKEND_URL;
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

    fetchProducts();
    fetchSize();

    const trueEnter = verifyEnter();
    setUserEnterUser(trueEnter);
    return () => {
      setUserEnterUser(false);
    };
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${urlBackend}/product`);
      setProducts(response.data.result);
      console.log(response.data.result);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const fetchSize = async () => {
    try {
      const response = await axios.get(`${urlBackend}/size`);
      setSizes(response.data.result);
      console.log(response.data.result);
    } catch (error) {
      console.error("Error al obtener las tallas:", error);
    }
  };

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
        <>
          <Modal open={modalOpen} onClose={handleCloseModal}>
            <ModalContent>
              <img src={product.img_video} alt={product.name} />
            </ModalContent>
          </Modal>
          <MainDiv>
            <Header isUsedUser={userEnterUser} />
            <BoxMain>
              <Section1>
                <Image
                  onClick={handleOpenModal}
                  src={product.img_video}
                  alt={product.name}
                ></Image>
              </Section1>
              <Section2>
                <Title>
                  <div className="Tiltle">{product.name}</div>
                  <div className="Reference">Ref: {product.product_id}</div>
                  <div className="Price">
                    {product.price.toLocaleString("es-CO", {
                      style: "currency",
                      currency: "COP",
                      minimumFractionDigits: 0,
                    })}
                  </div>
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
                {sizes.length > 0 && (
                  <Sizes>
                    <p className="Tiltle">Selecciona una talla:</p>
                    <div className="SizeBox">
                      {sizes.map((Size, index) => (
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
                          {Size}
                        </button>
                      ))}
                    </div>
                  </Sizes>
                )}
                <AddProduct product={product} stock={product.stock}>
                  <ButtonBuys>
                    <Buys>Añadir A La Cesta</Buys>
                  </ButtonBuys>
                </AddProduct>
              </Section2>
            </BoxMain>
          </MainDiv>
        </>
      )}
    </div>
  );
};

export default InfoProducts;
