import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import Fade from "react-reveal";
import {Col, Container, Image} from "react-bootstrap";
import "./AboutMe.css";
import Contact from "../Contact/Contact";

const AboutMe = () => {
  return(
    <div>
      <Navigation />

      {/*--Introduction--*/}
      <section className="intro-container">
        <Fade>
          <h1 className="center-text mt-4">About Me</h1>
        </Fade>

        <div className="row-display abt-me-items">
          <Col className="order-sm-12">
            <Fade left>
              <Image
                className="staring-image"
                src="../../images/staring-out.jpeg"
                alt="standing on a mountain looking out"
                thumbnail
                fluid
              />
            </Fade>
          </Col>

          <Col className="paragraph-container order-sm-1">
            <Fade right>
              <p className="text-lrg">
                I enjoy working on creative projects that are both functionally and esthetically notable. My journey to becoming a full-stack developer began with self-taught lessons and resources. I am a graduate of the  "Grow with Google" Scholarship program, where I was taught the fundamentals of front-end web development.  I recently completed a back-end software engineer training program with an organization called Reskill Americans.
                <br/>
                <br/>
                Thanks to RA, I gained the experience of working in a real-world project scenario with a diverse team of other developers to create full-stack applications.
              </p>
            </Fade>
          </Col>
        </div>
      </section>

      {/*--Achievements--*/}
      <section id="achievements">
        <Fade bottom>
          <div className="achievements-container mt-2">
            <Col className="google-scholarship-container mt-3">
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

            <Col className="ra-scholarship-container mt-3">
              <Fade bottom>
                <Image
                  className="ra-scholarship"
                  src="../../images/RaCertificate.png"
                  alt="Reskill Americans Certificate"
                  fluid
                  thumbnail
                />
              </Fade>
            </Col>
          </div>
        </Fade>
      </section>

      {/*--Hobbies--*/}
      <div id="hobbies">
        <h2 className="center-text mt-4">Hobbies</h2>

        <Fade>
          <Container className="mt-4 btm-margin">
            <div className="row-display">
              <Col className="paragraph-container">
                <p className="text-x-lrg">
                  When I'm not working on projects, I work part time at an after-school non-for-profit program teaching STEM classes like LEGO architecture or even an intro to coding class.
                  <br/>
                  <br/>
                  Otherwise I'm probably looking for a new hiking trail, or a new restaurant to try out.  I try to keep it balanced.  Oh yea! I also try to stay in shape by doing some break dancing.
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
      </div>

      <Contact />
      <Footer />
    </div>
  )
}

export default AboutMe;
