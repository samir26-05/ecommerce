import LoginDrawer from "../../../pages/Login/Login";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './styled.css'

const pages = ['Inicio', 'Mujer', 'Hombre'];

const Header = () => {
  const handleCloseNavMenu = () => {
  };
  return ( 
      <AppBar position="sticky" style={{backgroundColor: "#ffffff"}}>
      <Container maxWidth="">
        <Toolbar disableGutters>
          <Typography
          className="Typography"
          variant="h1" 
          noWrap 
          component="a" 
          href="/home"
          sx={{mr: 3,
          display: { xs: 'none', md: 'flex' },
          color: '#000',
          textDecoration: 'none',
          letterSpacing: '.8rem',
          fontWeight: 700}}>KALARY
          </Typography>
          <Typography 
          variant="h3" 
          noWrap 
          component="a" 
          href="/home" 
          sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000000',
              textDecoration: 'none'}}>KALARY
          </Typography>

          <Box
          className= 'box-primary'
          sx={{
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            }}>
            {pages.map((page) => (
              <Button
              className="ja"
              variant=""
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                fontWeight:'bold',
                my: 1, 
                color: 'black',
                margin: '0 15px',
                }}>
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <LoginDrawer/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   );
}
 
export default Header;