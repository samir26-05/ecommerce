import { ContainerFather, ContainerH, DivTitle } from "./StyledCategory";
import CardCategory from "./CardCategory";
import Camisetas from "./ImgCategory/Camisetas.jpg";
import Camisas from "./ImgCategory/Camisas.jpg";
import Jeans from "./ImgCategory/Jeans.jpg";
import Sudaderas from "./ImgCategory/Sudaderas.jpg";
import Zapatillas from "./ImgCategory/Zapatillas.jpg";

const IndexCategory = () => {
  const card = [
    { name: "Camisetas", img: Camisetas },
    { name: "Camisas", img: Camisas },
    { name: "Sudaderas", img: Sudaderas },
    { name: "Pantalones", img: Jeans },
    { name: "Zapatos", img: Zapatillas },
  ];
  return (
    <ContainerFather>
      <DivTitle>
        <h2>Categorias</h2>
      </DivTitle>
      <ContainerH>
        <div className="BoxH">
          <CardCategory array={card} />
        </div>
      </ContainerH>
    </ContainerFather>
  );
};

export default IndexCategory;
