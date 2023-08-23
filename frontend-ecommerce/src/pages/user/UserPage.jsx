import { Div } from "./styled";
import { useState, useEffect } from 'react';
import Header from "../../components/Layout/header/Header";
import Footer from "../../components/Layout/footer/Footer";
import NavVertical from "./navs/NavVertical";

const UserPage = () => {
  const [userEnterUser, setUserEnterUser] = useState(false);

  const verifyEnter = () => {
    return true
  };

  useEffect(() => {
    const trueEnter = verifyEnter();
    setUserEnterUser(trueEnter);
    
    return () => {
      setUserEnterUser(false);
    };
  }, []);

  return ( 
    <Div>
        <Header isUsedUser={userEnterUser}/>
          <NavVertical/>
        <Footer/>
    </Div>
   );
}
 
export default UserPage;