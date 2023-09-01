import React, { useState } from "react";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from "axios";

const RegisterLogin = () => {

  const initialValues = {
    user: "",
    nombre: "",
    apellido: "",
    email: "",
    password: ""
}

const onSubmit = (data) => {
    axios.post("http://localhost:3000/user", data).then(() => {
        console.log(data);
    })
}

const validationSchema = Yup.object().shape({
    user: Yup.string().min(3).max(15).required("Debes ingresar un nombre de usuario"),
    nombre: Yup.string().min(3).max(15).required("Debes ingresar un nombre valido"),
    apellido: Yup.string().min(3).max(15).required("Debes ingresar un apellido"),
    email: Yup.string().email("Debe ser un email válido").required("Debes ingresar un email"),
    password: Yup.string().min(4).max(15).required("Debes ingresar una contraseña"),
})

  return (

    <div>
            

    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
            <Field placeholder="Ingrese su Usuario" name="user"  className="form-style"/>
            <ErrorMessage name='user' component='div' />
            <Field placeholder="Ingrese su Nombre" name="nombre" />
            <ErrorMessage name='nombre' component='div' />
            <Field placeholder="Ingrese su apellido" name="apellido" />
            <ErrorMessage name='apellido' component='div' />
            <Field placeholder="Ingrese su email" name="email" />
            <ErrorMessage name='email' component='div' />
            <Field placeholder="Ingrese su contraseña" name="password" type="password" />
            <ErrorMessage name='password' component='div' />
            <button type="submit" style={{ color: '#fff' }}>Enviar Registro</button>
        </Form>
    </Formik>
</div>


  );
};

export default RegisterLogin;
