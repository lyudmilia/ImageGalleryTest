import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import { createClient } from "@supabase/supabase-js";
import withZoomPan from "./withZoomPan";
import Modal from "react-modal";
import ImageOverlay from "./ImageOverlay";

// const supabaseAdmin = createClient(
//   process.env.REACT_APP_SUPABASE_URL || "",
//   process.env.REACT_APP_SUPABASE_ANON_KEY || ""
// );

const images = [
  {
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },
  {
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },{
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },{
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },{
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },{
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },{
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },{
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },
  {
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },
  {
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },
  {
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },
  {
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },
  {
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },
  {
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },
  {
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },
  {
    src: "1.PNG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum ex quis rhoncus lacinia. Nam porttitor tempus elit, quis tristique arcu vestibulum vel. Nulla sollicitudin fermentum nisl, sed pellentesque elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse fringilla vel dolor in gravida. Sed suscipit suscipit urna sit amet volutpat. Pellentesque ut euismod lectus. Maecenas a massa quis ex fringilla pretium. Phasellus eget lorem sem. Suspendisse potenti. ",
  },
  { src: "2.PNG", description: "Sample 2" },
  { src: "3.PNG", description: "Sample 1" },
  { src: "4.PNG", description: "Sample 2" },
  { src: "5.PNG", description: "Sample 1" },
  { src: "6.PNG", description: "Sample 2" },
  { src: "7.PNG", description: "Sample 1" },
  { src: "8.PNG", description: "Sample 2" },
  { src: "9.PNG", description: "Sample 1" },
].map((image) => ({ ...image, clicked: false }));

const ReactImageGallery = () => {

  const ZoomPanMasonry = withZoomPan(Masonry);



  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleZoom = (image) => {
    image.clicked = true;
    setCurrentImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  
  let overlayImages = [];

  for (let i = 0; i < 144; i++) {
      overlayImages.push('split/part_' + i + '.png');
  }

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
                    backgroundColor: "rgba(0, 255, 0, 0)", // Green overlay
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "rgba(0, 255, 0, 0.5)")
                  } // Green overlay on hover
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "rgba(0, 255, 0, 0)")
                  } // Transparent overlay when not hovered
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
        <img src={currentImage.src} style={{ width: "30%", height: "auto" }} />
        <div>{currentImage.description}</div>
      </Modal>
    </div>
  );
};

export default ReactImageGallery;
