import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ananthmkashyap" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ananth-m-kashyap-a1bbb2189/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built using <a href="https://github.com/ananthmkashyap/my-portfolio" target="_blank" rel="noreferrer">Yuji Sato's template</a></p>
    </footer>
  );
}

export default Footer;