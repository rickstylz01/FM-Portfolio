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

          <Col className="paragraphOne">
            <h2>
              Hi, welcome to my page!
            </h2>
            <p>
              Me <i>llamó</i> Rick.
            </p>
            <p>
              I am a first-generation Salvadoran/Mexican-American.
            </p>
            <p>
              I began teaching myself
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
