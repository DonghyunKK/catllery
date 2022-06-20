import React, { useState } from 'react';
import './gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons';

function Gallery ({images}) {

  const [slideNum, setSlideNum] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNum(index);
    setOpenModal(true)
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNum === 0 
    ? setSlideNum( images.length -1 ) 
    : setSlideNum( slideNum - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNum + 1 === images.length 
    ? setSlideNum(0) 
    : setSlideNum(slideNum + 1)
  }

  return (
    <>
      {openModal && 
      <div className='slideContainer'>
        <FontAwesomeIcon icon={faCircleChevronLeft} className="btn-prev" onClick={prevSlide} />
        <FontAwesomeIcon icon={faCircleChevronRight} className="btn-next" onClick={nextSlide} />
        <FontAwesomeIcon icon={faCircleXmark} className="btn-close"onClick={handleCloseModal} />
        <div className='fullScreenImage'>
          <img src={images[slideNum].url} alt="" />
        </div>
      </div>}
      <div className='container'>
        {images.map((image, index) => {
          return(
            <div className='image' key={image.id} onClick={ () => handleOpenModal(index)}>
              <img className='img' src={image.url} alt="" />
            </div>
          )
        })}
      </div>
    </>
  )
  }

export default Gallery;