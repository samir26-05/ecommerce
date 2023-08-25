import styled from "styled-components"

export const ContainerFather = styled.div`
    width: 100%;
    height: j;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f5f5f5;
    
`

export const DivTitle = styled.div`
    height: auto;
    width: auto;
    padding-top: 20px;
    padding-bottom: 20px;
`

export const ContainerH = styled.div`
    box-sizing: border-box;
    width: 70%;
    height: 100%;
    display: flex;
    margin-bottom: 20px;
`   

 export const DivCategory = styled.div`
    
    width: 100%;
    height: 100%;
    font-size: 18px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    text-align: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
` 

export const Card = styled.div`
    box-sizing: border-box;
    max-width: 1500px;
    width: 226px;
    height: 290px;
    background-image: url(${({ backg }) => backg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    

`