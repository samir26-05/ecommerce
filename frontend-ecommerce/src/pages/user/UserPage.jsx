import { Div } from "./styled";
import Header from "../../components/Layout/header/Header";
import Footer from "../../components/Layout/footer/Footer";
import NavHorizontal from "./navs/NavVertical";

const UserPage = () => {
  return ( 
    <Div>
        <Header/>
          <NavHorizontal/>
        <Footer/>
    </Div>
   );
}
 
export default UserPage;