import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description'; 
import '../assets/styles/Footer.scss'

function Footer( props: {mode: string} ) {
  return (
    <footer>
      <div>
        <a href="https://github.com/AbhinavK02" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/abhinav-kothari-2ak" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="/cv_en.pdf" target="_blank" rel="noreferrer" title="Download English CV" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <DescriptionIcon style={{ marginRight: '5px', color: props.mode === 'dark' ? '#ffffff' : '#000000' }}/> 
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '1px', color: props.mode === 'dark' ? '#ffffff' : '#000000' }}>EN</span>
            </a>
            <a href="/cv_de.pdf" target="_blank" rel="noreferrer" title="Download German CV" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <DescriptionIcon style={{ marginLeft: '5px', marginRight: '5px', color: props.mode === 'dark' ? '#ffffff' : '#000000' }}/> 
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', marginLeft: '1px', color: props.mode === 'dark' ? '#ffffff' : '#000000' }}>DE</span>
            </a>
      </div>
      <p>© 2026 <a href="https://github.com/AbhinavK02" target="_blank" rel="noreferrer">Abhinav Kothari</a>. All rights reserved.</p>
    </footer>
  );
}

export default Footer;