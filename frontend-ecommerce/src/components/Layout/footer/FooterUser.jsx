import { Typography} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Div, SocialIcon, } from "./FooterStyled";

const FooterUser = () => {

  return (
    <Div>
      <div className="Networks">
        <div>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
        </div>
      </div>
      <div className="Copyright">
        <Typography variant="body2">
          © {new Date().getFullYear()} KALARY. Todos los derechos
          reservados.
        </Typography>
      </div>
    </Div>
  );
};

export default FooterUser;
