import { Box, Button, TextField } from '@mui/material';
import { FlexDirCol, FlexRow, } from '../../StyledMain';

const CreateUser = () => {
  return ( 
    <FlexDirCol>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch', top:'20px' },
      }}
      noValidate
      autoComplete="off"
    >
      <FlexRow>
        <TextField id="outlined-multiline-flexible" label="Nombre de usuario" multiline maxRows={4} />
        <TextField id="outlined-multiline-flexible" label="Correo electrónico" multiline maxRows={4} />
        <TextField id="outlined-multiline-flexible" label="Teléfono" multiline maxRows={4} />
      </FlexRow>
      <FlexRow style={{ justifyContent:"center"}}>
        <TextField id="outlined-multiline-flexible" label="Contraseña" multiline maxRows={4} />
        <TextField id="outlined-multiline-flexible" label="Confirmar contraseña" multiline maxRows={4} />
      </FlexRow>
      <FlexRow style={{justifyContent:"center"}}>
        <Button variant="contained" style={{ backgroundColor: "black", marginTop:"45px" }}>Crear nuevo usuario</Button>
      </FlexRow>
    </Box>
    </FlexDirCol>
   );
}
 
export default CreateUser;