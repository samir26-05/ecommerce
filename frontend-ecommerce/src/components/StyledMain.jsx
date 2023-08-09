import styled from "styled-components";

const fontColor = "#000"

export const FlexDirCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 3rem;
  text-decoration: none;
  letter-spacing: 2px;
  line-height: 4rem;
  color: ${fontColor};
`;

export const Text = styled.p`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${fontColor};
`;