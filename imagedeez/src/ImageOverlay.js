// ImageOverlay.js
import React from 'react';
import './ImageOverlay.css'; // Import the CSS file

const ImageOverlay = ({ children, overlaySrc, overlayOpacity }) => { // added overlayOpacity prop
    return (
        <div className="overlay-container">
            {children}
            <img className="overlay-image" src={overlaySrc} alt="Overlay" style={{opacity: overlayOpacity}} /> {/* use the passed prop here */}
        </div>
    );
};

export default ImageOverlay;
