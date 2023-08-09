import { useState } from 'react';
import {  Grid, Typography, Button, Modal } from '@mui/material';
import { Facebook, Twitter, Instagram, WhatsApp} from '@mui/icons-material';
import { FooterLink, SocialIcon, ModalContent } from './styled';
import QrWths from '../../../assets/Img/QrWhts.png';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div  style={{ display:"flex", width:"100%", justifyContent:"center"}}>
      <div style={{ display:"flex", flexDirection:"column", width:"80%", justifyContent:"space-around", marginTop: "40px", height: "300px" }}>
        <div>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6">Horarios de Atención</Typography>
              <Typography  style={{marginTop:"20px"}}>
                Lunes a Viernes: 9:00 AM - 6:00 PM
                <br />
                Sábados y Domingos: Cerrado
              </Typography>

              <div  >
                <Button onClick={handleOpenModal} style={{marginTop:"20px", color:"green"}}>
                  <WhatsApp />
                  Chatea con un asesor
                </Button>

                <Modal open={modalOpen} onClose={handleCloseModal}>
                  <ModalContent>
                    <Typography  variant="h6" style={{marginTop:"20px",color:"green", textAlign:"center"}}>Escanee el código QR</Typography>
                    <img src={QrWths} alt="QR Code" style={{ width: '100%', marginTop: '1rem' }} />
                  </ModalContent>
                </Modal>
              </div>

            </Grid>

            <Grid item xs={12} sm={3}>
              <Typography variant="h6">Todo sobre la empresa</Typography>
              <Typography>
                <FooterLink href="#">Pagos</FooterLink>
                <br />
                <FooterLink href="#">Envios</FooterLink>
                <br />
                <FooterLink href="#">Devoluciones</FooterLink>
                <br />
                <FooterLink href="#">Solicitar factura</FooterLink>
                <br />
                <FooterLink href="#">Compra Online</FooterLink>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Typography variant="h6">Ayuda</Typography>
              <Typography>
                <FooterLink href="#">Preguntas frecuentes</FooterLink>
                <br />
                <FooterLink href="#">Política de devoluciones</FooterLink>
                <br />
                <FooterLink href="#">Términos y condiciones</FooterLink>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Typography variant="h6">Información Adicional</Typography>
              <Typography>
                <FooterLink href="#">Categorías</FooterLink>
                <br />
                <FooterLink href="#">Tallas</FooterLink>
                <br />
                <FooterLink href="#">Puntos de Venta</FooterLink>
                <br />
                <FooterLink href="#">Prensa</FooterLink>
                <br />
                <FooterLink href="#">Trabaja con nosotros</FooterLink>
              </Typography>
            </Grid>
          </Grid>
        </div>
        
        <div style={{display:"flex", justifyContent:"space-around", marginTop:"40px"}}>
          <Grid>
            <SocialIcon>
              <Facebook />
            </SocialIcon>
            <SocialIcon>
              <Twitter />
            </SocialIcon>
            <SocialIcon>
              <Instagram />
            </SocialIcon>
          </Grid>
          
        </div>
        <div style={{display:"flex", justifyContent:"space-around"}}>
          <Grid>
            <Typography align="center" variant="body2" style={{ marginTop: '1rem' }}>
              © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
            </Typography>
          </Grid>          
        </div>

      </div>
    </div>
  );
};

export default Footer;
