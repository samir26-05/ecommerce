import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';

export default function UpdateEmail() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', top:'20px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-multiline-flexible" label="Tu Email es" multiline maxRows={2} />
        <TextField id="outlined-multiline-flexible" label="Nuevo Email" multiline maxRows={2} />
        <TextField id="outlined-multiline-flexible" label="Confirmar nuevo Email" multiline maxRows={2} />
        <TextField id="outlined-multiline-flexible" label="Tu contraseña" multiline maxRows={2} />
        
      </div>
      <div>
        <Button variant="contained" style={{ backgroundColor: "black", marginTop:"45px", marginLeft: 430 }}>CAMBIAR</Button>
      </div>
    </Box>
  );
}