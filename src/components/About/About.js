import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import Fade from "react-reveal";
import {Col, Container, Image, Row} from "react-bootstrap";
import "./About.css";

const About = () => {
  return(
    <div className="AboutMe">
      <Navigation />

      <Fade>
        <h1 className="pt-5">About Me</h1>
      </Fade>

      <Container className="mt-5">
        <Row>
          <Col className="background-image order-sm-12">
            <Fade left>
              <Image
                src="../../images/staring-out.jpeg"
                alt="standing on a mountain looking out"
                thumbnail
                fluid
              />
            </Fade>
          </Col>

          <Col className="order-sm-0">
            <Fade right>
              <div className="aboutMe-container">
                <h2>
                  Hola, my name is Rick.
                </h2>
                <p className="intro-paragraph">
                  I enjoy working on creative projects that are both functionally and esthetically notable. My journey to becoming a full-stack developer began with self-taught lessons and resources. I am a graduate of the  "Grow with Google" Scholarship program, where I was taught the fundamentals of front-end web development.  I recently completed a back-end software engineer training program with an organization called Reskill Americans.
                  <br/>
                  <br/>
                  Thanks to RA, I gained the experience of working in a real-world project scenario with a diverse team of other developers to create full-stack applications.
                </p>
              </div>
            </Fade>
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
