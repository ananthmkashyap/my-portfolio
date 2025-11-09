import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <h4>Ananth Mahesh Kashyap</h4>
        <h5>Cloud & DevOps Engineer</h5>
        <a href="https://github.com/ananthmkashyap" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ananth-m-kashyap-a1bbb2189/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:ananth.m.kashyap@gmail.com"><EmailIcon /></a>
        <a href="tel:+49-17660369975"><PhoneIcon /></a>
      </div>
    </footer>
  );
}

export default Footer;

