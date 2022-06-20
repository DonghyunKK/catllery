import React from 'react';
import './gallery.css';

function Gallery ({images}) {
  return (
    <div className='container'>
      {images.map((image) => {
        return(
          <div className='image' key={image.id}>
            <img className='img' src={image.url} alt="" />
          </div>
        )
      })}
    </div>
  )
  }

export default Gallery;