import React, { useState } from 'react';

// This component will prompt the user to play music
function MusicPrompt({ onAccept, onDecline }) {
    return (
      <div className="music-prompt">
        <p>Would you like to listen to the site's background music?</p>
        <button onClick={onAccept}>Yes</button>
        <button onClick={onDecline}>No</button>
      </div>
    );
  }
  
export default MusicPrompt;
