import React from 'react'
import Cardprops from './Cardprops'

const Card = ({ title, text, image, buttonText }) => {
  return (
    <div className="d-flex justify-content-center mt-4 ps-4 pe-4">
      <div className="card w-100 h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
