import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="avatar.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AbhinavK02" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abhinav-kothari-2ak" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Abhinav Kothari</h1>
          <p>Mechatronics Systems Engineering Bachelors Student</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AbhinavK02" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abhinav-kothari-2ak" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;