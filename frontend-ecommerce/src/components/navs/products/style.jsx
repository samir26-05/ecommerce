import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  .BoxxImag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      object-fit: contain;
      width: 50vw;
      height: 60vh;
    }
  }
`;

export const Title = styled.h4`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 48.5%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 30px 10px;
  font-size: 18px;
  color: #333;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover,
  &:focus {
    border-color: #000000;
    box-shadow: 0 0 5px rgba(60, 60, 61, 0.5);
  }
`;

export const SubmitButton = styled.input`
  width: 100%;
  background: #1f53c5;
  border: none;
  padding: 12px;
  color: white;
  margin: 16px 0;
  font-size: 21px;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.6s ease;
    text-decoration: none;
  }
  &:focus {
    transform: scale(1.1);
    transition: transform 0.6s ease;
    text-decoration: none;
  }
`;

export const AdditionalText = styled.p`
  text-align: center;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: black;
      text-decoration: none;
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
    }
  }
`;

export const IconContainer = styled.nav`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const IconLink = styled.a`
  margin: 0 20px;
  transition: all 0.4s ease-in-out;
`;
