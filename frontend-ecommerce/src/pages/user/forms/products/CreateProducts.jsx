import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { PiUploadThin } from 'react-icons/pi'
import '../../../../components/Layout/header/styled.css'

export default function FormProducts() {

  const [selectedImage, setSelectedImage] = useState(null);

  const section = ['Selecciona una opción', 'Damas', 'Caballero'];
  const categorie = ['Selecciona una opción', 'Camisas', 'Camisetas', 'Shorts', 'Pantalones', 'Zapatos', 'Zandalias', 'Accesorios'];
  const size = ['Selecciona una opción', 'S', 'M', 'L', 'XL', '32', '34', '36', '38', '40', '42', '44', '46'];
  const shoeSize = ['32', '34', '36', '38', '40', '42', '44', '46'];
  const marcas = ['Selecciona una opción', "Nike", "Adidas", "Puma", "Converse", "Vans", "Reebok", "New Balance", "Under Armour", "Fila", "Balenciaga", "Gucci", "Prada", "Louis Vuitton", "Versace", "Chanel", "H&M", "Zara", "Forever 21", "Levi's", "Calvin Klein", "Tommy Hilfiger", "Ralph Lauren", "Guess", "Hugo Boss",];


  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', top: '20px' } }} noValidate autoComplete="off" >

      <div>
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
        <TextField id="outlined-multiline-flexible" label="Nombre*" multiline maxRows={3} />
        <TextField id="outlined-multiline-flexible" label="Descripcion*" multiline maxRows={3} />


      </div>
      <div>
        <TextField id="outlined-multiline-flexible" type="number" label="Precio*" multiline maxRows={3} />

        {categorie !== "Zapatos" ? (
            <>
              <TextField id="filled-select-currency-native" select label="Talla" defaultValue="EUR" SelectProps={{ native: true }} helperText="Please select your currency" variant="filled" >
                {size.map((talla, index) => (
                  <option key={index} value={talla}>
                    {talla}
                  </option>
                ))}
              </TextField>
            </>
          ) : (
            <>
              <TextField id="filled-select-currency-native" select label="Talla" defaultValue="EUR" SelectProps={{ native: true }} helperText="Please select your currency" variant="filled" >
                {shoeSize.map((talla, index) => (
                  <option key={index} value={talla}>
                    {talla}
                  </option>
                ))}
              </TextField>
            </>
          )
        }


        <TextField id="filled-select-currency-native" select label="Marca" defaultValue="EUR" SelectProps={{ native: true, }} helperText="Please select your currency" variant="filled" >
          {
            marcas.map((marca, index) => {
              return (
                <option key={index} value={marca}>
                  {marca}
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
        <Button variant="contained" className='whithoutOutline' style={{ backgroundColor: "black", marginTop: 45 }}>CREAR PRODUCTO</Button>
      </div>

    </Box>
  );
}