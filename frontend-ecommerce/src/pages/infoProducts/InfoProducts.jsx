import {
  Div,
  BoxHeader,
  BoxMain,
  Section1,
  Section2,
  Footer,
  BoxImg,
  BoxTitle,
  BoxSize,
  BoxBuys,
  Nav,
  Video,
  Title,
  Reference,
  Price,
  TitleSize,
  Sizes,
  ButtonBuys,
  Favorites,
  Ul,
  Size,
  Li,
} from "../infoProducts/styleProducts";
import Header from "../../components/Layout/header/Header";

const InfoProducts = () => {
  return (
    <Div>
      <BoxHeader>
        <Header />
      </BoxHeader>
      <BoxMain>
        <Section1>
          <BoxImg>
            <Video loop autoPlay src="https://static.bershka.net/4/photos2/2023/I/M/1/p/0000/000/058/0000000058_4_2_1.mp4?t=1690984204752"></Video>
          </BoxImg>
        </Section1>
        <Section2>
          <BoxTitle>
            <Title>ZAPATILLAS COMBINADAS</Title>
            <Reference>Ref 1466/260/202</Reference>
            <Price>35,99 €</Price>
          </BoxTitle>
          <BoxSize>
            <TitleSize>Selecciona talla</TitleSize>
            <Sizes>
              <Size>5</Size>
              <Size>5</Size>
              <Size>5</Size>
              <Size>5</Size>
              <Size>5</Size>
              <Size>5</Size>
            </Sizes>
          </BoxSize>
          <BoxBuys>
            <ButtonBuys>Añadir A La Cesta</ButtonBuys>
            <Favorites></Favorites>
          </BoxBuys>
        </Section2>
      </BoxMain>
      <Footer>
        <Nav>
          <Ul>
            <Li></Li>
            <Li></Li>
            <Li></Li>
            <Li></Li>
          </Ul>
        </Nav>
      </Footer>
    </Div>
  );
};

export default InfoProducts;
