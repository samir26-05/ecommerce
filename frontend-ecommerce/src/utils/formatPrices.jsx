/* Función para convertir un valor a pesos colombianos */

const FormatPrice = ({price}) => {
  return (
    price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    })
   );
}
 
export default FormatPrice;