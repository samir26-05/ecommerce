import React from "react";
import Brand from "./Brand";
import Adidas from './ImgBrand/adidas.png';
import Bershka from './ImgBrand/bershka.png';
import Prada from './ImgBrand/prada.png';
import Nike from './ImgBrand/nike.png'
import Zara from './ImgBrand/zara.png'


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