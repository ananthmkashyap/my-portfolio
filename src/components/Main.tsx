import React , {useRef} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/profile_pic.png';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import nameAudio from '../assets/audio/Recording.mp3';
import { profile } from "console";

function Main() {

  const audioRef = useRef(new Audio(nameAudio));

  const playAudio = () => {
    // Rewind and play your name pronunciation
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" />
          <button
                onClick={playAudio}
                aria-label="Play Name Prnounciation"
                className="speaker-button">
                <VolumeUpIcon fontSize="inherit" />
          </button>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ananthmkashyap" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ananth-m-kashyap-a1bbb2189/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ananth Mahesh Kashyap</h1>
          <p>Cloud & DevOps Engineer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/ananthmkashyap" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ananth-m-kashyap-a1bbb2189/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;