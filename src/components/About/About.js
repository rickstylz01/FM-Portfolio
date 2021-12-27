import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import {Col, Container, Image, Row} from "react-bootstrap";
import "./About.css";

const About = (props) => {
  return(
    <div>
      <Navigation />
      <h1>About Me</h1>

      <Container className="introduction">
        <Row>
          <Col>
            <Image
              src="../../images/lookinOut.jpg"
              alt="standing on a mountain looking out"
              fluid
            />
          </Col>

          <Col>
            <p>
              Hello and welcome to my page!
              <br />
              Me llamo Rick.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="achievements">
        <Row>
          <Col></Col>
        </Row>
      </Container>



      <Footer />
    </div>
  )
}

export default About;
