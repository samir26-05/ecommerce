import { useState } from "react";
import axios from "axios";

//login
import { useNavigate } from "react-router-dom";
//..

//register
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
//...

/* import NLogin from "./NLogin";
import RegisterLogin from "./RegisterLogin"; */

const LoginBody = () => {
  const [login, setLogin] = useState(true);

  const toggleLogin = () => {
    setLogin(!login);
    console.log(login);
  };

  //login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const loginn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email: email,
        password: password,
      });
      console.log(response);
      sessionStorage.setItem("accessToken", response.data);
      navigate("/user");
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    }
  };
  //.....

  //Register
  const initialValues = {
    user: "",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/user", data).then(() => {
      console.log(data);
      navigate("/login");
    });
  };

  const validationSchema = Yup.object().shape({
    user: Yup.string()
      .min(3)
      .max(15)
      .required("Debes ingresar un nombre de usuario"),
    nombre: Yup.string()
      .min(3)
      .max(15)
      .required("Debes ingresar un nombre valido"),
    apellido: Yup.string()
      .min(3)
      .max(15)
      .required("Debes ingresar un apellido"),
    email: Yup.string()
      .email("Debe ser un email válido")
      .required("Debes ingresar un email"),
    password: Yup.string()
      .min(4)
      .max(15)
      .required("Debes ingresar una contraseña"),
  });

  //......

  return (
    <div className="container_P">
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-style"
                              name="email"
                              required
                              onChange={(event) => {
                                setEmail(event.target.value);
                              }}
                              placeholder="Ingrese su email"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              className="form-style"
                              name="password"
                              required
                              onChange={(event) => {
                                setPassword(event.target.value);
                              }}
                              placeholder="Ingrese su contraseña"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="btn mt-4" onClick={loginn}>
                            Login
                          </button>
                          <p className="mb-0 mt-4 text-center">
                            <a
                              href="https://www.web-leb.com/code"
                              className="link"
                            >
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div> 
                    </div>

                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                          >
                            <Form>
                              <h4 className="mb-3 pb-3">Sign Up</h4>

                              <div className="form-group">
                                <Field
                                  placeholder="Ingrese su Usuario"
                                  name="user"
                                  className="form-style"
                                />
                                <i className="input-icon uil uil-user"></i>
                                <ErrorMessage name="user" component="div" />
                              </div>

                              <div className="form-group mt-2">
                                <Field
                                  className="form-style"
                                  placeholder="Ingrese su Nombre"
                                  name="nombre"
                                />
                                <i className="input-icon uil uil-phone"></i>
                                <ErrorMessage
                                  name="nombre"
                                  component="div"
                                  className="hola"
                                />
                              </div>

                              <div className="form-group mt-2">
                                <Field
                                  name="apellido"
                                  className="form-style"
                                  placeholder="Ingrese su apellido"
                                />
                                <i className="input-icon uil uil-at"></i>
                                <ErrorMessage name="apellido" component="div" />
                              </div>
                              <div className="form-group mt-2">
                                <Field
                                  name="email"
                                  className="form-style"
                                  placeholder="Ingrese su email"
                                />
                                <i className="input-icon uil uil-lock-alt"></i>
                                <ErrorMessage name="email" component="div" />
                              </div>
                              <div className="form-group mt-2">
                                <Field
                                  className="form-style"
                                  placeholder="Ingrese su contraseña"
                                  name="password"
                                  type="password"
                                />
                                <i className="input-icon uil uil-lock-alt"></i>
                                <ErrorMessage name="password" component="div" />
                              </div>
                              <button
                                type="submit"
                                onClick={toggleLogin}
                                className="btn mt-4"
                              >
                                Register
                              </button>
                            </Form>
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBody;

