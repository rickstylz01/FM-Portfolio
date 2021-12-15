import React from "react";
import {Link} from "react-router-dom";
import {Container, Image} from "react-bootstrap";
import'./Thumbnail.css';

const Thumbnail = ({ project }) => {
  return (
    <div className="Thumbnail">
      <Link
        to={project.link}
        state={{ projectData: project }}
        className="thumbnail-text"
      >
        <Container className="project-image">
          <div className="bg-light border">
            <Image
              src={project.image}
              alt="project sample"
              fluid
            />
          </div>
        </Container>

        <div className="project-title thumbnail-text">
          {project.title}
        </div>
      </Link>

      <div className="project-role thumbnail-text">
        {project.role}
      </div>
    </div>
  );
}

export default Thumbnail;
