import Modal from "react-modal";

function GalleryModal({ isOpen, onRequestClose, image, onNext, onPrevious }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          width: "50%",
          height: "50%",
          margin: "auto",
          position: "relative",
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
        <img  
          style={{ cursor: "pointer", width: "10%", height: "auto" }}
          src="buttons/prev.png" 
          onClick={onPrevious} 
          alt="Previous"
        />
        <img
          src={image.src}
          style={{ width: "30%", height: "auto" }}
        />
        <img 
          style={{ cursor: "pointer", width: "10%", height: "auto" }}
          src="buttons/next.png" 
          onClick={onNext} 
          alt="Next" 
        />
      </div>
      <div class="desc">{image.description}</div>
      
      <div class="auth">FROM - {image.author}</div>
    </Modal>
  );
}

export default GalleryModal;
