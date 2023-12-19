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
        <button onClick={onPrevious}>Previous</button>
        <img
          src={image.src}
          style={{ width: "30%", height: "auto" }}
        />
        <button onClick={onNext}>Next</button>
      </div>
      <div class="desc">{image.description}</div>
      
      <div class="auth">FROM - {image.author}</div>
    </Modal>
  );
}

export default GalleryModal;
