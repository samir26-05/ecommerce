import {
  MainDiv,
  Colores,
  BoxMain,
  Section1,
  Section2,
  Video,
  Title,
  Reference,
  Price,
  TitleSize,
  Sizes,
  ButtonBuys,
  Size,
  ColorProducts,
  Buys,
} from "../infoProducts/styleProducts";
import Header from "../../components/Layout/header/Header";
import { useState } from "react";

const InfoProducts = () => {
  const tallas = ["XS", "S", "M", "L", "XL"];

  const Contenido = [
    "https://static.bershka.net/4/photos2/2023/I/M/1/p/0000/000/058/0000000058_4_2_1.mp4",
  ];

  const Img = [
    {
      name: "hola1",
      img: "https://static.bershka.net/4/photos2/2023/I/0/1/p/5986/335/432/60d0026656e8bf9c4ec7ac2dfb278caf-5986335432_2_4_0.jpg?imwidth=124&impolicy=bershka-itxhigh&imformat=generic",
    },
    {
      name: "hola2",
      img: "https://static.bershka.net/4/photos2/2023/I/0/1/p/5986/335/800/ae27735a8d56b45b6b2d7bc66027dd99-5986335800_2_4_0.jpg?imwidth=124&impolicy=bershka-itxhigh&imformat=generic",
    },
  ];

  const TitleProduct = "Falda denim midi confort";

  const ReferenceProduct = "Ref 1466/260/202";

  const PriceProduct = "35,99 €";

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
      <Header />
      <BoxMain>
        <Section1>
          <Video loop autoPlay src={Contenido}></Video>
        </Section1>
        <Section2>
          <Title>{TitleProduct}</Title>
          <Reference>{ReferenceProduct}</Reference>
          <Price>{PriceProduct}</Price>
          <ColorProducts>
            {Img.map((img, index) => (
              <Colores key={index} src={img.img} alt={img.name} />
            ))}
          </ColorProducts>
          <TitleSize>Selecciona talla</TitleSize>
          <Sizes>
            {tallas.map((talla, index) => (
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
            <Buys>Añadir A La Cesta</Buys>
          </ButtonBuys>
        </Section2>
      </BoxMain>
    </MainDiv>
  );
};

export default InfoProducts;
