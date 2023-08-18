import { Div } from "./styled";
import Header from "../../components/Layout/header/Header";
import Footer from "../../components/Layout/footer/Footer";
import NavVertical from "./navs/NavVertical";

const UserPage = () => {
  return ( 
    <Div>
        <Header/>
          <NavVertical/>
        <Footer/>
    </Div>
   );
}
 
export default UserPage;