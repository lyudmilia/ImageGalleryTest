import ReactImageGallery from "./ReactImageGallery";
import Title from "./Title";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import MusicPrompt from "./MusicPrompt";
import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import "./App.css";

function App() {
  const [playMusic, setPlayMusic] = useState(false);
  const [promptAnswered, setPromptAnswered] = useState(false);
  
  const backgroundImage = '/BGJPG.jpg'
  const handleAccept = () => {
    setPlayMusic(true);
    setPromptAnswered(true);
  };

  const handleDecline = () => {
    setPlayMusic(false);
    setPromptAnswered(true);
  };
  return (
    <div className="container" 
      style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "200vh",
      width: "100vw"
    }}>
      <ToastContainer />
      {!promptAnswered ? (
        <MusicPrompt onAccept={handleAccept} onDecline={handleDecline} />
      ) : (
        <MusicPlayer playMusic={playMusic} />
      )}
      <Title />
      <ReactImageGallery />
      <Footer />
    </div>
  );
}

export default App;
