import React from 'react';
import './ImageOverlay.css'; // Import the CSS file

const ImageOverlay = ({ children, overlaySrc }) => {
    return (
        <div className="overlay-container">
            {children}
            <img className="overlay-image" src={overlaySrc} alt="Overlay" />
        </div>
    );
};

export default ImageOverlay;
