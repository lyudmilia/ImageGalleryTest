import React from 'react';

function MusicPrompt({ onAccept, onDecline }) {
    return (
      <div className="music-prompt">
        <div className="prompt-box">
          <p>Would you like to listen to the site's background music?</p>
          <div className="image-container"> 
            <img class="prompt-image" src="buttons/yes.png" alt="Yes" onClick={onAccept} />
            <img class="prompt-image" src="buttons/no.png" alt="No" onClick={onDecline} />
          </div>
        </div>
      </div>
    );
}

export default MusicPrompt;
