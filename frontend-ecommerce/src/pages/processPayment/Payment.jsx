/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
/* COMPONENTS */
import Loading from "../../components/loading/Loading"
import Header from "../../components/Layout/header/Header";
import FormUserPayment from '../../components/forms/processPayment/FormUser'
import FooterUser from "../../components/Layout/footer/FooterUser";
/* STYLED */
import { Div } from "./paymentStyled";

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

    //No acceder a payment si no tiene productos en el carrito
    if (localStorage.getItem("cart")) {
      setLoading(false)
    } else {
      navigate('/home')
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
          <Loading/>
        </>
      ) : (
        <>
          <Header isUsedPayment={UserPage} />
          <FormUserPayment />
          <FooterUser />
        </>
      )}
    </Div>
  );
}

export default UserPage;