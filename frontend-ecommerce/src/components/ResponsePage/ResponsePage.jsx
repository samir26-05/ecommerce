/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerP, } from "../PageNotFound/StylePageNotFound";
import axios from "axios";
import { FlexDirCol, FlexRow } from "../StyledMain";
import { Typography } from "@mui/material";
import Swal from "sweetalert2";

const Response = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState();
  const [transactionDate, setTransactionDate] = useState();
  const [numOrder, setNumOrder] = useState();
  const [oneClients, setOneClients] = useState();
  const urlBackend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    //---------------------------       OBTENER DATOS DE LA URL       -------------------------------------
    const searchParams = new URLSearchParams(window.location.search);
    const referenceCode = searchParams.get("referenceCode");
    const merchantId = searchParams.get("merchantId");
    const merchantName = searchParams.get("merchant_name");
    const merchantAddress = searchParams.get("merchant_address");
    const telephone = searchParams.get("telephone");
    const merchantUrl = searchParams.get("merchant_url");
    const transactionState = searchParams.get("transactionState");
    const lapTransactionState = searchParams.get("lapTransactionState");
    const processingDate = searchParams.get("processingDate");
    const referencePol = searchParams.get("reference_pol");
    const message = searchParams.get("message");


    setTransactionDate(processingDate)
    setNumOrder(referencePol)

    const uuidPattern =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

    //---------------------------       CONDICIONALES PARA VALIDAR LA ENTRADA A LA PÁGINA DE RESPUESTA       -------------------------------------

    if (
      referenceCode.match(uuidPattern) &&
      merchantId &&
      merchantAddress &&
      merchantName &&
      telephone &&
      merchantUrl &&
      transactionState &&
      lapTransactionState &&
      message &&
      processingDate &&
      referencePol
    ) {
      const fetchOrder = async () => {
        const response = await axios.get(
          `${urlBackend}/order/reference/${referenceCode}`,
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        );
        setOrder(response.data);
        console.log(response.data, 'orden');
      };

      fetchOrder();

      const fetchOneClients = async () => {
        try {
          const response = await axios.get(`${urlBackend}/user/name/${localStorage.getItem('username')}`,
            {
              headers: {
                accessToken: localStorage.getItem('accessToken'),
              },
            }
          );
          setOneClients(response.data);
          console.log(response.data);
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocurrió un error al intentar obtener la información!'
          })
        }
      }
  
      fetchOneClients();


    } else {
      navigate("/home");
    }
  }, []);
  const searchParams = new URLSearchParams(window.location.search);


  // VARIABLES DE ESTILO  
  const textPrimary = {fontWeight:"600", fontSize:"1rem", width:"fit-content"}

  return (
    <ContainerP>
      <FlexDirCol style={{ boxShadow: "0px 0px 5px 2px #0000002f", width:"75%", padding:"2rem", gap:"3rem" }}>
        <FlexRow>
          <FlexRow style={{justifyContent:"center"}}>
            <p style={{fontSize:"2.6rem", fontWeight:"600"}}>Orden de Compra</p>
          </FlexRow>
          <FlexDirCol style={{justifyContent:"center", width:"40%", gap:"1rem"}}>
            <FlexRow style={{gap:"10px", width:"18rem"}}>
              <Typography style={textPrimary}>Fecha:</Typography>
              <Typography style={{ borderBottom:"1px solid #0000004b", width:"100%"}}>
                {transactionDate}
                </Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px", width:"18rem"}}>
              <Typography style={textPrimary}>N° de orden:</Typography>
              <Typography style={{ borderBottom:"1px solid #0000004b", width:"62%"}}>
                {numOrder}
                </Typography>
            </FlexRow>
          </FlexDirCol>
        </FlexRow>
        <FlexRow style={{justifyContent:"space-around", gap:"25px"}}>
          {/* DATOS DEL PROVEEDOR */}

          <FlexDirCol style={{alignItems:"flex-start", gap:"10px", width:"100%"}}>
            <h4>Datos del proveedor</h4>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Nombre: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{searchParams.get("merchant_name")}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>NIT: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{searchParams.get("merchantId")}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Dirección: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{searchParams.get("merchant_address")}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Teléfono: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{searchParams.get("telephone")}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Correo: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>(Correo electrónico)</Typography>
            </FlexRow>
          </FlexDirCol>

            {/* DATOS DEL CLIENTE */}

          <FlexDirCol style={{alignItems:"flex-start", gap:"10px", width:"100%"}}>
            <h4>Datos del cliente</h4>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Nombre: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{localStorage.getItem('username')}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Dirección: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{oneClients.Personal_information.address}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>ZIP: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{oneClients.Personal_information.postalcode}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Teléfono: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{oneClients.Personal_information.Phone_number}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Correo: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{oneClients.email}</Typography>
            </FlexRow>
          </FlexDirCol>
        </FlexRow>

        <div style={{width:"90%", border:"1px solid #000"}}>
          <FlexRow style={{justifyContent:"space-around",}}>
            <h5 style={{fontWeight:"700"}}>Ref.</h5>
            <h5 style={{fontWeight:"700"}}>Descripción</h5>
            <h5 style={{fontWeight:"700"}}>Cantidad</h5>
            <h5 style={{fontWeight:"700"}}>Precio unitario</h5>
            <h5 style={{fontWeight:"700"}}>Precio Total</h5>
          </FlexRow>

        </div>

      </FlexDirCol>
    </ContainerP>
  );
};

export default Response;
