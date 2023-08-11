import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Img, Div } from './styled';
import bgr from '../../../assets/Img/bgr.png'
import SendIcon from '@mui/icons-material/Send';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NavHorizontal() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%', position:'relative' }}>

      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Online" {...a11yProps(0)} />
          <Tab label="Tienda" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Div>
        <CustomTabPanel value={value} index={0} >
          <Img src={bgr} alt="" />
          <h4>Aun no tienes compras online</h4>
          <span>Si no encuentras tu compra tal vez es porque hiciste el pedido sin estar registrado.</span>
          <Button variant="text" endIcon={<SendIcon />}>Encontrar pedido</Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Img src={bgr} alt="" />
          <h4>Aún no tienes compras en tienda</h4>
          <span>Pero puedes hacer tu pedido online ¡y te lo mandamos a casa!</span><br />
          <Button variant="contained" style={{ backgroundColor: "black" }}>Compra online</Button>
        </CustomTabPanel>
      </Div>
    </Box>

  );
}
