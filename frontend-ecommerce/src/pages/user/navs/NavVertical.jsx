import { useState } from 'react';
import { Link } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import NavHorizontal from './NavHorizontal';
import InfoCountUser from './InfoCount';
import { Div } from '../styled';


function TabPanel(props) {
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
          <Typography>{children}</Typography>
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

  return (
    <Div >
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
        <Tabs onChange={handleChange} sx={{ width: 500, marginTop: 5, marginLeft: "50px", display: "flex", flexDirection: "column" }} >
            <h3 style={{ position: "fixed", marginTop: "0px", left: 70 }}>Hola</h3>
            <Tab label="Mis compras" {...a11yProps(1)} sx={{ position: "fixed", marginTop: "80px" }} />
            <Tab label="Datos personales y direcciones" {...a11yProps(2)} sx={{ position: "fixed", marginTop: "110px" }} />

            <Link to={"/"}>
              <Tab label="Cerrar sesión" {...a11yProps(3)} sx={{ position: "fixed", marginTop: "200px" }} />
            </Link>
        </Tabs>


        <TabPanel value={value} index={1}>
          <NavHorizontal />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <InfoCountUser />
        </TabPanel>

      </Box>
    </Div>
  );
}
