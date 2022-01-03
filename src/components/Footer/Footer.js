import React from "react";
import {SocialIcon} from "react-social-icons";
import './Footer.css';
import '../../App.css';
import {Fade} from "react-reveal";

const Footer = () => {
  return (
    <div id="footer" className="phantomStyle">
      <div className="footerStyle">
        <Fade right>
          <SocialIcon
            url="https://www.linkedin.com/in/rickmaya/"
            bgColor="#5F9EA0"
            style={{
              height: 40,
              width: 40
            }}
          />
          <SocialIcon
            url="https://github.com/rickstylz01"
            bgColor="#5F9EA0"
            style={{
              height: 40,
              width: 40
            }}
          />
          <SocialIcon
            url="https://twitter.com/waves_ride"
            bgColor="#5F9EA0"
            style={{
              height: 40,
              width: 40
            }}
          />
        </Fade>
      </div>
    </div>
  )
}

export default Footer;
