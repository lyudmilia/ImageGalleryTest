import React, { useState } from "react";
import Masonry from "react-responsive-masonry";
import withZoomPan from "./withZoomPan";
import ImageOverlay from "./ImageOverlay";
import images from "./Images";
import CornerImage from "./CornerImage";
import GalleryImage from "./GalleryImage";
import GalleryModal from "./GalleryModal";
import "react-lazy-load-image-component/src/effects/blur.css";

const ReactImageGallery = () => {
  const ZoomPanMasonry = withZoomPan(Masonry);
  // eslint-disable-next-line
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

  return (
    <div className="div2">
      <ZoomPanMasonry columnsCount={13} gutter="0px">
        {images.map((image, i) => (
          <ImageOverlay overlaySrc={overlayImages[i % overlayImages.length]}>
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
    </div>
  );
};

export default ReactImageGallery;
