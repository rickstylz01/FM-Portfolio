import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import '../App.css';
import {Col, Container, Row} from "react-bootstrap";

const Projects = (props) => {
  return(
    <div>
      <Container fluid="sm">
        <Row>
          <Col>
            <Thumbnail
              link="/touryst"
              image="/images/tourystImg.png"
              title="Tour-Info Project"
              role="Back-End Developer"
            />
          </Col>
        </Row>
      </Container>

      <Thumbnail
        link="/todo-app"
        image="/images/todoImg.png"
        title="Todo Application"
        role="Software Engineer"
      />
      <Thumbnail
        link="/rickstagram"
        image="/images/rickstagramImg.png"
        title="Rickstagram"
        role="Software Engineer"
      />
      <Thumbnail
        link="/hidden-gems"
        image="/images/hiddenGemsImg.png"
        title="Hidden Gems"
        role="Software Engineer"
      />
    </div>
  )
}

export default Projects;
