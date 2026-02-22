import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Jumbotron(){
    return(
         <div className="container mt-5">
            <div className="p-5 mb-4 bg-light rounded shadow-lg">
                <div className="container-fluid py-5">
                <h1 className="display-4 fw-bold">
                    A Warm Welcome!
                </h1>
                <p className="col-md-10 fs-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
                </p>
                <button className="btn btn-primary btn-lg">
                    Call To Action!
                </button>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;