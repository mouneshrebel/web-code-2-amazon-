import React from 'react'
import "./Contants.css" ;

import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const Contants = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          
        </div>
      </div>
      <div className="contact-page-wrapper">
      <h1 className="primary-heading"> Contants </h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      
    </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Amazon</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>8610016443</span>
          <span>Amazon@gmail.com</span>
          <span>Mounesh@amazon.com</span>
          <span>contact@amazon.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>

      </div>
    </div>
  )
}

export default Contants