import React from "react";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import {SocialIcon} from "react-social-icons";
import './Footer.css';
import '../../App.css';

const Footer = () => {
  return (
    <div id="footer" className="phantomStyle">
      <div className="footerStyle">
        <SocialIcon
          url="https://www.linkedin.com/in/rickmaya/"
          bgColor="#5F9EA0"
        />
        <SocialIcon
          url="https://github.com/rickstylz01"
          bgColor="#5F9EA0"
        />
        <SocialIcon
          url="https://twitter.com/waves_ride"
          bgColor="#5F9EA0"
        />
      </div>
    </div>
  )
}

export default Footer;
