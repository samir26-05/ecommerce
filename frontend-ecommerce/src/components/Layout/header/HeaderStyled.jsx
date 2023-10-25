import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8%;
  transition: all 0.2s ease-in-out;
  z-index: 200;
  display: flex;
  align-items: center;
  background-color: ${({ isUsedUser, isUsedPayment, hovered, headerColor }) =>
    isUsedUser || isUsedPayment
      ? "#ffffff"
      : hovered
      ? "#ffffff"
      : headerColor};
  box-shadow: ${({ isUsedBody, headerColor }) =>
    isUsedBody
      ? headerColor !== "transparent"
        ? "0px 0px 3px 2px #0000003b"
        : "0px 0px 0px 0px"
      : "0px 0px 3px 2px #0000003b"};
  position: ${({ isUsedUser, isUsedBody, isUsedPayment }) =>
    isUsedUser || isUsedBody || isUsedPayment ? "fixed" : "relative"};

  .BoxTiltle {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 2%;
    height: 100%;
    width: 20%;
    a {
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-size: 3.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      letter-spacing: 0.8rem;
      font-weight: 700;
      :hover {
        color: #000 !important;
        text-decoration: none;
      }
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    /* @media (max-width: 768px) {
      display: none;
    } */
    @media (max-width: 768px) {
      width: 70%;
    }
  }

  .BoxNav {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2.5%;
    height: 100%;
    width: 50%;
    /* @media (max-width: 768px) {
      width: 50%;
      padding-left: 5%;
      gap: 10%;
    } */
    @media (max-width: 768px) {
      display: none;
    }
  }

  .BoxUser {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 2%;
    height: 100%;
    width: 30%;
    @media (max-width: 768px) {
      gap: 25%;
    }
    .IconUser {
      height: 100%;
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Cta = styled.button`
  border: none;
  background: none;
  :hover .span:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Span = styled.span`
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 14px;
  text-transform: uppercase;
  position: relative;
  color: rgb(0, 0, 0);
  :after {
    content: "";
    position: absolute;
    width: 95%;
    transform: scaleX(0);
    height: 6%;
    bottom: 0;
    left: 0;
    transition: transform 0.25s ease-out;
    background-color: ${({ isUsedBody, textColor }) =>
      isUsedBody ? textColor : "#000"};
  }
`;
