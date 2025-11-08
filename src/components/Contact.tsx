import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Let’s connect and collaborate!</p>
          <div className="contact_links">
            <a href="mailto:ananth.m.kashyap@gmail.com"><EmailIcon /></a>
            <a href="tel:+49-17660369975"><PhoneIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
