import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import AutoPlay from "../../components/Layout/body/carrusel/AutoPlay";
import {
  MainDiv,
  Section1,
  Section2,
  LoginBox,
  LoginBoxInput,
  BoxButton,
  BoxLink,
  Redes,
  Error,
} from "./RegisterStyled";
import Swal from "sweetalert2";
const urlBackend = import.meta.env.VITE_BACKEND_URL;

const RegisterLogin = () => {
  const vista = "register";
  const initialValues = {
    user: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post(`${urlBackend}/user`, data)
      .then((response) => {
        const successMessage = response.data.message;
        Swal.fire({
          icon: "success",
          title: "Registro Exitoso",
          text: successMessage,
          confirmButtonColor: "#000000",
          showConfirmButton: false,
          timer: 1000,
          iconColor: "#09ff00",
          color: "#000",
        });
        navigate("/");
      })
      .catch((error) => {
        const messageError1 = error.response.data.error[0].message;
        const messageError2 = error.response.data.error[0].message;
        Swal.fire({
          icon: "error",
          title: messageError1,
          confirmButtonColor: "#000000",
          iconColor: "#ff0000",
          color: "#000",
          timer: 2000,
          showConfirmButton: false,
        });
        Swal.fire({
          icon: "error",
          title: messageError2,
          confirmButtonColor: "#000000",
          iconColor: "#ff0000",
          color: "#000",
          timer: 2000,
          showConfirmButton: false,
        });
      });
  };

  const validationSchema = Yup.object().shape({
    user: Yup.string()
      .min(3, "El usuario debe tener al menos 3 caracteres")
      .max(15, "El usuario debe tener un máximo de 15 caracteres")
      .required("Debes ingresar un nombre de usuario *"),
    nombre: Yup.string()
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .max(15, "El nombre debe tener un máximo de 15 caracteres")
      .required("Debes ingresar un nombre valido *"),
    apellido: Yup.string()
      .min(3, "El apellido debe tener al menos 3 caracteres")
      .max(15, "El apellido debe tener un máximo de 15 caracteres")
      .required("Debes ingresar un apellido *"),
    email: Yup.string()
      .email("Debe ser un email válido *")
      .required("Debes ingresar un email *"),
    password: Yup.string()
      .min(4, "La contraseña debe tener al menos 4 caracteres")
      .max(15, "La contraseña debe tener un máximo de 15 caracteres")
      .required("Debes ingresar una contraseña *"),
  });

  return (
    <MainDiv>
      <Section1>
        <LoginBox>
          <p className="LoginBoxTiltle">REGISTER</p>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form
              style={{
                gap: "2.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <LoginBoxInput>
                <Field name="nombre" required />
                <Error>
                  <ErrorMessage name="nombre" component="div" />
                </Error>
                <label>Nombre</label>
              </LoginBoxInput>
              <LoginBoxInput>
                <Field name="apellido" required />
                <Error>
                  <ErrorMessage name="apellido" component="div" />
                </Error>
                <label>Apellido</label>
              </LoginBoxInput>
              <LoginBoxInput>
                <Field name="user" className="form-style" required />
                <Error>
                  <ErrorMessage name="user" component="div" />
                </Error>
                <label>Usuario</label>
              </LoginBoxInput>
              <LoginBoxInput>
                <Field name="email" required />
                <Error>
                  <ErrorMessage name="email" component="div" />
                </Error>
                <label>Email</label>
              </LoginBoxInput>
              <LoginBoxInput>
                <Field name="password" type="password" required />
                <Error>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="err"
                  />
                </Error>
                <label>Contraseña</label>
              </LoginBoxInput>
              <BoxButton>
                <button type="submit" className="ButtonRegistrar">
                  <a>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Registrar
                  </a>
                </button>
              </BoxButton>
            </Form>
          </Formik>
          <BoxLink>
            <p className="a1">
              ¿Ya tienes cuenta?
              <Link to={"/"}>
                ¡Inicia Sesion!
              </Link>
            </p>
          </BoxLink>
          <Redes>
            <ul className="socail-media">
              <li>
                <a href="#">
                  <svg
                    viewBox="0 0 10.712 20"
                    height="20"
                    width="10.712"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      transform="translate(-22.89)"
                      d="M32.9,11.25l.555-3.62H29.982V5.282a1.81,1.81,0,0,1,2.041-1.955H33.6V.245A19.255,19.255,0,0,0,30.8,0c-2.86,0-4.73,1.734-4.73,4.872V7.63H22.89v3.62h3.179V20h3.913V11.25Z"
                      id="facebook"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#">
                  <svg
                    viewBox="0 0 20 20"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    id="instagram"
                  >
                    <g
                      transform="translate(15.354 3.707)"
                      data-name="Group 64"
                      id="Group_64"
                    >
                      <g data-name="Group 63" id="Group_63">
                        <path
                          fill="#00"
                          transform="translate(-392.401 -94.739)"
                          d="M392.871,94.739a.47.47,0,1,0,.47.47A.47.47,0,0,0,392.871,94.739Z"
                          data-name="Path 5"
                          id="Path_5"
                        ></path>
                      </g>
                    </g>
                    <g
                      transform="translate(5.837 5.837)"
                      data-name="Group 66"
                      id="Group_66"
                    >
                      <g data-name="Group 65" id="Group_65">
                        <path
                          fill="#000"
                          transform="translate(-145.804 -145.804)"
                          d="M149.967,145.8a4.163,4.163,0,1,0,4.163,4.163A4.168,4.168,0,0,0,149.967,145.8Z"
                          data-name="Path 6"
                          id="Path_6"
                        ></path>
                      </g>
                    </g>
                    <g data-name="Group 68" id="Group_68">
                      <g data-name="Group 67" id="Group_67">
                        <path
                          fill="#000"
                          d="M14.517,0H5.483A5.489,5.489,0,0,0,0,5.483v9.035A5.489,5.489,0,0,0,5.483,20h9.035A5.489,5.489,0,0,0,20,14.517V5.483A5.489,5.489,0,0,0,14.517,0ZM10,15.486A5.486,5.486,0,1,1,15.486,10,5.492,5.492,0,0,1,10,15.486Zm5.814-9.633A1.667,1.667,0,1,1,17.48,4.186,1.669,1.669,0,0,1,15.814,5.853Z"
                          data-name="Path 7"
                          id="Path_7"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#">
                  <svg
                    viewBox="0 0 19.738 22.466"
                    height="22.466"
                    width="19.738"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Group 101"
                    id="Group_101"
                  >
                    <path
                      fill="#000"
                      transform="translate(-31.423 -0.39)"
                      d="M51.151,6.015a5.661,5.661,0,0,1-3.42-1.143A5.662,5.662,0,0,1,45.469.39H41.8V10.414l0,5.49a3.325,3.325,0,1,1-2.281-3.151V9.029a7.218,7.218,0,0,0-1.058-.078,7.034,7.034,0,0,0-5.286,2.364,6.893,6.893,0,0,0,.311,9.505,7.158,7.158,0,0,0,.663.579,7.035,7.035,0,0,0,4.312,1.458,7.219,7.219,0,0,0,1.058-.078,7.011,7.011,0,0,0,3.917-1.959,6.868,6.868,0,0,0,2.06-4.887l-.019-8.2a9.3,9.3,0,0,0,5.688,1.933V6.014h-.011Z"
                      data-name="Path 6566"
                      id="Path_6566"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a href="#">
                  <svg
                    viewBox="0 0 23.06 18"
                    height="18"
                    width="23.06"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000"
                      transform="translate(0 -48.082)"
                      d="M20.69,52.568c.015.2.015.394.015.591A13.085,13.085,0,0,1,7.258,66.082,13.752,13.752,0,0,1,0,64.043a10.168,10.168,0,0,0,1.141.056,9.712,9.712,0,0,0,5.868-1.941,4.715,4.715,0,0,1-4.419-3.15,6.2,6.2,0,0,0,.893.07,5.189,5.189,0,0,0,1.244-.155,4.592,4.592,0,0,1-3.79-4.458V54.41a4.907,4.907,0,0,0,2.136.577A4.5,4.5,0,0,1,.966,51.2a4.375,4.375,0,0,1,.644-2.292,13.621,13.621,0,0,0,9.745,4.753,4.936,4.936,0,0,1-.117-1.041,4.635,4.635,0,0,1,4.726-4.542,4.806,4.806,0,0,1,3.453,1.434,9.538,9.538,0,0,0,3-1.1,4.567,4.567,0,0,1-2.078,2.5,9.779,9.779,0,0,0,2.722-.7A9.953,9.953,0,0,1,20.69,52.568Z"
                      id="twitter"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </Redes>
        </LoginBox>
      </Section1>
      <Section2>
        <AutoPlay/>
      </Section2>
    </MainDiv>
  );
};

export default RegisterLogin;
