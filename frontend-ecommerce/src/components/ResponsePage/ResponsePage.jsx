/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContainerP, } from "../PageNotFound/StylePageNotFound";
import { FlexDirCol, FlexRow } from "../StyledMain";
import { Button, Typography } from "@mui/material";
import { BsDownload } from "react-icons/bs"
import { PDFDocument, rgb } from 'pdf-lib';
import axios from "axios";
import Swal from "sweetalert2";

const Response = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState();
  const [products, setProducts] = useState();
  const [deliveryDate, setDeliveryDate] = useState();
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
      lapTransactionState === 'APPROVED' &&
      referenceCode.match(uuidPattern) &&
      merchantId &&
      merchantAddress &&
      merchantName &&
      telephone &&
      merchantUrl &&
      transactionState &&
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
        setProducts(response.data.products);
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
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocurrió un error al intentar obtener la información!'
          })
        }
      }

      const getDeliveryDate = (date) => {
        const processingDate = new Date(date);
        processingDate.setDate(processingDate.getDate() + 4);

        const newYear = processingDate.getFullYear();
        const newMonth = String(processingDate.getMonth() + 1).padStart(2, '0'); 
        const newDay = String(processingDate.getDate()).padStart(2, '0');
        
        
        const newDeliveryDate = `${newYear}-${newMonth}-${newDay}`;
        setDeliveryDate(newDeliveryDate);
      }

      getDeliveryDate(processingDate)
      fetchOneClients();


    } else {
      navigate("/home");
    }
  }, []);

  const createPDF = async (order, clients) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([800, 800]);
    const font = page.drawText("")
  
    // Organiza los datos como deseas en el PDF
    const content = `
      ORDEN DE COMPRA

      Fecha: ${transactionDate}
      N° de orden: ${numOrder}


      Datos del proveedor
      Nombre: ${searchParams.get("merchant_name")}
      NIT: ${searchParams.get("merchantId")}
      Dirección: ${searchParams.get("merchant_address")}
      Teléfono: ${searchParams.get("telephone")}
      Correo electrónico: KALARY@wowdesarrollos.com


      Datos del cliente
      Nombre: ${localStorage.getItem("username")}
      Dirección: ${clients?.Personal_information.address}
      ZIP: ${clients?.Personal_information.postalcode}
      Teléfono: ${clients?.Personal_information.Phone_number}
      Correo electrónico: ${clients?.email}


      
      
    `;
  
    page.drawText(content, {
      x: 50,
      y: 750,
      size: 14,
      font: font,
      color: rgb(0, 0, 0),
    });
  
    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = `Orden de compra Kalary ${numOrder}.pdf`;  
    a.click();  
    URL.revokeObjectURL(pdfUrl);
  };


  const searchParams = new URLSearchParams(window.location.search);


  // VARIABLES DE ESTILO  
  const textPrimary = {fontWeight:"600", fontSize:"1rem", width:"fit-content"}
  const maps = {fontWeight:"700", borderLeft:"1px solid #000", lineHeight:"40px", margin:"0", textAlign:"center", width:"200px",}
  const maps1 = {fontWeight:"500", borderLeft:"1px solid #000", lineHeight:"40px", margin:"0", textAlign:"center", width:"200px",}

  const titles = ["Descripción", "Cantidad", "Precio unitario", "Precio Total"]

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
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>KALARY@wowdesarrollos.com</Typography>
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
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{oneClients?.Personal_information.address}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>ZIP: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{oneClients?.Personal_information.postalcode}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Teléfono: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{oneClients?.Personal_information.Phone_number}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Correo: </Typography>
              <Typography style={{borderBottom:"1px solid #0000004b", width:"100%"}}>{oneClients?.email}</Typography>
            </FlexRow>
          </FlexDirCol>
        </FlexRow>

        <div style={{width:"90%"}}>
          <FlexRow style={{justifyContent:"space-between", border:"1px solid #000"}}>
            {titles.map((item, index) => (
              <h5 key={index} style={maps}>{item}</h5>
            ))}
          </FlexRow>
          
          {products?.map((item, index) => (
            <FlexRow key={index} style={{justifyContent:"space-between", border:"1px solid #000"}}>
              <h5 style={maps1}>{item.producto}</h5>
              <h5 style={maps1}>{item.cantidad}</h5>
              <h5 style={maps1}>{item.valor_unitario}</h5>
              <h5 style={maps1}>{item.valor}</h5>
            </FlexRow>
          ))}
        </div>

        <div style={{width:"90%"}}>
          <FlexRow style={{justifyContent:"space-between", border:"1px solid #000"}}>
            <Typography style={maps}>Total Pedido</Typography>
            <Typography style={maps}>${order?.total_value - order?.envio}</Typography>
          </FlexRow>
          {order?.discount > 0 ? 
            <FlexRow style={{justifyContent:"space-between", border:"1px solid #000"}}>
              <Typography style={maps}>Descuento total</Typography>
              <Typography style={maps}>${order?.discount}</Typography>
            </FlexRow>
          :
          ''}
          <FlexRow style={{justifyContent:"space-between", border:"1px solid #000"}}>
            <Typography style={maps}>Gastos de envío</Typography>
            <Typography style={maps}>${order?.envio}</Typography>
          </FlexRow>
          <FlexRow style={{justifyContent:"space-between", border:"1px solid #000"}}>
            <Typography style={maps}>Total a pagar</Typography>
            <p style={maps1}>${order?.total_value - order?.discount}</p>
          </FlexRow>
        </div>
        
        <FlexRow style={{justifyContent:"space-between"}}>
          <FlexDirCol style={{width:"100%"}}></FlexDirCol>
          <FlexDirCol style={{alignItems:"flex-start", gap:"10px", width:"100%"}}>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Dirección de entrega: </Typography>
              <Typography sx={{pl:"20px"}} style={{borderBottom:"1px solid #0000004b", width:"50%"}}>{oneClients?.Personal_information.address}</Typography>
            </FlexRow>
            <FlexRow style={{gap:"10px"}}>
              <Typography style={textPrimary}>Fecha de entrega estimada: </Typography>
              <Typography sx={{pl:"20px"}} style={{borderBottom:"1px solid #0000004b", width:"43%"}}>{deliveryDate}</Typography>
            </FlexRow>
          </FlexDirCol>
        </FlexRow>

        <FlexRow style={{justifyContent:"center", gap:"20px"}}>
          <Link to={'/home'}>
            <Button style={{backgroundColor:"#000", color:"#fff", padding:".8rem"}}>
              Back to home
            </Button>
          </Link>

          <Button onClick={() => createPDF(order, oneClients)} style={{ height:"50px", backgroundColor:"#000", color:"#fff", gap:"20px", padding:"0 1rem" }}>
            <BsDownload style={{fill:"#fff", fontSize:"1.2rem"}}/>
            Descargar PDF
          </Button>
        </FlexRow>
      </FlexDirCol>
    </ContainerP>
  );
};

export default Response;
