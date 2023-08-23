import { Div } from "./styled";
import { useState, useEffect } from "react";
import Header from "../../components/Layout/header/Header";
import Footer from "../../components/Layout/footer/Footer";
import FormUserPayment from "./forms/FormUser";

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
        <Header isUsed={userEnter}/>
          <FormUserPayment/>
        <Footer/>
    </Div>
   );
}
 
export default UserPage;