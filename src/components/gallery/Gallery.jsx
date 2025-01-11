import React, { useEffect, useState } from 'react';
import {galleryItem, rowGallery} from '../../images';
import GalleryItem from '../galleryItem/GalleryItem';
import './gallery.css'
import GalleryOpen from '../galleryOpen/GalleryOpen';
import GalleryMobile from './GalleryMobile';

const Gallery = () => {
  const [activePicture, setActivePicture] = useState(galleryItem[0]);
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changePicture = (id) => {
    let activeImg = galleryItem.find(item => item.id === id);
    setActivePicture(activeImg);
  }

  const openGallery = () => {
    setIsOpenGallery(!isOpenGallery);
  }

  return (
    <div className='gallery'>
      {windowWidth <= 549 
        ? <GalleryMobile/> 
        : (<div className="gallery__img" onClick={openGallery}>
            <img src={activePicture.product} alt="product" />
          </div>)
      }
      <div className="rowImages">
        {rowGallery.map((image) => {
          return <GalleryItem 
            key={image.id} 
            id={image.id}
            path={image.product} 
            clickHandle={changePicture}
            isActive={activePicture.id === image.id}
            openGallery={openGallery}
          />
        })}
      </div>
        {(windowWidth > 768 && isOpenGallery) && <GalleryOpen
          currentPictureId={galleryItem.findIndex(item => item.id === activePicture.id)}
          isOpened={isOpenGallery} 
          openGallery={openGallery}
          />
        }
    </div>
  );
};

export default Gallery;