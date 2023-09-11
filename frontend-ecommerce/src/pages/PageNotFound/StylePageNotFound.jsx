import styled from "styled-components";



export const ContainerP = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

`;

export const ContainerH = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%
  }
`;

export const ImgDiv = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
width: 100%;
height: 50% ; 

@media (max-width: 768px) {
    width: 100%;
  }
`;

/* export const H_Up = styled.div`
    height: 50%;
    width: 100%;
    background-color: #0306d3;
`
export const H_Down = styled.div`
    height: 50%;
    width: 100%;
    background-color: #008f2b;
` */
export const ImgSvg=styled.svg`
  width: 100%;
  max-width: 1200px;
@media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`
export const DivTxt = styled.div`
padding-top: 150px;
@media (max-width: 768px) {
    padding-top: 0;
  }
`
export const TxtH3=styled.h3`
margin: 0;
padding: 0;
`

export const TxtH1=styled.h1`

`



// Estilos para dispositivos medianos (tablet)
export const TabletContainerH = styled(ContainerH)`
  width: 75%; /* Ancho del 75% para tabletas */
`;

// Estilos para dispositivos grandes (computadoras)
export const DesktopContainerH = styled(ContainerH)`
  width: 50%; /* Ancho del 50% para computadoras */
`;