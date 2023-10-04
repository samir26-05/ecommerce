import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerH,
  ContainerP,
  DivTxt,
  TxtH1,
  TxtH3,
} from "../PageNotFound/StylePageNotFound";
import axios from "axios";

const Response = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState();
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
    const message = searchParams.get("message");

    const uuidPattern =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

    //---------------------------       CONDICIONALES PARA VALIDAR LA ENTRADA A LA PÁGINA DE RESPUESTA       -------------------------------------

    if ( referenceCode.match(uuidPattern) && merchantId && merchantAddress && merchantName && telephone && merchantUrl && transactionState && lapTransactionState && message ) {
      const fetchOrder = async () => {
        const response = await axios.get(`${urlBackend}/order/reference/${referenceCode}`, {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        );
        setOrder(response.data)
      };

      fetchOrder();
    } else {
      navigate("/home");
    }
  }, []);

  return (
    <ContainerP>
      <ContainerH
        style={{
          backgroundColor: "#adadad39",
          boxShadow: "0px 0px 5px 2px #0000002f",
        }}
      >
        {order.map((order) => (
          <div key={order.order_id}>{order.order_id}</div>
        ))}
        <DivTxt>
          <TxtH1>Transacción Aprovada</TxtH1>
          <TxtH3>
            <a href="/home">Back to home</a>
          </TxtH3>
        </DivTxt>
      </ContainerH>
    </ContainerP>
  );
};

export default Response;
