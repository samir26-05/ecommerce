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
    padding-top: 40px;
    padding-bottom: 40px;
    letter-spacing: 2px;
`

export const ContainerH = styled.div`
    box-sizing: border-box;
    width: 70%;
    height: 100%;
    display: flex;
    margin-bottom: 50px;
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
    max-width: 1500px;
    width: 226px;
    display: flex;
    flex-wrap: wrap;
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

export const Text = styled.text`
    letter-spacing: 2px;
`