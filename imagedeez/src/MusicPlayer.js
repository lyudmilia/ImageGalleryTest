import React, { useState, useEffect, useRef } from 'react';

function MusicPlayer({ playMusic }) {
  const [volume, setVolume] = useState(0.5);  // Sets the initial volume to 50%
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    audioRef.current.volume = volume;
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
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
      <audio ref={audioRef} autoPlay={playMusic} loop src="bgm.ogg" />
    </div>
  );
}

export default MusicPlayer;
