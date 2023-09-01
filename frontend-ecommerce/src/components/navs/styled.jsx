import styled from "styled-components"

export const Div = styled.div`
    max-width: 744px;
    width: 100vw;
    height: 100%;
    min-height: 80vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: white;
    color: black;
`

export const Div2 = styled.div`
     /* Usamos min-height en lugar de height */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
`

export const Img = styled.img`
    width: 200px;
    height: 200px;    
`

import { AiOutlineEye } from "react-icons/ai";

export const ActionBtn = styled.button`
  padding: 0.6rem;
  border: none;
  text-align: center;
  svg {
    fill: #fff;
  }
`;

export const ActionButtons = () => {
  return (
    <div style={{ display: "flex", gap: ".8rem" }}>
      <ActionBtn>
        <AiOutlineEye />
      </ActionBtn>
      <ActionBtn>
        <AiOutlineEye />
      </ActionBtn>
      <ActionBtn>
        <AiOutlineEye />
      </ActionBtn>
      <ActionBtn>
        <AiOutlineEye />
      </ActionBtn>
    </div>
  );
};