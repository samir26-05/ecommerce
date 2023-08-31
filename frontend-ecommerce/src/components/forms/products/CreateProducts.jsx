import { useState, useEffect } from 'react';
/* MATERIAL UI */
import Box from '@mui/material/Box';
import { Button, MenuItem, TextField } from '@mui/material';
import { PiUploadThin } from 'react-icons/pi'
/* STYLES */
import '../../Layout/header/header.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function FormProducts() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);


  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
    }
  };

  useEffect(() => {
    async function fetchSections() {
      try {
        const response = await axios.get('http://localhost:3000/product/Section');
        setSections(response.data);
      } catch (error) {
        console.error('Error al obtener las secciones:', error);
      }
    }

    async function fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/product/category');
        setCategories(response.data);
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      }
    }

    async function fetchSizes() {
      try {
        const response = await axios.get('http://localhost:3000/product/size');
        setSizes(response.data);
      } catch (error) {
        console.error('Error al obtener las tallas:', error);
      }
    }

    async function fetchBrands() {
      try {
        const response = await axios.get('http://localhost:3000/product/brand');
        setBrands(response.data);
      } catch (error) {
        console.error('Error al obtener las marcas:', error);
      }
    }

    fetchSections();
    fetchCategories();
    fetchSizes();
    fetchBrands()
  }, []);


  /* ------------------------------------------------------------------------------------------------------------------- */

  let navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    name: '',
    sizes_id: 0,
    description: '',
    id_brands: 0,
    price: 0,
    category_id: 0,
    id_section: 0,
    stock: 0,
  });

  const [errors, setErrors] = useState({
    nombre: '',
    talla: '',
    descripcion: '',
    marca: '',
    precio: '',
    categoria: '',
    seccion: '',
    cantidad: '',
  });

  const handleInputChange = (campo, valor) => {
    setNewProduct((datosPrevios) => ({
      ...datosPrevios,
      [campo]: valor,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      nombre: !validateName(newProduct.name) ? 'Ingrese un nombre del producto.' : '',
      talla: !validateSize(newProduct.sizes_id) ? 'Ingrese la talla del producto.' : '',
      descripcion: !validateDescription(newProduct.description) ? 'Ingrese una descripción para el producto.' : '',
      marca: !validateBrand(newProduct.id_brands) ? 'Ingrese la marca del producto.' : '',
      precio: !validatePrice(newProduct.price) ? 'Ingrese el precio del producto.' : '',
      categoria: !validateCategory(newProduct.category_id) ? 'Ingrese la categoría del producto.' : '',
      seccion: !validateSection(newProduct.id_section) ? 'Ingrese la sección a la que pertenece el producto.' : '',
      cantidad: !validateStock(newProduct.stock) ? 'Ingrese la cantidad de este producto.' : '',
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const validateName = (nombre) => {
    return nombre.trim() !== '';
  };

  const validateSize = (talla) => {
    return talla !== 0 && talla !== 'Selecciona una opción';
  };

  const validateDescription = (descripcion) => {
    return descripcion.trim() !== '';
  };

  const validateBrand = (marca) => {
    return marca !== 0 && marca !== 'Selecciona una opción';
  };

  const validatePrice = (precio) => {
    return parseFloat(precio) > 0;
  };

  const validateCategory = (categoria) => {
    return categoria !== 0 && categoria !== 'Selecciona una opción';
  };

  const validateSection = (seccion) => {
    return seccion !== 0  && seccion !== 'Selecciona una opción';
  };

  const validateStock = (cantidad) => {
    return parseInt(cantidad) >= 0;
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    try {
      const response = await axios.post(
        'http://localhost:3000/product/create', 
        newProduct,
        {
          headers: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJzYW9yb3pjbzI2MDUiLCJpYXQiOjE2OTM0ODkwNjAsImV4cCI6MTY5MzQ5MjY2MH0.2p5fQpQXnfGgnDMEpAxQ3fOFZEA520MhwjpMU2OTWgw",
          },
        }
      );
  
      if (response.status === 200) {
        navigate('/user');
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Ocurrió un error durante el registro. Por favor, inténtelo de nuevo más tarde.');
    }


  };



  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', top: '20px' } }} noValidate autoComplete="off" >
    
        <div>
          <TextField
            id="outlined-select-currency"
            label="Seccion"
            select
            value={newProduct.id_section}
            onChange={(event) => handleInputChange("id_section", event.target.value)}
            required
            error={Boolean(errors.seccion)}
            helperText={errors.seccion}
          >
            {sections.map((seccion) => (
              <MenuItem  key={seccion.id_section} value={seccion.id_section}>
                {seccion.section}
              </MenuItem >
            ))}
          </TextField>

          <TextField
            id="outlined-select-currency"
            label="Categoria"
            select
            value={newProduct.category_id}
            onChange={(event) => handleInputChange("category_id", event.target.value)}
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
            value={newProduct.description}
            onChange={(event) => handleInputChange("description", event.target.value)}
            required
            error={Boolean(errors.descripcion)}
            helperText={errors.descripcion}
          />
        </div>

        <div>
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
            onChange={(event) => handleInputChange("sizes_id", event.target.value)}
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
            onChange={(event) => handleInputChange("id_brands", event.target.value)}
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
        </div>


        <div style={{ display: "flex", flexDirection: "row" }}>
          <input accept="image/*" style={{ display: 'none' }} id="image-input" type="file" onChange={handleImageChange} />
          <label htmlFor="image-input" style={{ color: "black" }}>
            <Button variant="outline" className='whithoutOutline' component="span" style={{ backgroundColor: "#ffffff", marginTop: "45px" }}>
              Cargar imagen <PiUploadThin />
            </Button>
          </label>

        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", border: "solid 1px black" }}>
          {selectedImage && (
            <div style={{ width: "25%", height: "25%", marginTop: 10 }}>
              <img src={selectedImage} alt="Imagen seleccionada" />
            </div>
          )}
        </div>
        <div>
          <Button variant="contained" className='whithoutOutline' style={{ backgroundColor: "black", marginTop: 45 }} type="submit" value="crear" onClick={handleSubmit}>CREAR PRODUCTO</Button>
        </div>
     
    </Box >

  );
}