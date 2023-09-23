import { useState, useEffect } from "react";
import { FormContainer, Input } from "./style.jsx";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

// import "./css/index.css"
export const FormProduct = () => {
  /* ------ DECLARATION VARIABLES OF STATE (IMG, SELECTS AND OBJECT FOR CREATE PRODUCT) --------*/
  const [imagePreview, setImagePreview] = useState(null);
  const [File, setFile] = useState();
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    sizes_id: 0,
    descripcion: "",
    id_brands: 0,
    price: 0,
    category_id: 0,
    id_section: 0,
    stock: 0,
  });

  const [errors, setErrors] = useState({
    nombre: "",
    talla: "",
    descripcion: "",
    marca: "",
    precio: "",
    categoria: "",
    seccion: "",
    cantidad: "",
  });

  /* --------- REQUEST HTTP - SELECTS ---------*/
  useEffect(() => {
    async function fetchSections() {
      try {
        const response = await axios.get(
          "http://localhost:3000/product/Section"
        );
        setSections(response.data);
      } catch (error) {
        console.error("Error al obtener las secciones:", error);
      }
    }

    async function fetchCategories() {
      try {
        const response = await axios.get(
          "http://localhost:3000/product/category"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    }

    async function fetchSizes() {
      try {
        const response = await axios.get("http://localhost:3000/product/size");
        setSizes(response.data);
      } catch (error) {
        console.error("Error al obtener las tallas:", error);
      }
    }

    async function fetchBrands() {
      try {
        const response = await axios.get("http://localhost:3000/product/brand");
        setBrands(response.data);
      } catch (error) {
        console.error("Error al obtener las marcas:", error);
      }
    }

    fetchSections();
    fetchCategories();
    fetchSizes();
    fetchBrands();

    if (File) {
      const imageUrl = URL.createObjectURL(File);
      setImagePreview(imageUrl);
    }
  }, [File]);

  /* --------------- VALIDATION AND CONVERTION TYPE NUMBER ------------------ */

  const handleInputChange = (campo, valor) => {
    let nuevoValor = valor;
    if (
      campo === "sizes_id" ||
      campo === "id_brands" ||
      campo === "price" ||
      campo === "category_id" ||
      campo === "id_section" ||
      campo === "stock"
    ) {
      nuevoValor = Number(valor); // Convertir a número
    }
    setNewProduct((datosPrevios) => ({ ...datosPrevios, [campo]: nuevoValor }));
  };

  const token = localStorage.getItem("accessToken");

  const proper = Object(newProduct);
  const formData = new FormData();
  formData.append("data", JSON.stringify(newProduct));
  formData.append("file", File);

  const CreateProduct = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/product/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          accessToken: token,
        },
      })
     
      .then((response) => {
        Swal.fire("BIEN HECHO!", "Producto creado con exito!", "success");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error al intentar crear el producto!",
        });
        console.error(error);
      });
  };

  return (
    <FormContainer onSubmit={CreateProduct}>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "30ch", top: "20px" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-currency"
          label="Seccion"
          select
          value={newProduct.id_section}
          onChange={(event) =>
            handleInputChange("id_section", event.target.value)
          }
          required
          error={Boolean(errors.seccion)}
          helperText={errors.seccion}
        >
          {sections.map((seccion) => (
            <MenuItem key={seccion.id_section} value={seccion.id_section}>
              {seccion.section}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency"
          label="Categoria"
          select
          value={newProduct.category_id}
          onChange={(event) =>
            handleInputChange("category_id", event.target.value)
          }
          required
          error={Boolean(errors.categoria)}
          helperText={errors.categoria}
        >
          {categories.map((categoria) => (
            <MenuItem key={categoria.category_id} value={categoria.category_id}>
              {categoria.category}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          type="text"
          label="Nombre"
          value={newProduct.name}
          onChange={(event) => handleInputChange("name", event.target.value)}
          required
          error={Boolean(errors.nombre)}
          helperText={errors.nombre}
        />
        <TextField
          type="text"
          label="Descripción"
          value={newProduct.descripcion}
          onChange={(event) =>
            handleInputChange("descripcion", event.target.value)
          }
          required
          error={Boolean(errors.descripcion)}
          helperText={errors.descripcion}
        />
      </Box>

      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "30ch", top: "20px" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="controls"
          type="number"
          name="precio"
          label="Precio"
          required
          error={Boolean(errors.precio)}
          helperText={errors.precio}
          onChange={(event) => {
            handleInputChange("price", event.target.value);
          }}
          InputProps={{
            inputProps: { min: 0 }, // Evitar valores negativos
          }}
        />

        <TextField
          type="text"
          label="Talla"
          select
          value={newProduct.sizes_id}
          onChange={(event) =>
            handleInputChange("sizes_id", event.target.value)
          }
          required
          error={Boolean(errors.categoria)}
          helperText={errors.categoria}
        >
          {sizes.map((talla) => (
            <MenuItem key={talla.sizes_id} value={talla.sizes_id}>
              {talla.size}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          type="text"
          label="Marca"
          select
          value={newProduct.id_brands}
          onChange={(event) =>
            handleInputChange("id_brands", event.target.value)
          }
          required
          error={Boolean(errors.categoria)}
          helperText={errors.categoria}
        >
          {brands.map((marca) => (
            <MenuItem key={marca.id_brands} value={marca.id_brands}>
              {marca.brand}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-multiline-flexible"
          type="number"
          label="Cantidad*"
          value={newProduct.stock}
          onChange={(event) => handleInputChange("stock", event.target.value)}
          required
          error={Boolean(errors.cantidad)}
          helperText={errors.cantidad}
          InputProps={{
            inputProps: { min: 0 }, // Evitar valores negativos
          }}
        />
      </Box>

      <Input
        className="controls"
        type="file"
        required
        onChange={(event) => {
          setFile(event.target.files[0]);
        }}
      />

      <Button
        variant="contained"
        className="whithoutOutline"
        style={{ backgroundColor: "black", height: 50, marginLeft: "17.5%" }}
        type="submit"
        value="registrar"
      >
        CREAR PRODUCTO
      </Button>

      {/* Vista previa de la imagen */}
      {imagePreview && (
        <div>
          <p>Imagen seleccionada:</p>
          <div className="BoxxImag">
            <img
              src={imagePreview}
              alt="Vista previa de la imagen"
            />
          </div>
        </div>
      )}
    </FormContainer>
  );
};
