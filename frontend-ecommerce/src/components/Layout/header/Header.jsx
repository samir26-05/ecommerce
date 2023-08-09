import * as React from 'react';
import { Div } from "./styled"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '../header/styledHeader.css'

const pages = ['Hombre', 'Mujer', 'Niño'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return ( 
    <Div>
      <AppBar position="sticky" style={{backgroundColor: "#ffffff"}}>
      <Container maxWidth="">
        <Toolbar disableGutters>
          <Typography className='Typography' variant="h1" noWrap component="a" href="/home"
          sx={{mr: 3,display: { xs: 'none', md: 'flex' }}}>BERSHKA</Typography>
          <Typography variant="h3" noWrap component="a" href="/home" sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000000',
              textDecoration: 'none',}}>BERSHKA
          </Typography>


          <Box className='Box' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {pages.map((page) => (
              <Button
              variant="outlined"
                className='la'
                style={{color: '#000000', border: 'none', margin: '0 20px', }}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'black', display: 'block', border: 'none'}}>
                {page}
              </Button>
            ))}
          </Box>

          <Box className='ja' sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Div>
   );
}
 
export default Header;