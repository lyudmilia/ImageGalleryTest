import React, { useState } from "react";
import Masonry from "react-responsive-masonry";
import withZoomPan from "./withZoomPan";
import ImageOverlay from "./ImageOverlay";
import images from "./Images";
import CornerImage from "./CornerImage";
import GalleryImage from "./GalleryImage";
import GalleryModal from "./GalleryModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const ReactImageGallery = () => {
  const ZoomPanMasonry = withZoomPan(Masonry);
  // eslint-disable-next-line
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0.75);
  const fuwahallo = new Audio("/Fuwa_Hallo.mp3");
  const mocosneeze = new Audio("/mocosneeze100.mp3");

  const handleZoom = (image) => {
    image.clicked = true;
    setCurrentImage(image);
    const index = images.indexOf(image);
    setCurrentImageIndex(index);
    setIsOpen(true);

    const sound = index % 2 === 0 ? fuwahallo : mocosneeze ;
    sound.play();
  };


  const handleClose = () => {
    setIsOpen(false);
  };

  let overlayImages = [];

  for (let i = 0; i < 208; i++) {
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

  const handleOverlayOpacity = () => {
    setOverlayOpacity((prevOpacity) => (prevOpacity === 1 ? 0.75 : 1)); // toggle between 1 and 0.75
  };

  const resetImages = () => {
    images.forEach((image) => {
      image.clicked = false;
    });
    setCurrentImage(images[0]);
    setCurrentImageIndex(0);
    toast.success("Every image has been reset.");
  };

  return (
    <div className="div2">
      <ZoomPanMasonry columnsCount={13} gutter="0px">
        {images.map((image, i) => (
          <ImageOverlay
            overlaySrc={overlayImages[i % overlayImages.length]}
            overlayOpacity={overlayOpacity}
          >
            <GalleryImage image={image} onZoom={handleZoom} />
          </ImageOverlay>
        ))}
      </ZoomPanMasonry>

      <GalleryModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        image={images[currentImageIndex]}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
      <CornerImage isOpen={isOpen} />
      <div className="button-container">
        <img
          className="galleryButtons left-button"
          src={
            overlayOpacity === 1 ? "buttons/mosaic.png" : "buttons/fullimg.png"
          }
          onClick={handleOverlayOpacity}
          alt={
            overlayOpacity === 1
              ? "Set Overlay Opacity to 75%"
              : "Set Overlay Opacity to 100%"
          }
        />
        <img
          className="galleryButtons right-button"
          src="buttons/reset.png"
          onClick={resetImages}
        />
      </div>
    </div>
  );
};

export default ReactImageGallery;
