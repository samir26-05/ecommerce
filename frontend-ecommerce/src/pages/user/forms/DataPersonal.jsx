import Box from '@mui/material/Box';
import { Button, TextField, FormControlLabel, Radio } from '@mui/material';

export default function DataPersonal() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', top: '20px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-multiline-flexible" label="Nombre*" multiline maxRows={3} />
        <TextField id="outlined-multiline-flexible" label="Apellidos*" multiline maxRows={3} />
        <TextField id="outlined-multiline-flexible" label="Direccion*" multiline maxRows={3} />
        <TextField id="outlined-multiline-flexible" label="Completa tu direccion" multiline maxRows={3} />
      </div>
      <div>
        <TextField id="outlined-multiline-flexible" label="Cod. Postal*" multiline maxRows={3} />
        <TextField id="outlined-multiline-flexible" label="Departamento*" multiline maxRows={3} />
        <TextField id="outlined-multiline-flexible" label="Municipio*" multiline maxRows={3} />
        <TextField id="outlined-multiline-flexible" label="Region*" multiline maxRows={3} />
      </div>
      <div>
        <TextField id="outlined-multiline-flexible" label="Telefono movil*" multiline maxRows={3} />
        <TextField id="outlined-multiline-flexible" label="No. Documento*" multiline maxRows={3} />
        <FormControlLabel value="Hombre" control={<Radio />} label="Hombre" sx={{marginTop:4}} maxRows={3}/>
        <FormControlLabel value="Mujer" control={<Radio />} label="Mujer" sx={{marginTop:4}} maxRows={3}/>
        <TextField id="outlined-multiline-flexible" label="Fecha de nacimiento*" multiline maxRows={3} />
      </div>
      <div>
        <Button variant="contained" style={{ backgroundColor: "black", marginTop: "45px", marginLeft: 430 }}>CAMBIAR</Button>
      </div>
    </Box>
  );
}