import styled from "styled-components";

const fontColor = "#000";

export const FlexDirCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BasicImg = styled.img`
  width: 40%;
  :nth-child(1) {
    width: 25%;
    @media (max-width: 768px) {
      width: 70%;
  }
  }
  @media (max-width: 768px) {
      width: 90%;
  }
`;

export const Title = styled.div`
  text-align: center;
  width: 100%;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 2.5rem;
  text-decoration: none;
  letter-spacing: 1px;
  line-height: 4rem;
  color: ${fontColor};
`;
