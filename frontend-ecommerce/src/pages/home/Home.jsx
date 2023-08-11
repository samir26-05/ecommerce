import Header from "../../components/Layout/header/Header";
import Body from "../../components/Layout/body/Body";
import Footer from "../../components/Layout/footer/Footer";
import { Div } from "./styled";

const HomePage = () => {
  return (
      <Div>
        <Header />
        <Body />
        <Footer/>
        
      </Div>
  );
};

export default HomePage;
