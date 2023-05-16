import React, { FC, useState } from 'react'
import {Image} from "../../types";

import './styles.css';

type Props = {
  images: Image[]
}

const Gallery: FC<Props> = ({images}) => {

  return (
  <div className="container">
    {images.map((image) => (
      <div key={image.id} className="gallery">
        <a href="#">
          <img src={image.path} alt={image.title} width="600" height="600" />
        </a>
        <div className="desc">{image.title}</div>
      </div>
    ))}
  </div>
  )
}

export default Gallery