import Header from "../header/Header";
import Footer from "../footer/Footer";
import DemoAutoPlay from "./carrusel/DemoAutoPlay";
import { useState, useEffect } from "react";
import { ProductList } from "./products/ProductList";
import SectionsBody from "./Sections/SectionsBody";
import IndexCategory from "./Category/IndexCategory";
import AppBrand from "./Brand/AppBrand";

export default function Body() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [userEnter, setUserEnter] = useState(false);
  const verifyEnter = () => {
    return true;
  };

  useEffect(() => {
    const trueEnter = verifyEnter();
    setUserEnter(trueEnter);

    return () => {
      setUserEnter(false);
    };
  }, []);
  return (
    <div>
      <Header
        products={allProducts}
        newProducts={setAllProducts}
        inTotal={total}
        newTotal={setTotal}
        cantProducts={countProducts}
        newCantProducts={setCountProducts}
        isUsedBody={userEnter}
      />
      <DemoAutoPlay />
      <IndexCategory />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <SectionsBody />
      <AppBrand />
      <Footer />
    </div>
  );
}
