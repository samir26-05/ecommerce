import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
/* COMPONENTS */
import Header from "../../components/Layout/header/Header";
import NavVertical from "../../components/navs/NavVertical";
/* styles */
import Footer from "../../components/Layout/footer/Footer";
import { Div, BoxLoading, BoxUser } from "./UserPageStyled";

const UserPage = () => {
  const [userEnterUser, setUserEnterUser] = useState(true);
  const [loading, setLoading] = useState(true);
  const verifyEnter = () => {
    return true;
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      console.log(jwt_decode(localStorage.getItem("accessToken")), "❤❤❤❤");
      setLoading(false);
    } else {
      navigate("/");
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
        <BoxLoading>
          <div className="loader" />
          <div className="LoadingTitle">
            <h1>Cargando...</h1>
            <div className="spinner center">
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
              <div className="spinner-blade"></div>
            </div>
          </div>
        </BoxLoading>
      ) : (
        <BoxUser>
          <div className="Header">
            <Header isUsedUser={userEnterUser} />
          </div>
          <div className="Nav">
            <div className="Main">
              <NavVertical />
            </div>
            <div className="Footer">
              <Footer />
            </div>
          </div>
        </BoxUser>
      )}
    </Div>
  );
};

export default UserPage;
