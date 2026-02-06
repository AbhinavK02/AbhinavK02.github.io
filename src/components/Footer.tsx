import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/AbhinavK02" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/abhinav-kothari-2ak" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© 2026 <a href="https://github.com/AbhinavK02" target="_blank" rel="noreferrer">Abhinav Kothari</a>. All rights reserved.</p>
    </footer>
  );
}

export default Footer;