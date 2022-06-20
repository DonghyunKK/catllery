import React from 'react';

function Gallery ({images}) {
  const pics = images.map((image) => {
    return(
        <img src={image.url} alt="" key={image.id}/>
    )
  });
  return (
    <div className='image-list'>{pics}</div>
  );
  }

export default Gallery;