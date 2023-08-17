import { FlexDirCol, FlexRow, Title } from "../../../StyledMain";
import { BasicImg } from "./Styled";
import Basic1 from "../../../../assets/Img/Basic1.png";
import Basic2 from "../../../../assets/Img/Basic2.png";
import News from "./News";

const SectionsBody = () => {
  return (
    <FlexDirCol>
      <Basics />
      <News/>
    </FlexDirCol>
  );
};

export default SectionsBody;

const Basics = () => {
  return (
    <FlexDirCol
      style={{
        width: "100%",
        justifyContent: "space-evenly",
        height: "100vh",
        backgroundColor: "#e6e6e6",
      }}
    >
      <FlexRow
        style={{
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <BasicImg src={Basic2} />
        <BasicImg src={Basic1} />
      </FlexRow>
      <Title style={{fontWeight:"500"}}>Basics</Title>
    </FlexDirCol>
  );
};


