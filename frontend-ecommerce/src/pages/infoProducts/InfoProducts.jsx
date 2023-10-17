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
import AddProduct from "../../utils/addCar";
import Loading from "../../components/loading/Loading";
import { Modal } from "@mui/material";
import Swal from "sweetalert2";
import FormatPrice from "../../utils/formatPrices";

const InfoProducts = () => {
  const navigate = useNavigate();
  const urlBackend = import.meta.env.VITE_BACKEND_URL;
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [userEnterUser, setUserEnterUser] = useState(false);
  const [products, setProducts] = useState([]);
  const [productSize, setProductSize] = useState(["XS", "S", "M", "L", "XL", "XXL"]);
  const [productSizeShoe, setProductSizeShoe] = useState(["36", "37", "38", "40", "41", "42"]);
  const [sizeSelected, setSizeSelected] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const trueEnter = verifyEnter();
    if (localStorage.getItem("accessToken")) {
      setLoading(false);
      fetchProducts();
    } else {
      navigate("/"); 
    }
    setUserEnterUser(trueEnter);
    return () => { setUserEnterUser(false); };
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${urlBackend}/product`);
      setProducts(response.data.result);
      // const response2 = await axios.get(`${urlBackend}/product/size`);
      // setProductSize(response2.data.result);
      // console.log(response2.data.result);
      // const response3 = await axios.get(`${urlBackend}/product/shoe_size`);
      // setProductSizeShoe(response3.data.result);
      // console.log(response3.data.result);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const verifyEnter = () => {
    return true;
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    setSizeSelected(true);
  };

  const product = products.find((element) => element.name === name);

  if (!product) {
    return (
      <Loading />
    );
  }

  const category = product.category.category.toLowerCase();

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {
        loading ? <Loading /> : (
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
                  <Image onClick={handleOpenModal} src={product.img_video} alt={product.name}></Image>
                </Section1>
                <Section2>
                  <Title>
                    <div className="Tiltle">{product.name}</div>
                    <div className="Reference">Ref: {product.product_id}</div>
                    <div className="Price"><FormatPrice price={product.price}/> </div>
                  </Title>
                  <ColorProducts>
                    <p className="Tiltle">Selecciona un color:</p>
                    <div className="ColoresBox">
                      <div className="Colores">
                        <img src={product.img_video} alt={product.name} />
                      </div>
                    </div>
                  </ColorProducts>
                  {category === "zapatos" ? (
                    <Sizes>
                      <p className="Tiltle">Selecciona una talla:</p>
                      <div className="SizeBox">
                        {/* {Object.keys(product.shoe_size).map((SizeShoe, index) => (
                          <button
                            className="Size"
                            onClick={() => handleSizeClick(product.shoe_size[SizeShoe])}
                            key={index}
                            style={{
                              backgroundColor: selectedSize === product.shoe_size[SizeShoe] ? "black" : "white",
                              color: selectedSize === product.shoe_size[SizeShoe] ? "white" : "black",
                            }}
                          >
                            {product.shoe_size[SizeShoe].toUpperCase()}
                          </button>
                        ))} */}
                        {productSizeShoe.map((size, index) => (
                          <button
                            className="Size"
                            onClick={() => handleSizeClick(size)}
                            key={index}
                            style={{ backgroundColor: selectedSize === size ? "black" : "white", color: selectedSize === size ? "white" : "black" }}>
                            {size.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </Sizes>
                  ) : (category === "accesorios" ?
                    <Sizes />
                    : <Sizes>
                      <p className="Tiltle">Selecciona una talla:</p>
                      {/* <div className="SizeBox">
                        {Object.keys(product.size).map((Size, index) => (
                          <button
                            className="Size"
                            onClick={() => handleSizeClick(product.size[Size])}
                            key={index}
                            style={{
                              backgroundColor: selectedSize === product.size[Size] ? "black" : "white",
                              color: selectedSize === product.size[Size] ? "white" : "black",
                            }}
                          >
                            {product.size[Size].toUpperCase()}
                          </button>
                        ))}
                      </div> */}
                      <div className="SizeBox">
                        {productSize.map((size, index) => (
                          <button
                            className="Size"
                            onClick={() => handleSizeClick(size)}
                            key={index}
                            style={{ backgroundColor: selectedSize === size ? "black" : "white", color: selectedSize === size ? "white" : "black" }}>
                            {size.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </Sizes>
                  )}
                  <ButtonBuys>
                    <AddProduct product={product} stock={product.stock} selectedSize={selectedSize} category={category}>
                      <Buys>Añadir al Carrito</Buys>
                    </AddProduct>
                  </ButtonBuys>
                </Section2>
              </BoxMain>
            </MainDiv>
          </>
        )}
    </div>

  );
};

export default InfoProducts;