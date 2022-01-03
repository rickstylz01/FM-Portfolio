import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import Fade from "react-reveal";
import {Col, Container, Image, Row} from "react-bootstrap";
import "./AboutMe.css";

const AboutMe = () => {
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

          <Col className="aboutMe-container order-sm-1">
            <Fade right>
              <div>
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

      <Fade bottom>
        <Container className="achievements">
          <h2 className="mt-5">ACHIEVEMENTS</h2>
          <Row className="mt-5">
            <Col className="google-scholarship">
              <Image
                src="../../images/GoogleScholarship.jpg"
                alt="Grow with Google Certificate"
                fluid
                thumbnail
              />
            </Col>
            <Col className="ra-scholarship">
              <Image
                src="../../images/RaCertificate.png"
                alt="Reskill Americans Certificate"
                fluid
                thumbnail
              />
            </Col>
          </Row>
        </Container>
      </Fade>




      <Footer />
    </div>
  )
}

export default AboutMe;
