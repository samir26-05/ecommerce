import React, { useState } from 'react'
import axios from 'axios'

const NLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
const login = async(event) => {
  event.preventDefault();
    try {
    const response = await axios.post("http://localhost:3000/user/login",{
      email:email,
      password:password,
    })
    console.log(response)
    sessionStorage.setItem("accessToken",response.data)
    } catch (error) {
      console.error(error)
      alert(error.response.data.message)
    }
  }

    return (
        <div>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }} /* placeholder="Ingrese su email"  */
        />
  
        <input
          type="password"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }} /* placeholder="Ingrese su contraseña" */
        />
  
        <button style={{ color: "#fff" }} onClick={login}>
          Ingresar
        </button>
      </div> 
    )
}

export default NLogin
