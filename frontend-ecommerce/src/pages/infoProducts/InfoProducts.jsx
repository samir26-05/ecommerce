import {
  MainDiv,
  Colores,
  BoxMain,
  Section1,
  Section2,
  Image,
  Title,
  Reference,
  Price,
  TitleSize,
  Sizes,
  ButtonBuys,
  Size,
  ColorProducts,
  Buys,
} from "./styleProducts";
import Header from "../../components/Layout/header/Header";
import { useState, useEffect } from "react";
import { data } from "../../data"
import { useParams } from "react-router-dom";
const InfoProducts = () => { 
  const { id} = useParams();
  const product = data.find((item) => item.id === parseInt(id, 10));
  if (!product) {
    return <p>Producto no encontrado</p>;
  }
  
  const [userEnterUser, setUserEnterUser] = useState(false);
    const verifyEnter = () => {
        return true
    };

    useEffect(() => {
        const trueEnter = verifyEnter();
        setUserEnterUser(trueEnter);

        return () => {
            setUserEnterUser(false);
        };
    }, []);


  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeClick = (index) => {
    if (selectedSize === index) {
      setSelectedSize(null);
    } else {
      setSelectedSize(index);
    }
  };

  return (
    <MainDiv>
      <Header isUsedUser={userEnterUser}/>
      <BoxMain >
        <Section1>
          <Image src={product.img} alt={product.nameProduct}></Image>
        </Section1>
        <Section2>
          <Title>{product.nameProduct}</Title>
          <Reference>{product.id}</Reference>
          <Price>{product.price}</Price>
          <ColorProducts>
            {product.color.map((img, index) => (
              <Colores key={index} src={img.imagen} alt={img.color}>
              </Colores>
            ))}
          </ColorProducts>


          <TitleSize>Selecciona talla</TitleSize>
          <Sizes>
            {product.talla.map((talla, index) => (
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
            ))}
          </Sizes>   
          <ButtonBuys>
            <Buys >Añadir A La Cesta</Buys>
          </ButtonBuys>
        </Section2>
      </BoxMain>
    </MainDiv>
  );
};

export default InfoProducts;
