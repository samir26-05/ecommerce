import { Div } from "./styled";
import Header from "../../components/Layout/header/Header";
import Footer from "../../components/Layout/footer/Footer";
import FormUserPayment from "./forms/FormUser";

const UserPage = () => {
  return ( 
    <Div>
        <Header/>
          <FormUserPayment/>
        <Footer/>
    </Div>
   );
}
 
export default UserPage;