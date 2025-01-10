import React, { useState } from 'react';
import './menu.css'
import { IMAGES } from '../../images';

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => {
    setIsOpenMenu(true);
  }
  const closeMenu = () => {
    setIsOpenMenu(false);
  }

  return (
    <>
      <nav className='nav'>
        <button className='navBtn' onClick={openMenu}>
          <img src={IMAGES.iconMenu} alt="icon menu" />
        </button>
        {isOpenMenu && <div className="navOverlay" onClick={closeMenu}></div>}
        <ul className={`navList ${isOpenMenu && 'open'}`}>
          <button className='closeMenuBtn' onClick={closeMenu}>
            <img src={IMAGES.iconClose} alt="icon close" />
          </button>
          <li className='navList__item'>Collections</li>
          <li className='navList__item'>Men</li>
          <li className='navList__item'>Women</li>
          <li className='navList__item'>About</li>
          <li className='navList__item'>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;