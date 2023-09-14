import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
/* COMPONENTS */
import Header from "../../components/Layout/header/Header";
import Footer from "../../components/Layout/footer/Footer";
import FormUserPayment from '../../components/forms/processPayment/FormUser'
/* STYLED */
import { Div } from "./styled";

const UserPage = () => {
  const [userEnter, setUserEnter] = useState(false);
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
    setUserEnter(trueEnter);

    return () => {
      setUserEnter(false);
    };
  }, []);

  return (
    <Div>
      {loading ? (
        <>
          <h1>Cargando......</h1>
        </>
      ) : (
        <>
          <Header isUsedPayment={userEnter} />
          <FormUserPayment />
          <Footer />
        </>
      )}
    </Div>
  );
}

export default UserPage;