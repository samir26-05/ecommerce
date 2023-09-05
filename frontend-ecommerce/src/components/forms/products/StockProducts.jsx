import { useState, useEffect } from "react";
import axios from "axios";
import { MaterialReactTable } from "material-react-table";



export default function StockProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      accessorKey: "product_id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Producto",
    },
    {
      accessorKey: "price",
      header: "Precio",
    },
    {
      accessorKey: "stock",
      header: "Cantidad",
    },
    {
      accessorKey: "img_video",
      header: "Imagen",
      Cell: ({ renderedCellValue }) => (
        <img src={renderedCellValue} alt="" style={{ width: "50px" }} />
      ),
    },
  ];


  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get( "http://localhost:3000/product/") 
        setProducts(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    }

    // Llama a la función fetchProducts dentro del efecto
    fetchProducts();
  }, []);

  

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <MaterialReactTable columns={columns} data={products} />
    </div>
  );
}
