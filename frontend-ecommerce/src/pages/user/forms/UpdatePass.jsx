import { Button, TextField, Box } from '@mui/material';


export default function UpdatePass() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch', top:'20px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{marginLeft: 50}}>
        <TextField id="outlined-multiline-flexible" label="Tu contraseña" multiline maxRows={4} />
        <TextField id="outlined-multiline-flexible" label="Nueva contraseña" multiline maxRows={4} />
        <TextField id="outlined-multiline-flexible" label="Confirmar nueva contraseña" multiline maxRows={4} />
      </div>
      <div>
        <Button variant="contained" style={{ backgroundColor: "black", marginTop:"45px", marginLeft: 430 }}>CAMBIAR</Button>
      </div>
    </Box>
  );
}