/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import ShowProducts from "./ShowProducts";

const FilterSections = ({ category, sectionProducts }) => {

  const [pages, setPages] = useState(1); // Cambio en el estado de la página actual
  const itemsPerPage = 15;

   // Calcular el índice de inicio y fin en función de la página actual
   const startIndex = (pages - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const visibleProducts = sectionProducts.slice(startIndex, endIndex);

  const filterCategories = sectionProducts.filter((products) => products.category.category === category)

  return (
    <>
      <ShowProducts products={category != "productos" ? filterCategories : sectionProducts}/>
    </>
  );
};

export default FilterSections;
