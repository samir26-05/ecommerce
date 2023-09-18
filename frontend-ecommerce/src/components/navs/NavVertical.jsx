import React, { useState } from "react";
/* MATERIAL UI */
import { Avatar, Grid, IconButton, ListItem, ListItemText, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
/* COMPONENTS */
import NavHorizontal from "./NavHorizontal";
import InfoCountUser from "./InfoCount";
/* STYLES */
import { FlexDirCol, Div, Box } from "./NavVerticalStyled";
import { useNavigate } from "react-router-dom";

import { LiaDropbox  } from 'react-icons/lia';
import {TbTruckDelivery} from 'react-icons/tb';
import {PiUserList} from 'react-icons/pi';
import {CiSettings} from 'react-icons/ci';
import {BsBoxArrowInLeft} from 'react-icons/bs';

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
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavVertical() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const navegate = useNavigate();

  const salirSession = () => {
    localStorage.removeItem("accessToken");
    navegate("/");
  };

  return (
    <Box>
      {localStorage.getItem("role") === "Admin" ? (
        <Div>
          <Tabs className="Tabs" value={value} onChange={handleChange}>
            <Grid className="Grid" item xs={12} sm={6}>
              <ListItem className="ListItem">
                <Avatar
                  className="Avatar"
                  alt={localStorage.getItem("username")}
                  src="/static/images/avatar/1.jpg"
                />
               
                <ListItemText
                  className="ListItemText"
                  primary="Bienvenido"
                  secondary={localStorage.getItem("username")}
                />
              </ListItem>
            </Grid>
            <ListItemText className="ListItemText" secondary="PANEL DE OPERACIONES" style={{marginTop:"30px", marginLeft:"0px"}}/>
            <Tab className="Tab" {...a11yProps(1)} label={
              <div>
                <LiaDropbox style={{ marginRight: "8px", fontSize: "28px" }} />
                Productos
              </div>
            }/>
            <Tab className="Tab" {...a11yProps(2)} label={
              <div>
                <TbTruckDelivery style={{ marginRight: "8px", fontSize: "28px" }} />
                Pedidos
              </div>
            }/>
            <Tab className="Tab" {...a11yProps(3)} label={
              <div>
                <PiUserList style={{ marginRight: "8px", fontSize: "28px" }} />
                Clientes
              </div>
            }/>
            {/*  <Tab className="Tab" label="Proveedores" {...a11yProps(4)} /> */}
            
            <ListItemText className="ListItemText" secondary="CONFIGURACION  DE PERFIL" style={{marginTop:"80px", marginLeft:"0px"}}/>
            <Tab className="Tab" {...a11yProps(4)}   label={
              <div>
                <CiSettings style={{ marginRight: "8px", fontSize: "28px" }} />
                Info. general
              </div>
            }/>
            <Tab className="Tab"  onClick={salirSession} label={
              <div>
                <BsBoxArrowInLeft style={{ marginRight: "8px", fontSize: "28px" }} />
                Cerrar sesión
              </div>
            }/>
          </Tabs>
        
          <div className="TabPanels">
            <TabPanel className="TabPanel" value={value} index={1}>
              <NavHorizontal className="NavHorizontal" type="products" />
            </TabPanel>
            <TabPanel className="TabPanel" value={value} index={2}>
              <NavHorizontal className="NavHorizontal" type="order" />
            </TabPanel>
            <TabPanel className="TabPanel" value={value} index={3}>
              <NavHorizontal className="NavHorizontal" type="clientes" />
            </TabPanel>
            {/*  <TabPanel className="TabPanel" value={value} index={4}>
              <NavHorizontal className="NavHorizontal" type="provider" />
            </TabPanel> */}
            <TabPanel className="TabPanel" value={value} index={4}>
              <InfoCountUser />
            </TabPanel>

          </div>
        </Div>
      ) : (
        <Div>
          <Tabs className="Tabs" value={value} onChange={handleChange}>
            <Grid className="Grid" item xs={12} sm={6}>
              <ListItem className="ListItem">
                <Avatar
                  className="Avatar"
                  alt={localStorage.getItem("username")}
                  src="/static/images/avatar/1.jpg"
                />
                <ListItemText
                  className="ListItemText"
                  primary="Bienvenido"
                  secondary={localStorage.getItem("username")}
                />
              </ListItem>
            </Grid>
            <Tab className="Tab" label="Mis compras" {...a11yProps(1)} />
            <Tab className="Tab" label="Mi perfil" {...a11yProps(2)} />
            <Tab className="Tab" label="Cerrar sesión" onClick={salirSession} />
          </Tabs>
          <div className="TabPanels">

            <TabPanel className="TabPanel" value={value} index={1}>
              <NavHorizontal className="NavHorizontal" type="buy" />
            </TabPanel>
            <TabPanel className="TabPanel" value={value} index={2}>
              <InfoCountUser />
            </TabPanel>
          </div>
        </Div>
      )}
    </Box>
  );
}
