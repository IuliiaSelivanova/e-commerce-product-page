import React from 'react';
import IMAGES from '../../images';

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="image__wrapper">
        <div className="card__img">
          <img src={IMAGES.product1} alt="product" />
        </div>

        <div className="rowImages">
          <div className="imageItem active">
            <img src={IMAGES.productThumbnail1} alt="product" />
          </div>
          <div className="imageItem">
            <img src={IMAGES.productThumbnail2} alt="product" />
          </div>
          <div className="imageItem">
            <img src={IMAGES.productThumbnail3} alt="product" />
          </div>
          <div className="imageItem">
            <img src={IMAGES.productThumbnail4} alt="product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;