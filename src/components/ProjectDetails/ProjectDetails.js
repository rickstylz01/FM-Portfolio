import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import {useLocation} from "react-router-dom";
import {Col, Container, Image, Row} from "react-bootstrap";
import './ProjectDetails.css';

const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state
  // const project = projectData.projectData;

  return (
    <div className="Touryst">
      <Navigation />

      <h1 className="textStyle">{project.title}</h1>

      <Image
        src={project.image}
        alt="project sample"
        fluid
      />

      <Container>
        <Row>
          <Col>
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
          <Col>
            <h2>Stack</h2>
          </Col>
          <Col>
            <h2>Link</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>{project.role}</p>
          </Col>
          <Col>
            <p>{project.techStack}</p>
          </Col>
          <Col>
            <p>{project.projectLink}</p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
