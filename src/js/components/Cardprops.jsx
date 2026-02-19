import React from "react";
import "./Card.css";

const Cardprops = (props) => {
  return (
    <div className="d-flex justify-content-center mt-4 ps-4 pe-4">
      <div className="card w-100 h-100">
        <img src={props.image} className="card-img-top" />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <button className="btn btn-primary">{props.buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Cardprops;
