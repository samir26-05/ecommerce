import styled from "styled-components";

export const Cta = styled.button`
  border: none;
  background: none;
  :hover {
  transform: scaleX(1);
  transform-origin: bottom left;
}

`;

export const Span = styled.span`
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 14px;
  padding-right: 10px;
  text-transform: uppercase;
  position: relative;
  color: rgb(0, 0, 0);
  :after {
    content: "";
    position: absolute;
    width: 78%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({textColor}) => textColor};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
`;
