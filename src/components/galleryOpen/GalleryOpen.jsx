import React, { useState } from 'react';
import'./galleryOpen.css';
import { galleryItem, rowGallery } from '../../images';
import GalleryItem from '../galleryItem/GalleryItem';

const GalleryOpen = ({isOpened, openGallery, currentPictureId}) => {
  const [activePicture, setActivePicture] = useState(galleryItem[currentPictureId]);
  
  const changePicture = (id) => {
    let activeImg = galleryItem.find(item => item.id === id);
    setActivePicture(activeImg);
  }

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
    isOpened &&
    <>
      <div className="overlay" onClick={openGallery}></div>
      <div className='galleryOpen'>
        <div className="galleryOpen__wrapper">
          <div className="closeBtn" onClick={openGallery}>
            <svg width="20" height="21" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>
          </div>
          <div className="arrow left" onClick={prevPicture}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
          </div>
          <div className="galleryOpen__img">
            <img src={activePicture.product} alt="product" />
          </div>
          <div className="arrow right" onClick={nextPicture}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
          </div>
        </div>

        <div className="rowImages">
          {rowGallery.map((image) => {
            return <GalleryItem 
              key={image.id} 
              id={image.id}
              path={image.product} 
              clickHandle={changePicture}
              isActive={activePicture.id === image.id}
            />
          })}
        </div>
      </div>
    </>
  );
};

export default GalleryOpen;