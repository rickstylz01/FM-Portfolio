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
            <h2 className="mt-5">Description</h2>
          </Row>
          <Row>
            <p>{project.brief}</p>
          </Row>
        </Container>

        <Container>
          <Row>
            <h2>Role</h2>
          </Row>
          <Row>
            <p>{project.role}</p>
          </Row>
        </Container>

        <Container>
          <Row>
            <h2>Stack</h2>
          </Row>
          {
            project.techStack.map((tech, index) =>
              <Row>
                <ul>
                  <li key={index}>{tech}</li>
                </ul>
              </Row>
            )
          }
        </Container>

        <Container>
          <Row className="mt-4">
            <h2>Link</h2>
          </Row>
          <Row>
            <a
              href={project.projectLink.to}
              target="_blank" rel="noreferrer"
            >
              {project.projectLink.text}
            </a>
          </Row>
        </Container>
      </Fade>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
