import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import Fade from "react-reveal";
import {Col, Container, Image} from "react-bootstrap";
import "./AboutMe.css";

const AboutMe = () => {
  return(
    <div className="AboutMe">
      <Navigation />

      {/*--Introduction--*/}
      <Fade>
        <h1>About Me</h1>
      </Fade>

      <Container className="flex-display mt-5">
        <Col className="staring-image order-sm-12">
          <Fade left>
            <Image
              src="../../images/staring-out.jpeg"
              alt="standing on a mountain looking out"
              thumbnail
              fluid
            />
          </Fade>
        </Col>

        <Col className="paragraph-container order-sm-1">
          <Fade right>
            <p className="paragraph-padding text-lrg">
              I enjoy working on creative projects that are both functionally and esthetically notable. My journey to becoming a full-stack developer began with self-taught lessons and resources. I am a graduate of the  "Grow with Google" Scholarship program, where I was taught the fundamentals of front-end web development.  I recently completed a back-end software engineer training program with an organization called Reskill Americans.
              <br/>
              <br/>
              Thanks to RA, I gained the experience of working in a real-world project scenario with a diverse team of other developers to create full-stack applications.
            </p>
          </Fade>
        </Col>
      </Container>

      {/*--Achievements--*/}
      <Fade bottom>
        <div className="achievements-container mt-5">
          <Col className="mt-3">
            <Fade bottom>
              <Image
                className="google-scholarship"
                src="../../images/GoogleScholarship.jpg"
                alt="Grow with Google Certificate"
                fluid
                thumbnail
              />
            </Fade>
          </Col>

          <Col className="ra-scholarship mt-3">
            <Fade bottom>
              <Image
                src="../../images/RaCertificate.png"
                alt="Reskill Americans Certificate"
                fluid
                thumbnail
              />
            </Fade>
          </Col>
        </div>
      </Fade>

      {/*--Hobbies--*/}
      <div id="hobbies">
        <h2 className="center-text mt-4">Hobbies</h2>
      </div>

      <Fade bottom>
        <Container className="mt-4">
          <div className="flex-display">
            <Col>
              <p className="paragraph-padding text-x-lrg">
                When I'm not working on projects, I work part time at an after-school non-for-profit program teaching stem classes like LEGO architecture or even an intro to coding class.
                <br/>
                <br/>
                Otherwise I'm probably looking for a new hiking trail, or a new restaurant to try out.  I try to keep it balanced.
              </p>
            </Col>
            <Col>
              <Image
                className="bboy-freeze"
                src="../../images/bboy.JPG"
                alt="breakdancing freeze"
                fluid
                thumbnail
              />
            </Col>
          </div>
        </Container>
      </Fade>
      <Footer />
    </div>
  )
}

export default AboutMe;
