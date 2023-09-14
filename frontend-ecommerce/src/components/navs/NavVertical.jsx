import { useState } from 'react';
/* MATERIAL UI */
import { Avatar, Box, Grid, ListItem, ListItemText } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
/* COMPONENTS */
import NavHorizontal from './NavHorizontal';
import InfoCountUser from './InfoCount';
/* STYLES */
import { Div } from '../../pages/user/styled';
import { FlexDirCol } from '../StyledMain';
import { useNavigate } from 'react-router-dom';
import FooterUser from '../Layout/footer/FooterUser';


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
  };


  const navegate = useNavigate()

  const salirSession = () => {
    localStorage.removeItem("accessToken");
    navegate('/')
  }


  return (
    <Div >
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100hv', marginTop: 15 }}>
        {localStorage.getItem("role") === "Admin" ?
          <>
            <Tabs value={value} onChange={handleChange} sx={{ width: 450, marginTop: 5, marginLeft: "50px", display: "flex", flexDirection: "column" }} >
              <Grid item xs={12} sm={6} sx={{ position: "fixed"}}>
                <ListItem sx={{ py: 1, px: 0 }}>
                  <Avatar alt={localStorage.getItem("username")} src="/static/images/avatar/1.jpg" />
                  <ListItemText primary="Bienvenido" secondary={localStorage.getItem("username")} sx={{ px: 1 }} />
                </ListItem>
              </Grid>
              <Tab label="Productos" {...a11yProps(1)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "80px" }} />
              <Tab label="Pedidos" {...a11yProps(2)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "130px" }} />
              <Tab label="Clientes" {...a11yProps(3)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "180px" }} />
              <Tab label="Proveedores" {...a11yProps(4)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "230px" }} />

              <Tab label="Cerrar sesión" className='whithoutOutline' onClick={salirSession} {...a11yProps(7)} sx={{ position: "fixed", marginTop: "300px" }} />
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
              <Grid item xs={12} sm={6} sx={{ position: "fixed"}}>
                <ListItem sx={{ py: 1, px: 0 }}>
                  <Avatar alt={localStorage.getItem("username")} src="/static/images/avatar/1.jpg" />
                  <ListItemText primary="Bienvenido" secondary={localStorage.getItem("username")} sx={{ px: 1 }} />
                </ListItem>
              </Grid>
              <Tab label="Mis compras" {...a11yProps(1)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "80px", outline: "none" }} />
              <Tab label="Datos personales y direcciones" {...a11yProps(2)} className='whithoutOutline' sx={{ position: "fixed", marginTop: "130px" }} />

              <Tab label="Cerrar sesión" className='whithoutOutline' onClick={salirSession} {...a11yProps(7)} sx={{ position: "fixed", marginTop: "210px" }} />
            </Tabs>

            <TabPanel value={value} index={1}>
              <NavHorizontal type="buy" />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <InfoCountUser />
            </TabPanel>
          </>
        }

      </Box>
      <FooterUser />
    </Div>
  );
}