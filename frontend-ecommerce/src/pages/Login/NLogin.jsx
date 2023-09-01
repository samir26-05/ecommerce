import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { getInitColorSchemeScript } from '@mui/material'

const NLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate()
const loginn = async(event) => {
  event.preventDefault();
    try {
    const response = await axios.post("http://localhost:3000/user/login",{
      email:email,
      password:password,
    })
    console.log(response)
    sessionStorage.setItem("accessToken",response.data);
    navigate('/user')

    } catch (error) {
      console.error(error)
      alert(error.response.data.message)
    }
  }

    return (
        <div>
        <input
          type="text"
          name='email'
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }} placeholder="Ingrese su email" 
        />
  
        <input
          type="password"
          name="password"
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }} placeholder="Ingrese su contraseña"
        />
  
        <button style={{ color: "#fff" }} onClick={loginn}>
          Ingresar
        </button>
      </div> 
    )
}

export default NLogin
