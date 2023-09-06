import { useState } from 'react';
import { Link } from 'react-router-dom';
/* MATERIAL UI */
import { Box} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
/* COMPONENTS */
import NavHorizontal from './NavHorizontal';
import InfoCountUser from './InfoCount';
/* STYLES */
import { Div } from '../../pages/user/styled';
import '../Layout/header/header.css'
import { FlexDirCol } from '../StyledMain';


function TabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
   
  };
  
}



export default function NavVertical() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);  
      console.log(newValue + "estoy entrando aqui")

  };
  const isAdmin = true

  return (
    <Div >
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224, marginTop:15 }}>
        {isAdmin ? 
        <>
        <Tabs value={value} onChange={handleChange} sx={{ width: 450, marginTop: 5, marginLeft: "50px", display: "flex", flexDirection: "column" }} >
          <h3 style={{ position: "fixed", marginTop: "0px", left: 70 }}>Bienvenido</h3>
          <Tab label="Productos" {...a11yProps(1)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "80px" }} />
          <Tab label="Pedidos" {...a11yProps(2)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "130px" }} />
          <Tab label="Clientes" {...a11yProps(3)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "180px" }} />
          <Tab label="Proveedores" {...a11yProps(4)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "230px" }} />

          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Tab label="Cerrar sesión" className='whithoutOutline' {...a11yProps(5)} sx={{ position: "fixed", marginTop: "300px" }} />
          </Link>
        </Tabs>
        <TabPanel value={value} index={1}>
          <NavHorizontal type="products" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <NavHorizontal type="order" />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <NavHorizontal type="clientes" />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <NavHorizontal type="provider" />
        </TabPanel>
        </>
         : 
         <>
         <Tabs value={value} onChange={handleChange} sx={{ width: 450, marginTop: 5, marginLeft: "50px", display: "flex", flexDirection: "column" }} >
           <h3 style={{ position: "fixed", marginTop: "0px", left: 70 }}>Hola</h3>
           <Tab label="Mis compras" {...a11yProps(1)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "80px", outline: "none" }} />
           <Tab label="Datos personales y direcciones" {...a11yProps(2)} className='whithoutOutline'  sx={{ position: "fixed", marginTop: "130px" }} />
 
           <Link to={"/"} style={{ textDecoration: "none" }}>
             <Tab label="Cerrar sesión" className='whithoutOutline' {...a11yProps(3)} sx={{ position: "fixed", marginTop: "200px" }} />
           </Link>
         </Tabs>
 
         <TabPanel value={value} index={1}>
           <NavHorizontal type="buy"/>
         </TabPanel>
         <TabPanel value={value} index={2}>
           <InfoCountUser />
         </TabPanel>
         </>
        }
        
      </Box>
    </Div>
  );
}