import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { PiUploadThin } from 'react-icons/pi'
import NavHorizontal from '../navs/NavHorizontal';

export default function FormProducts() {

  const [selectedImage, setSelectedImage] = useState(null);

  const section = ['Selecciona una opción', 'Damas', 'Caballero'];
  const categorie = ['Selecciona una opción', 'Camisas', 'Camisetas', 'Shorts', 'Pantalones', 'Zapatos', 'Zandalias', 'Accesorios'];
  const size = ['Selecciona una opción', 'S', 'M', 'L', 'XL'];
  const colors = ['Selecciona una opción', 'rojo','azul','verde','amarillo','naranja','morado','rosa','marrón','gris','negro','blanco',];

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
    }
  };

  return (

    
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', top: '20px' } }} noValidate autoComplete="off" >

    <NavHorizontal type="products" />
      <h3 style={{ paddingButton: "50px", left: 570 }}>AGREGAR NUEVO PRODUCTO AL COMERCIO</h3>
      <div>
        <TextField id="outlined-multiline-flexible" label="Nombre*" multiline maxRows={3} />
        <TextField id="outlined-multiline-flexible" label="Descripcion*" multiline maxRows={3} />
        <TextField id="outlined-multiline-flexible" type="number" label="Precio*" multiline maxRows={3} />
        <TextField id="filled-select-currency-native" select label="Seccion" defaultValue="EUR" SelectProps={{ native: true, }} helperText="Please select your currency" variant="filled" >
          {
            section.map((seccion, index) => {
              return (
                  <option key={index} value={seccion}>
                    {seccion}
                  </option>
              )
            })
          }
        </TextField>
      </div>
      <div>
        <TextField id="filled-select-currency-native" select label="Categoria" defaultValue="EUR" SelectProps={{ native: true, }} helperText="Please select your currency" variant="filled" >
        {
            categorie.map((categoria, index) => {
              return (
                  <option key={index} value={categoria}>
                    {categoria}
                  </option>
              )
            })
          }
        </TextField>

        <TextField id="filled-select-currency-native" select label="Talla" defaultValue="EUR" SelectProps={{ native: true, }} helperText="Please select your currency" variant="filled" >
        {
            size.map((talla, index) => {
              return (
                  <option key={index} value={talla}>
                    {talla}
                  </option>
              )
            })
          }
        </TextField>

        <TextField id="filled-select-currency-native" select label="Color" defaultValue="EUR" SelectProps={{ native: true, }} helperText="Please select your currency" variant="filled" >
        {
            colors.map((color, index) => {
              return (
                  <option key={index} value={color}>
                    {color}
                  </option>
              )
            })
          }
        </TextField>

        <TextField id="outlined-multiline-flexible" type="number" label="Cantidad*" multiline maxRows={3} />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <input accept="image/*" style={{ display: 'none' }} id="image-input" type="file" onChange={handleImageChange} />
        <label htmlFor="image-input" style={{ color: "black" }}>
          <Button variant="outline" component="span" style={{ backgroundColor: "#ffffff", marginTop: "45px" }}>
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
        <Button variant="contained" style={{ backgroundColor: "black", marginTop: 45 }}>CREAR PRODUCTO</Button>
      </div>

    </Box>
  );
}