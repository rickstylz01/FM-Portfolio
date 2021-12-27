import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Fade} from "react-reveal";

const Navigation = () => {
  return (
    <Navbar
      fixed="top"
      bg="dark"
      variant="dark"
      collapseOnSelect
      expand="lg"
    >

      <Container>
        <Fade right>
          <Navbar.Brand href="/">
            <img
              alt="custom logo"
              src="/images/blank-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Rick Maya
          </Navbar.Brand>
        </Fade>


        <Navbar.Toggle ariaa-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Fade right>
              <Nav.Link href="/about">About Me</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Fade>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation

