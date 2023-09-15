import { useState } from "react";
/* MATERIAL UI */
import { Avatar, Grid, ListItem, ListItemText } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
/* COMPONENTS */
import NavHorizontal from "./NavHorizontal";
import InfoCountUser from "./InfoCount";
/* STYLES */
import { FlexDirCol, Div, Box } from "./NavVerticalStyled";
import { useNavigate } from "react-router-dom";

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

export default function NavVertical() {
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
            <Tab className="Tab" label="Productos" {...a11yProps(1)} />
            <Tab className="Tab" label="Pedidos" {...a11yProps(2)} />
            <Tab className="Tab" label="Clientes" {...a11yProps(3)} />
            <Tab className="Tab" label="Proveedores" {...a11yProps(4)} />
            <Tab className="Tab" label="Cerrar sesión" onClick={salirSession} />
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
            <TabPanel className="TabPanel" value={value} index={4}>
              <NavHorizontal className="NavHorizontal" type="provider" />
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
            <Tab
              className="Tab"
              label="Datos personales y direcciones"
              {...a11yProps(2)}
            />

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
