import styled from "styled-components";
import { Paper } from "@mui/material";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  .Content {
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .Networks {
    height: 50%;
    width: 100%;
    div {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
  .Copyright {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: .5%;
  }
  .Information {
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10%;
    }
    width: 20%;
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: center;
    line-height: 2rem;
    .Wh {
      background-color: antiquewhite;
    }

    h4 {
      letter-spacing: 1px;
      margin-bottom: 3%;
      text-align: start;
      width: 70%;
    }
    .Text {
      text-align: start;
      width: 70%;
      a {
        color: black;
        cursor: pointer;
      }
      a:hover {
        text-decoration: underline;
        color: black;
      }
    }

    .Bwh {
      @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 5%;
    }
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .Wh {
      background-color: transparent;
      border: 1px solid #25d366;
      position: relative;
      width: 70%;
      height: 2em;
      transition: 0.5s;
      font-size: 17px;
      border-radius: 0.4em;
    }

    .Wh p {
      position: absolute;
      top: -.1em;
      left: 1.15em;
      margin: 0;
      padding: 0;
      transition: 0.5s;
      color: #25d366;
    }

    .Wh svg {
      position: absolute;
      top: 0.45em;
      right: 0.5em;
      margin: 0;
      padding: 0;
      opacity: 1;
      transition: 0.5s;
      height: 1em;
      fill: #25d366;
    }

    .Wh:hover p {
      left: 0.5em;
      color: #fff;
    }

    .Wh:hover svg {
      opacity: 1;
      fill: #ffffff;
    }

    .Wh:hover {
      background-color: #25d366;
    }
  }
`;



export const FooterLink = styled.a`
  color: #000;
  text-transform: uppercase;
  text-align: left;
  font-size: 0.75rem;
  line-height: 1.95312rem;
  display: inline;
  position: relative;
  cursor: pointer;
  list-style: none;
  font-family: Whyte, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica,
    Arial, sans-serif;
  font-weight: 400;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SocialIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export const ModalContent = styled(Paper)`
  position: absolute;
  width: 300px;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
