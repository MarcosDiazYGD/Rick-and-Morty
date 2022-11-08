import React from 'react';
import images  from '../assets/images';

const Header = () => {
  const indexRandom = Math.floor(Math.random()*3)+1
  return (
    <div className='Header'>
      <div className='container--img__header'>
      <img className='img__header' src={images[indexRandom]} />
      </div>
    </div>
  );
};

export default Header;