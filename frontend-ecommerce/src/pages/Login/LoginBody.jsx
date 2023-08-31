import React from 'react'
import NLogin from './NLogin'
import RegisterLogin from './RegisterLogin'
import { DivP } from './Styled'
const LoginBody = () => {
  return (
    <DivP>
        <NLogin/>

        <RegisterLogin/>
    </DivP>
  )
}

export default LoginBody