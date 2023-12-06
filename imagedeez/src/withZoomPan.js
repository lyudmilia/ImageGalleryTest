import React, { useRef, useState } from 'react';

const withZoomPan = (WrappedComponent) => {
    return (props) => {
        const wrapperRef = useRef();
        const [wrapperState, setWrapperState] = useState({
            scale: 1,
            translateX: 0,
            translateY: 0,
        });

        const handleWheel = (e) => {
            e.preventDefault();
            const newScale = wrapperState.scale + e.deltaY * -0.01;
            setWrapperState((prevState) => ({
                ...prevState,
                scale: newScale < 1 ? 1 : newScale,
            }));
        };

        const handleMouseDown = (e) => {
            e.preventDefault();
            wrapperRef.current.style.cursor = 'grabbing';
            setWrapperState((prevState) => ({
                ...prevState,
                isDragging: true,
                initialX: e.clientX - prevState.translateX,
                initialY: e.clientY - prevState.translateY,
            }));
        };

        const handleMouseMove = (e) => {
            e.preventDefault();
            if (wrapperState.isDragging) {
                setWrapperState((prevState) => ({
                    ...prevState,
                    translateX: e.clientX - prevState.initialX,
                    translateY: e.clientY - prevState.initialY,
                }));
            }
        };

        const handleMouseUp = (e) => {
            e.preventDefault();
            wrapperRef.current.style.cursor = 'grab';
            setWrapperState((prevState) => ({
                ...prevState,
                isDragging: false,
            }));
        };

        return (
            <div
                ref={wrapperRef}
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                    transform: `translate(${wrapperState.translateX}px, ${wrapperState.translateY}px) scale(${wrapperState.scale})`,
                    cursor: 'grab',
                    transition: 'transform 0.3s ease',
                }}
            >
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withZoomPan;
