import { useState, useEffect } from 'react';
/* COMPONENTS */
import Header from "../../components/Layout/header/Header";
import Footer from "../../components/Layout/footer/Footer";
import NavVertical from '../../components/navs/NavVertical'
/* styles */
import { Div } from "./styled";

const UserPage = () => {
  const [userEnterUser, setUserEnterUser] = useState(true);

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