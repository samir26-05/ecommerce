import Brand from "./Brand";
import Adidas from '../../../../assets/Img/brands/adidas.png';
import Bershka from '../../../../assets/Img/brands/bershka.png';
import Prada from '../../../../assets/Img/brands/prada.png';
import Nike from '../../../../assets/Img/brands/nike.png'
import Zara from '../../../../assets/Img/brands/zara.png'


const App = () => {
  const images = [
    Adidas,
    Bershka,
    Prada,
    Nike,
    Zara
  ];

  return (
    <div>
      <Brand images={images} />
    </div>
  );
};

export default App;