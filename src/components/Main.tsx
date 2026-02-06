import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description'; 
import '../assets/styles/Main.scss';

function Main( props: {mode: string} ) {

  return (
    <div className={`container ${props.mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="about-section">
        <div className="image-wrapper">
          <img src="avatar.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AbhinavK02" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/abhinav-kothari-2ak" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="/cv_en.pdf" target="_blank" rel="noreferrer" title="Download English CV" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <DescriptionIcon style={{ marginRight: '3px', color: props.mode === 'dark' ? '#ffffff' : '#000000' }}/> 
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '1px', color: props.mode === 'dark' ? '#ffffff' : '#000000' }}>EN</span>
            </a>
            <a href="/cv_de.pdf" target="_blank" rel="noreferrer" title="Download German CV" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <DescriptionIcon style={{ marginRight: '3px', color: props.mode === 'dark' ? '#ffffff' : '#000000' }}/> 
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '1px', color: props.mode === 'dark' ? '#ffffff' : '#000000' }}>DE</span>
            </a>
          </div>
          <h1>Abhinav Kothari</h1>
          <p>Bachelors Student in Mechatronics Systems Engineering</p>

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