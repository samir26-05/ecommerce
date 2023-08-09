import styled from 'styled-components';
import { Paper } from '@mui/material';

export const FooterLink = styled.a`
  color: #000;
  text-transform: uppercase;
  text-align: left;
  font-size: .75rem;
  line-height: 1.95312rem;
  display: inline;
  position: relative;
  cursor: pointer;
  list-style: none;
  font-family: Whyte,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
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
