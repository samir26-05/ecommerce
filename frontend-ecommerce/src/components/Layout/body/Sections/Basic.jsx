import { FlexDirCol, FlexRow, Title , BasicImg } from "./BasicStyled";
import Basic1 from "../../../../assets/Img/Basic1.png";
import Basic2 from "../../../../assets/Img/Basic2.png";

const Basics = () => {
  return (
    <FlexDirCol>
      <FlexRow>
        <BasicImg src={Basic2} />
        <BasicImg src={Basic1} />
      </FlexRow>
      <Title>Basics</Title>
    </FlexDirCol>
  );
};
export default Basics;
