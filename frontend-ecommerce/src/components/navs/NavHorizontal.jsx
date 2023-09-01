/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
/* MATERIAL UI */
import { Button, Box, Typography, Tab, Tabs, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
/* COMPONENETS */
import FormProducts from '../forms/products/CreateProducts';
import StockProducts from '../forms/products/StockProducts';
/* IMG */
import bgr from '../../assets/Img/bgr.png'
/* STYLES */
import '../Layout/header/header.css'
import { Img, Div } from './styled';
import ShowOrders from './orders/ShowOrders';
import CrudOrders from './orders/ShowOrders';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateUser from '../forms/NewPerson/NewClient';
import CrudProvider from './provider/ShowProvider';
import { FlexDirCol } from '../StyledMain';
import ShowClients from './clients/ShowClients';


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
          <FlexDirCol>{children}</FlexDirCol>
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
      {type === 'buy' ? (
        <div>
        <Box>
          <h3 style={{ paddingButton: "50px", left: 570 }}>Mis compras</h3>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ paddingTop: 20 }}>
            <Tab label="Pedidos" {...a11yProps(0)} className='whithoutOutline'/>
            <Tab label="Tienda" {...a11yProps(1)} className='whithoutOutline'/>
          </Tabs>
        </Box>

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
        </div>
      ) : ''
      }

      {type === 'products' ? (
        <div>
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ paddingTop: 20 }}>
            <Tab label="Crear producto" {...a11yProps(0)} className='whithoutOutline'/>
            <Tab label="Inventario" {...a11yProps(1)} className='whithoutOutline'/>
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <FormProducts />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <StockProducts />
        </CustomTabPanel>
      </div>
      ) : ''
      }

      {type === "order" ? (
        <div>
        <ShowOrders />
        </div>
        
      ) : '' }
      {type === "clients" ? (
        <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>Lista de Clientes</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <ShowClients/>
          </AccordionDetails>
        </Accordion>
        <Accordion >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>Crear Nuevo Usuario</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <CreateUser/>
          </AccordionDetails>
        </Accordion>
        </div>
        
      ) : '' }

      {type === "provider" ? (
        <div>
              <CrudProvider/>
        </div>
        
      ) : '' }

      

    </Box>

  );
}
