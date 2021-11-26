import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

const Landing = () => {
  return(
    <div className="navigation">
      <Container fluid="sm" className="logo-img">
        <Link to="/">
          <img
            src="/images/LOGO.png"
            className="logo-image"
            alt="custom-logo"
          />
        </Link>
      </Container>

      <Container className="home-nav-links">
        <Row>
          <Link
            to="/projects"
            className="no-underline"
          >Projects</Link>
          <Link
            to="/about"
            className="no-underline"
          >About</Link>
          <Link
            to="/articles"
            className="no-underline"
          >Articles</Link>
        </Row>
      </Container>
    </div>
    )
}

export default Landing;
