import {Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import unplug from "./unplug.mp4";
import "../App.css"

const Landing = () => {
  return(
    <div className="landing">

      <video id="background-video" autoPlay loop muted>
        <source src={unplug} type="video/mp4" />
      </video>

      {/*<Container className="logo-img">*/}
      {/*  */}
      <Link to="/">
        <Image
          src="/images/LOGO.png"
          className="logo-image"
          alt="custom-logo"
          fluid
        />
      </Link>
      {/*</Container>*/}

      <Container className="home-nav-links">
        <Row className="row-width">
          <Link
            to="/projects"
            className="text-style"
          >Projects</Link>
          <Link
            to="/about"
            className="text-style"
          >About Me</Link>
          <Link
            to="/blog"
            className="text-style"
          >Blog</Link>
        </Row>
      </Container>
    </div>
    )
}

export default Landing;
