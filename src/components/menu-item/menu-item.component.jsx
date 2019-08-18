import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imgUrl, size}) => {
  return (
    <div className={`${size} menu-item`}>
        <div className='background-image'
        style={{
          backgroundImage: `url(${imgUrl})`
        }}
        >
        </div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='substitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;