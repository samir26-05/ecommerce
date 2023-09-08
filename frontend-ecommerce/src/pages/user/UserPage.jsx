import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
/* COMPONENTS */
import Header from "../../components/Layout/header/Header";
import Footer from "../../components/Layout/footer/Footer";
import NavVertical from '../../components/navs/NavVertical'
/* styles */
import { Div } from "./styled";

const UserPage = () => {
  const [userEnterUser, setUserEnterUser] = useState(true);
  const [loading, setLoading] = useState(true)
  const verifyEnter = () => {
    return true
  };

  let navigate = useNavigate(); 

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      console.log(jwt_decode(localStorage.getItem("accessToken")), "❤❤❤❤")
      setLoading(false)
    } else {
      navigate('/')
    }

    const trueEnter = verifyEnter();
    setUserEnterUser(trueEnter);

    return () => {
      setUserEnterUser(false);
    };


  }, []);

  return (
    <Div>
      {loading ? (
        <>
          <h1>Cargando......</h1>
        </>
      ) : (<>
        <Header isUsedUser={userEnterUser} />
        <NavVertical />
        <Footer />
      </>
      )}
    </Div>
  );
}

export default UserPage;