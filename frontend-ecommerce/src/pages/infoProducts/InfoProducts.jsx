import {
  MainDiv,
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
  Favorites,
  Size
} from "../infoProducts/styleProducts";
import Header from '../../components/Layout/header/Header'
import { useState } from "react";
import {data} from "../../data";

const InfoProducts = () => {
  const tallas = ['XS', 'S', 'M', 'L', 'XL'];
  const Contenido = [ 
    'https://static.bershka.net/4/photos2/2023/I/M/1/p/0000/000/058/0000000058_4_2_1.mp4?t=1690984204752'];
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
        </Section1 >
        <Section2>
          <Title>{TitleProduct}</Title>
          <Reference>{ReferenceProduct}</Reference>
          <Price>{PriceProduct}</Price>
          <TitleSize>Selecciona talla</TitleSize>
          <Sizes>
          {tallas.map((talla, index) => (
            <Size
            style={{ backgroundColor: selectedSize === index ? 'black' : 'white',
            color: selectedSize === index ? 'white' : 'black'
            }}
            onClick={() => handleSizeClick(index)}
            key={index}
          >
            {talla}
          </Size>
            ))}
          </Sizes>
          <ButtonBuys>Añadir A La Cesta</ButtonBuys>
          <Favorites/>
        </Section2>
      </BoxMain>
    </MainDiv>
  );
};

export default InfoProducts;
