import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import {useLocation} from "react-router-dom";
import {Col, Container, Image, Row} from "react-bootstrap";
import './ProjectDetails.css';

const ProjectDetails = ({ props }) => {
  const location = useLocation();
  const projectData = location.state
  const pd = projectData.projectData;

  console.log(props);
  return (
    <div className="Touryst">
      <Navigation />
      <h1 className="textStyle">{pd.title}</h1>

      <Image
        src={pd.image}
        alt="project sample"
        fluid
      />

      <Container>
        <Row>
          <Col>
            <h2>Role</h2>
          </Col>
          <Col>
            <h2>Description</h2>
          </Col>
          <Col>
            <h2>Date</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>Back-end Developer</p>
          </Col>
          <Col>
            <p>This project was created while I was... </p>
          </Col>
          <Col>
            <p>12/07/21</p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default ProjectDetails;
