import { Typography } from '@mui/material';
import {FaFacebookF, FaTwitter, FaGoogle, FaInstagram} from 'react-icons/fa'

export default function FooterUser() {
  return (
    <div className="" style={{width:"100%"}}>
      <footer className="bg-ligth text-center text-white" >
        {/* Grid container */}
        <div className="container p-3  pb-0">
          {/* Section: Social media */}
          <section>
            {/* Facebook */}
            <a className="btn-floating m-1" href="#!" role="button">
              <i className="white-icon"> <FaFacebookF/> </i>
            </a>

            {/* Twitter */}
            <a className="btn-floating m-1" href="#!" role="button">
              <i className="white-icon"><FaTwitter/></i>
            </a>

            {/* Google */}
            <a className="btn-floating m-1" href="#!" role="button">
              <i className="white-icon"><FaGoogle/></i>
            </a>

            {/* Instagram */}
            <a className="btn-floating m-1" href="#!" role="button">
              <i className="white-icon"><FaInstagram/></i>
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-1 text-white">
        <Typography variant="body2">
        <a className="text-dark" href="https://mdbootstrap.com/"  style={{color:"white"}}>  ©KALARY.com </a>
          {new Date().getFullYear()} 
        </Typography>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

