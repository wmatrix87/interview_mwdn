import React, { FC, useState, useEffect } from 'react'
import {Image} from '../../types';

import './styles.css';

type Props = {
  images: Image[]
}

const Carousel: FC<Props> = ({images}) => {
  const [currentImageIndex, setImageIndex] = useState(1);
  // const [localImages, setImages] = useState<Image[]>(images);
  // console.log('currentImage', currentImage)
  //
  // useEffect(() => {
  //   setImage(images[currentImageIndex])
  // }, [currentImageIndex])
  //

  const handleNext = () => {
    if (currentImageIndex < (images.length - 1)) {
      setImageIndex(prevState => prevState + 1)
    }
  }

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setImageIndex(prevState => prevState - 1)
    }
  }
  
  if (!images.length || !images[currentImageIndex]) {
    return <div>Empty</div>
  }

  return (
    <>
      <div style={{ maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }} >
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <button className="left-arrow" onClick={handlePrev}>
              &lt;
            </button>
            <div className="carousel-content-wrapper">
              <div className="carousel-content">
                <img src={images[currentImageIndex].path} style={{width: '100%'}} alt={images[currentImageIndex].title} />
              </div>
            </div>
            <button className="right-arrow" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
        <div>
          {images.map((image, key) => (
            <span key={image.id} className={`dot ${key === currentImageIndex ? 'active' : ''}`} onClick={console.log}></span>
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousel