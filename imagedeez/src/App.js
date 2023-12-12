import ReactImageGallery from "./ReactImageGallery";
import Title from "./Title";
import Footer from "./Footer";
import "./App.css";
import MusicPlayer from "./MusicPlayer";
import MusicPrompt from "./MusicPrompt";
import React, { useState } from "react";


function App() {
  const [playMusic, setPlayMusic] = useState(false);
  const [promptAnswered, setPromptAnswered] = useState(false);
  
  const backgroundImage = '/BGPNG.png'
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
      height: "100vh",
      width: "100vw"
    }}>
      <Title />
      <MusicPlayer />
      <div>
        {!promptAnswered && (
          <MusicPrompt onAccept={handleAccept} onDecline={handleDecline} />
        )}
        {promptAnswered && <MusicPlayer playMusic={playMusic} />}
      </div>
      <ReactImageGallery />
      <Footer />
    </div>
  );
}

export default App;
