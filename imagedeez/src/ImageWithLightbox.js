import React, { useState } from 'react';
import Modal from 'react-modal';

const ImageWithLightbox = ({ src, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <img src={src} onClick={handleOpen} />
            <Modal isOpen={isOpen} onRequestClose={handleClose}>
                <img src={src} />
                <div>{description}</div>
            </Modal>
        </div>
    );
};

export default ImageWithLightbox;
