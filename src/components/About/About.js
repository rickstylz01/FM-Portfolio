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

      <Fade>
        <div className="background-image">
            <Image
              src="../../images/staring-out.jpeg"
              alt="standing on a mountain looking out"
              fluid
            />
        </div>
      </Fade>

      <Fade left>
        <div className="aboutMe-container">
            <Col className="paragraph-one square border border-warning rounded border-2">
              <Fade>
                <h2>
                  Hola, my name is Rick.
                </h2>
                <p className="journey-paragraph">
                  I enjoy working on creative projects that are both functionally and esthetically notable. My journey to becoming a full-stack developer began with self-taught lessons and resources. I am a graduate of the  "Grow with Google" Scholarship program, where I was taught the fundamentals of front-end web development.  I recently completed a back-end software engineer training program with an organization called Reskill Americans.
                  <br/>
                  <br/>
                  Thanks to RA, I gained the experience of working in a real-world project scenario with a diverse team of other developers to create full-stack applications.
                </p>
              </Fade>
            </Col>
        </div>
      </Fade>


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
