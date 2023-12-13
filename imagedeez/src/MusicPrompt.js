import React, { useState } from 'react';

function MusicPrompt({ onAccept, onDecline }) {
    return (
      <div className="music-prompt">
        <div className="prompt-box">
          <p>Would you like to listen to the site's background music?</p>
          <button onClick={onAccept}>Yes</button>
          <button onClick={onDecline}>No</button>
        </div>
      </div>
    );
}

export default MusicPrompt;
