import React from 'react';

const CornerImage = ({ isOpen }) => {
    const reading = './FWMC1.png'
    const notReading = './FWMC2.png'
  return (
    <img 
      src={isOpen ? notReading : reading} 
      alt="Corner" 
      style={{ 
        position: 'fixed', 
        bottom: '0', 
        right: '0', 
        width: '20%', 
        height: 'auto', 
        zIndex: 3
      }} 
    />
  );
};

export default CornerImage;
