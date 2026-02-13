import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" col-12 bg-dark text-white pt-4 pb-2 mt-auto text-center">      
        <p>Copyrigth &copy; Your Website {new Date().getFullYear()} </p>             
    </div>
  );
};

export default Footer;