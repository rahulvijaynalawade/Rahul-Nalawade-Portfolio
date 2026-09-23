import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Myphotoo from '../assets/images/my photo.png'         ;
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={Myphotoo}
            alt="Rahul Nalawade"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/rahulvijaynalawade"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/rahulnalawadea/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Rahul Nalawade</h1>

          <p>Java Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a
              href="YOUR_GITHUB_URL"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

