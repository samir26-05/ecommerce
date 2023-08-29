import { useState } from 'react';
import { Button, Box, Typography, Tab, Tabs } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Img, Div } from './styled';
import bgr from '../../../assets/Img/bgr.png'
import { Link } from 'react-router-dom';
import FormProducts from '../forms/products/CreateProducts';
import StockProducts from '../forms/products/StockProducts';
import '../../../components/Layout/header/header.css'

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

export default function NavHorizontal(props) {

  const { type } = props
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%', position: 'relative' }}>
      {type !== 'products' ? (
        <Box>
          {type !== 'products' ? (
            <> <h3 style={{ paddingButton: "50px", left: 570 }}>Mis compras</h3> </>
          ) : (
            <> <h3 style={{ paddingButton: "50px", left: 570 }}>Gestion de productos</h3> </>
          )}

          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ paddingTop: 20 }}>
            <Tab label="Online" {...a11yProps(0)} className='whithoutOutline'/>
            <Tab label="Tienda" {...a11yProps(1)} className='whithoutOutline'/>
          </Tabs>
        </Box>
      ) : (
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ paddingTop: 20 }}>
            <Tab label="Crear producto" {...a11yProps(0)} className='whithoutOutline'/>
            <Tab label="Inventario" {...a11yProps(1)} className='whithoutOutline'/>
          </Tabs>
        </Box>
      )}

      {type !== 'products' ? (

        <Div>
          <CustomTabPanel value={value} index={0} >
            <Img src={bgr} alt="" />
            <h4>Aun no tienes compras online</h4>
            <span>Si no encuentras tu compra tal vez es porque hiciste el pedido sin estar registrado.</span>
            <Button variant="text" className='whithoutOutline' endIcon={<SendIcon />}>Encontrar pedido</Button>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Img src={bgr} alt="" />
            <h4>Aún no tienes compras en tienda</h4>
            <span>Pero puedes hacer tu pedido online ¡y te lo mandamos a casa!</span><br />
            <Link to={"/"}>
              <Button variant="contained" className='whithoutOutline' style={{ backgroundColor: "black" }}>Compra online</Button>
            </Link>

          </CustomTabPanel>
        </Div>
      ) : (
        <>
          <CustomTabPanel value={value} index={0}>
            <FormProducts />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <StockProducts />
          </CustomTabPanel>
        </>
      )}

    </Box>

  );
}
