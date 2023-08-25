import styled from 'styled-components';

export const LoginImg = styled.img`
  width: 100%;
`;

export const Span = styled.span`
  font-size: .8rem;
  font-weight: 600;
  color: #000;
  padding: 0 1rem;
  cursor: pointer;
`;

export const Btn = styled.button`
  width: 100%;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: #fff;
  background-color: #000;
  transition: all ease-in-out .2s;
  margin: 1.5rem 0;
  border-radius: 5px;
  &:hover{
    background-color: #4c4c4c;
  }
`;

export const SignInBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem 1.2rem;
  width: 20rem;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: .2px;
  box-shadow: 0px 3px 5px 0px #0000008b;
  background-color: ${({ bgcolor }) => bgcolor};
  cursor: pointer;
  svg{
    font-size: 2rem;
  }
  :nth-child(2){
    color: #000
  }
  
  `;

export const Login_Register = styled.div`
  cursor: pointer;
  text-align: center;
  width: 100%;
  padding: 2rem 0;
  background-color: #cbcbcb;
  font-weight: 600;
  :nth-child(${({ Page }) => Page ? 1 : 2}){
    background-color: #000;
    color: #fff;
  }
  
`;