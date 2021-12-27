import React from "react";
import {Fade} from "react-reveal";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import {useLocation} from "react-router-dom";
import {Col, Container, Image, Row} from "react-bootstrap";
import './ProjectDetails.css';

const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state
  console.log(project.projectLink);

  return (
    <div className="Touryst">
      <Navigation />

      <Fade top>
        <h1 className="textStyle">{project.title}</h1>

        <Image
          src={project.image}
          alt="project sample"
          fluid
        />

        <Container>
          <Row>
            <Col className="mt-5">
              <h2>Description</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{project.brief}</p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <h2>Role</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{project.role}</p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <h2>Stack</h2>
            </Col>
          </Row>
          {
            project.techStack.map((tech, index) =>
              <Row>
                <Col>
                  <ul>
                    <li key={index}>{tech}</li>
                  </ul>
                </Col>
              </Row>
            )
          }
        </Container>

        <Container>
          <Row className="mt-4">
            <Col>
              <h2>Link</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href={project.projectLink.to}
                target="_blank" rel="noreferrer"
              >
                {project.projectLink.text}
              </a>
            </Col>
          </Row>
        </Container>
      </Fade>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
