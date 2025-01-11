import React from 'react';
import './galleryItem.css'


const GalleryItem = (props) => {
  
  const handleClick = () => {
    props.clickHandle(props.id);
  }
  return (
    <div className={`galleryItem ${props.isActive ? 'active' : ''}`} onClick={handleClick}>
      <img src={props.path} alt="product" />
    </div>
  );
};

export default GalleryItem;