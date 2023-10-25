/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/* COMPONENTS */
import Header from "../../components/Layout/header/Header";
import NavVertical from "../../components/navs/NavVertical";
import FooterUser from "../../components/Layout/footer/FooterUser";
/* styles */
import { Div, BoxUser } from "./UserPageStyled";
import Loading from "../../components/loading/Loading";

const UserPage = () => {
  const [userEnterUser, setUserEnterUser] = useState(true);
  const [loading, setLoading] = useState(true);
  const verifyEnter = () => {
    return true;
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
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
        <Loading />
      ) : (
        <BoxUser>
          <Header isUsedUser={userEnterUser} />
          <NavVertical />
          <FooterUser />
        </BoxUser>
      )}
    </Div>
  );
};

export default UserPage;
