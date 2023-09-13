import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
/* COMPONENTS */
import Body from "../../components/Layout/body/Body";
import { Div } from "./HomeStyled";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      console.log(jwt_decode(localStorage.getItem("accessToken")), "❤❤❤❤");
      setLoading(false);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Div>
      {loading ? (
        <>
          <h1>Cargando......</h1>
        </>
      ) : (
        <Body />
      )}
    </Div>
  );
};

export default HomePage;
