import React, { useState } from 'react';
import { galleryItem } from '../../images';
import './galleryMobile.css';

const GalleryMobile = () => {
  const [activePicture, setActivePicture] = useState(galleryItem[0]);
  
  const nextPicture = () => {
    const currentIndex = galleryItem.findIndex(item => item.id === activePicture.id);
    const nextIndex = (currentIndex + 1) % galleryItem.length;
    setActivePicture(galleryItem[nextIndex]);
  }
  const prevPicture = () => {
    const currentIndex = galleryItem.findIndex(item => item.id === activePicture.id);
    const prevIndex = (currentIndex - 1 + galleryItem.length) % galleryItem.length; 
    setActivePicture(galleryItem[prevIndex]);
  }
  return (
    <div className='galleryMobile'>
      <div className="galleryMobile__arrow galleryMobile__arrow-left" onClick={prevPicture}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
      </div>

      <img src={activePicture.product} alt="product" className='galleryMobile__item'/>
      
      <div className="galleryMobile__arrow galleryMobile__arrow-right" onClick={nextPicture}>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
      </div>
    </div>
  );
};

export default GalleryMobile;