import styled from "styled-components"

export const ContainerFather = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`

export const DivTitle = styled.div`
    height: auto;
    width: auto;
    padding-top: 40px;
    padding-bottom: 40px;
    letter-spacing: 2px;
`

export const ContainerH = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 70%;
    letter-spacing: 2px;
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
    overflow: hidden;
    width: 90%;
    display: flex;
    cursor: pointer;
    :hover {
        border: 1px solid;
    }

`

export const Img = styled.img`
    transition: transform 900ms;
    width: 100%;
    height: 100%;
    object-fit: cover;
    :hover{
        transform: scale(1.2);
    }

`