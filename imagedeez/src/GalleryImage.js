import { LazyLoadImage } from "react-lazy-load-image-component";

function GalleryImage({ image, onZoom }) {

    const handleClick = () => {
      image.clicked = true;
      onZoom(image);
    };
  
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <LazyLoadImage
          src={image.src}
          effect="blur"
          style={{ width: "100%", display: "block" }}
          onClick={handleClick}
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
    );
  }

  export default GalleryImage;