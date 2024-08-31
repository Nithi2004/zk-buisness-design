import React from 'react';

function ImageComponent({ src }) {
  return (
    <div className="image-wrapper">
      <img src={src} alt="Custom" className="custom-image" />
    </div>
  );
}

export default ImageComponent;
