import { useState, useEffect } from "react";
/* COMPONENTS */
import Header from "../../components/Layout/header/Header";
import Footer from "../../components/Layout/footer/Footer";
import FormUserPayment from '../../components/forms/processPayment/FormUser'
/* STYLED */
import { Div } from "./styled";

const UserPage = () => {
  const [userEnter, setUserEnter] = useState(false);
  const verifyEnter = () => {
    return true
  };

  useEffect(() => {
    const trueEnter = verifyEnter();
    setUserEnter(trueEnter);
    
    return () => {
      setUserEnter(false);
    };
  }, []);
  return ( 
    <Div>
        <Header isUsedPayment={userEnter}/>
          <FormUserPayment/>
        <Footer/>
    </Div>
   );
}
 
export default UserPage;