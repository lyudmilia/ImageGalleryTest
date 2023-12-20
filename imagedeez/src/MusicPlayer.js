import React, { useState, useEffect, useRef } from 'react';

function MusicPlayer({ playMusic }) {
  const [volume, setVolume] = useState(0.5);  // Sets the initial volume to 50%
  const [isPlaying, setIsPlaying] = useState(playMusic);
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
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="music-player">
      <img src={isPlaying ? "buttons/paws.png" : "buttons/play.png"} alt="Play/Pause" onClick={handlePausePlayClick} className="play-pause-image" />
      <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="volume-slider" />
      <audio ref={audioRef} autoPlay={playMusic} loop src="bgm.ogg" />
    </div>
  );
}

export default MusicPlayer;
