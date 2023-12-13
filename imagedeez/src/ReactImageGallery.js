import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import withZoomPan from "./withZoomPan";
import Modal from "react-modal";
import ImageOverlay from "./ImageOverlay";
import images from "./Images";
import CornerImage from "./CornerImage";

const ReactImageGallery = () => {
  const ZoomPanMasonry = withZoomPan(Masonry);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleZoom = (image) => {
    image.clicked = true;
    setCurrentImage(image);
    const index = images.indexOf(image);
    setCurrentImageIndex(index);
    setIsOpen(true);
  };
  

  const handleClose = () => {
    setIsOpen(false);
  };

  let overlayImages = [];

  for (let i = 0; i < 144; i++) {
    overlayImages.push("split/part_" + i + ".png");
  }

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    images[nextIndex].clicked = true;
    setCurrentImageIndex(nextIndex);
  };
  
  const handlePrevious = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[prevIndex].clicked = true;
    setCurrentImageIndex(prevIndex);
  };
  return (
    <div className="div2">
      <ZoomPanMasonry columnsCount={16} gutter="0px">
        {images.map((image, i) => (
          <ImageOverlay overlaySrc={overlayImages[i % overlayImages.length]}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={image.src}
                style={{ width: "100%", display: "block" }}
                onClick={() => handleZoom(image)}
              />
              {image.clicked && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 255, 0, 0)",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "rgba(0, 255, 0, 0.5)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "rgba(0, 255, 0, 0)")
                  }
                />
              )}
            </div>
          </ImageOverlay>
        ))}
      </ZoomPanMasonry>

      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        style={{
          content: {
            width: "50%",
            height: "50%",
            margin: "auto",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button onClick={handlePrevious}>Previous</button>
          <img
            src={images[currentImageIndex].src}
            style={{ width: "30%", height: "auto" }}
          />
          <button onClick={handleNext}>Next</button>
        </div>
        <div>{images[currentImageIndex].description}</div>
      </Modal>
      <CornerImage isOpen={isOpen} />
    </div>
  );
};

export default ReactImageGallery;
