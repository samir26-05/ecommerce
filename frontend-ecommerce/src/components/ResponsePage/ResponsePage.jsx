import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerH, ContainerP, DivTxt, TxtH1, TxtH3 } from "../PageNotFound/StylePageNotFound";

const Response = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const referenceCode = searchParams.get('referenceCode');

    if (referenceCode) {
      console.log(referenceCode, 'respuestas');
    } else {
      navigate('/home')
    }


  }, []);
  return ( 
    <ContainerP>
      <ContainerH style={{backgroundColor:"#adadad39", boxShadow:"0px 0px 5px 2px #0000002f"}}>
        {/* MAPEO PRODUCTOS */}
        <DivTxt>
            <TxtH1>Transacción Aprovada</TxtH1>
            <TxtH3>
            <a href="/home">Back to home</a>
            </TxtH3>
        </DivTxt>
        
        
      </ContainerH>
    </ContainerP>
   );
}
 
export default Response;