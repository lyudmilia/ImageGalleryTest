import React, { useState } from 'react';

// This component will play the music
function MusicPlayer({ playMusic }) {
    const audioRef = React.useRef();
  
    const handleVolumeChange = (event) => {
      audioRef.current.volume = event.target.value;
    };
  
    const handlePausePlayClick = () => {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    };
  
    return (
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <button onClick={handlePausePlayClick}>
          {audioRef.current && audioRef.current.paused ? 'Play' : 'Pause'}
        </button>
        <input type="range" min="0" max="1" step="0.01" onChange={handleVolumeChange} />
        <audio ref={audioRef} autoPlay={playMusic} loop src="placeholder.mp3" />
      </div>
    );
  }
  

export default MusicPlayer;
