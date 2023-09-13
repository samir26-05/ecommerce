import styled from "styled-components";

export const Container = styled.div`

.BoxCar{
  @media (max-width:768px) {
        left: 1200%;
    }
}
  width: 100%;
  z-index: 3;
  transition: all 0.2s ease-in-out;
  background-color: ${({ isUsedUser, isUsedPayment, hovered, headerColor }) =>
    isUsedUser || isUsedPayment ? "#fff" : hovered ? "#fff" : headerColor};
  box-shadow: ${({ isUsedBody, headerColor }) =>
    isUsedBody
      ? headerColor !== "transparent"
        ? "0px 0px 3px 2px #0000003b"
        : "0px 0px 0px 0px"
      : "0px 0px 3px 2px #0000003b"};
  position: ${({ isUsedUser, isUsedBody }) =>
    isUsedUser || isUsedBody ? "fixed" : "static"};
`;

export const Cta = styled.button`
  border: none;
  background: none;
  :hover .span:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  :active {
    border: none;
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
    background-color: ${({ textColor }) => textColor};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
`;
