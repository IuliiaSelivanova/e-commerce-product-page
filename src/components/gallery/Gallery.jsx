import React, { useState } from 'react';
import {galleryItem, rowGallery} from '../../images';
import GalleryItem from '../galleryItem/GalleryItem';
import './gallery.css'

const Gallery = () => {
  const [activePicture, setActivePicture] = useState(galleryItem[0]);
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  
  const changePicture = (id) => {
    let activeImg = galleryItem.find(item => item.id === id);
    setActivePicture(activeImg);
  }

  const openGallery = () => {
    console.log('opened')
  }

  return (
    <div className='gallery'>
      <div className="card__img" onClick={openGallery}>
        <img src={activePicture.product} alt="product" />
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
  );
};

export default Gallery;