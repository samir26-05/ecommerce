import { ContainerFather, ContainerH, DivTitle } from "./StyledCategory";
import CardCategory from "./CardCategory";
import Camisetas from "./ImgCategory/Camisetas.jpg";
import Camisas from "./ImgCategory/Camisas.jpg";
import Jeans from "./ImgCategory/Jeans.jpg";
import Sudaderas from "./ImgCategory/Sudaderas.jpg";
import Zapatillas from "./ImgCategory/Zapatillas.jpg";
import Accesorios from "./ImgCategory/Accesorios.jpg";

export const Categories = [
  { name: "Camisetas", img: Camisetas },
  { name: "Camisas", img: Camisas },
  { name: "Sudaderas", img: Sudaderas },
  { name: "Pantalones", img: Jeans },
  { name: "Zapatos", img: Zapatillas },
  { name: "Accesorios", img: Accesorios },
];

const IndexCategory = () => {
  return (
    <ContainerFather>
      <DivTitle>
        <span>Categorias</span>
      </DivTitle>
      <ContainerH>
        <div className="BoxH">
          <CardCategory array={Categories} />
        </div>
      </ContainerH>
    </ContainerFather>
  );
};

export default IndexCategory;
