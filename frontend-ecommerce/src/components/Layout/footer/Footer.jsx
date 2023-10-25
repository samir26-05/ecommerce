import { useState } from "react";
import { Typography, Modal } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Div, SocialIcon, ModalContent } from "./FooterStyled";
import QrWths from "../../../assets/Img/QrWhts.png";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [modalOpenInfo, setModalOpenInfo] = useState(false);

  const handleOpenModalInfo = () => {
    setModalOpenInfo(true);
  };

  const handleCloseModalInfo = () => {
    setModalOpenInfo(false);
  };

  return (
    <Div>
      <div className="Content">
        <div className="Information">
          <h4>Horarios de Atención</h4>
          <p className="Text">
            Lunes a Viernes: 9:00 AM - 6:00 PM
            <br />
            Sábados y Domingos: Cerrado
          </p>
          <div className="Bwh">
            <button className="Wh" onClick={handleOpenModal}>
              <p>Chatea con un asesor</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
              </svg>
            </button>
          </div>
          <Modal open={modalOpen} onClose={handleCloseModal}>
            <ModalContent>
              <Typography
                variant="h6"
                style={{
                  marginTop: "20px",
                  color: "green",
                  textAlign: "center",
                }}
              >
                Escanee el código QR
              </Typography>
              <img
                src={QrWths}
                alt="QR Code"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </ModalContent>
          </Modal>
          <Modal open={modalOpenInfo} onClose={handleCloseModalInfo}>
            <ModalContent>
              <Typography
                variant="h6"
                style={{
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Infomacion Relacinada
              </Typography>
            </ModalContent>
          </Modal>
        </div>
        <div className="Information">
          <h4>Todo sobre la empresa</h4>
          <p className="Text">
            <a onClick={handleOpenModalInfo}>Pagos</a>
            <br />
            <a onClick={handleOpenModalInfo}>Envios</a>
            <br />
            <a onClick={handleOpenModalInfo}>Devoluciones</a>
            <br />
            <a onClick={handleOpenModalInfo}>Solicitar factura</a>
            <br />
            <a onClick={handleOpenModalInfo}>Compra Online</a>
            <br />
          </p>
        </div>
        <div className="Information">
          <h4>Ayuda</h4>
          <p className="Text">
            <a onClick={handleOpenModalInfo}>Preguntas frecuentes</a>
            <br />
            <a onClick={handleOpenModalInfo}>Política de devoluciones</a>
            <br />
            <a onClick={handleOpenModalInfo}>Términos y condiciones</a>
          </p>
        </div>
        <div className="Information">
          <h4>Información Adicional</h4>
          <p className="Text">
            <a onClick={handleOpenModalInfo}>Información Adicional</a>
            <br />
            <a onClick={handleOpenModalInfo}>Categorías</a>
            <br />
            <a onClick={handleOpenModalInfo}>Tallas</a>
            <br />
            <a onClick={handleOpenModalInfo}>Puntos de Venta</a>
            <br />
            <a onClick={handleOpenModalInfo}>Prensa</a>
            <br />
            <a onClick={handleOpenModalInfo}>Trabaja con nosotros</a>
          </p>
        </div>
      </div>
      <div className="Networks">
        <div>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
        </div>
      </div>
      <div className="Copyright">
        <Typography variant="body2">
          © {new Date().getFullYear()} KALARY. Todos los derechos reservados.
        </Typography>
      </div>
    </Div>
  );
};

export default Footer;
