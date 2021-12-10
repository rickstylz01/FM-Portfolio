import React from "react";
import { projectInfo } from "./projectInfo";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import {useLocation} from "react-router-dom";
import {Col, Container, Image, Row} from "react-bootstrap";
import './ProjectDetails.css';

const ProjectDetails = () => {
  const location = useLocation();
  const projectData = location.state
  const project = projectData.projectData;
  console.log(projectInfo[0].brief);

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
            <p>{projectInfo[0].brief}</p>
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
            <p>{projectInfo[0].role}</p>
          </Col>
          <Col>
            <p>{projectInfo[0].techStack}</p>
          </Col>
          <Col>
            <p>{projectInfo[1].link}</p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
