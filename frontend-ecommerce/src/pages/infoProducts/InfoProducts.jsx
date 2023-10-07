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

const InfoProducts = () => {
  const navigate = useNavigate();
  const urlBackend = import.meta.env.VITE_BACKEND_URL;
  const { name } = useParams();
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState(["S", "X", "XL", "M", "XXL"]);
  const [sizesShoe, setSizesShoe] = useState(["36", "38", "40", "41", "42"]);

  const [modalOpen, setModalOpen] = useState(false);
  const [userEnterUser, setUserEnterUser] = useState(false);

  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeSelected, setSizeSelected] = useState(false);

  const verifyEnter = () => {
    return true;
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const product = products.find((element) => element.name === name);

  if (!product) {
    return (
      <Loading />
    );
  }

  const category = product.category.category.toLowerCase();

  const handleSizeClick = (index) => {
    setSelectedSize(index);
    setSizeSelected(true);
  };

  const seleSize = () => {
    return Swal.fire({
      icon: "error",
      title: "Por favor, selecciona una talla antes de agregar al carrito.",
      iconColor: "#ff0000",
      color: "#000",
      showConfirmButton: false,
      timer: 1000,
    });
  };

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
                    <div className="Price">{product.price.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 })} </div>
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
                        {Object.keys(product.shoe_size).map((Size, index) => (
                          <button className="Size" onClick={() => handleSizeClick(index)} key={index}
                            style={{ backgroundColor: selectedSize === index ? "black" : "white", color: selectedSize === index ? "white" : "black", }}>
                            {product.shoe_size[Size]}
                          </button>
                        ))}
                      </div>
                    </Sizes>
                  ) : (category === "accesorios" ?
                    <Sizes />
                    : <Sizes>
                      <p className="Tiltle">Selecciona una talla:</p>
                      <div className="SizeBox">
                        {Object.keys(product.size).map((SizeShoe, index) => (
                          <button className="Size" onClick={() => handleSizeClick(index)} key={index}
                            style={{ backgroundColor: selectedSize === index ? "black" : "white", color: selectedSize === index ? "white" : "black", }}>
                            {SizeShoe[index].toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </Sizes>
                  )}
                  <ButtonBuys>
                    <AddProduct product={product} stock={product.stock} selectedSize={sizes[selectedSize]} category={category}>
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