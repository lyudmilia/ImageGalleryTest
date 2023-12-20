import React from 'react';



const CornerImage = ({ isOpen }) => {
    const reading = './FWMC1.png'
    const notReading = './FWMC2.png'
    const fuwahallo = new Audio("/Fuwa_Hallo.mp3");
    const mocosneeze = new Audio("/mocosneeze100.mp3");

    const handleClick = (event) => {
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left; 
      if (x < rect.width / 2) {
        mocosneeze.play();
        console.log("sneeze should play!")
      } else {
        fuwahallo.play();
        console.log("hallo should play!")
      }
    }
    

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
      onClick={handleClick}
    />
  );
};

export default CornerImage;
