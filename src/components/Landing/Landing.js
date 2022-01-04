import {Container, Image} from "react-bootstrap";
import {Fade} from "react-reveal";
import {Link} from "react-router-dom";
import React from "react";
import unplug from "../../assets/unplug.mp4";
import "./Landing.css"

const Landing = () => {
  return(
    <div className="landing">

      <video id="background-video" autoPlay loop muted>
        <source src={unplug} type="video/mp4" />
      </video>



      <Container className="home-nav-links">
        <Link to="/">
          <Image
            src="/images/LOGO.png"
            className="logo-image"
            alt="custom-logo"
            fluid
          />
        </Link>

          <Fade left>
            <Link
              to="/projects"
              className="text-style"
            >
              Projects
            </Link>
          </Fade>
          <Fade right>
            <Link
              to="/about"
              className="text-style"
            >
              About Me
            </Link>
          </Fade>
          <Fade bottom>
            <Link
              to="/blog"
              className="text-style"
            >
              Blog
            </Link>
          </Fade>
      </Container>
    </div>
    )
}

export default Landing;
