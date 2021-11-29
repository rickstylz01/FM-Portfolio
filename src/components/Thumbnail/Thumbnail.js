import React from "react";
import {Link} from "react-router-dom";
import {Container, Image} from "react-bootstrap";
import'./Thumbnail.css';

const Thumbnail = (props) => {
  return (
    <div className="Thumbnail">
      <Link to={props.link} className="thumbnail-text">
        <Container className="project-image">
          <div className="bg-light border">
            <Image src={props.image} alt="project sample" fluid />
          </div>
        </Container>
        <div
          className="project-title thumbnail-text">
          {props.title}
        </div>
      </Link>
      <div
        className="project-role thumbnail-text">
        {props.role}
      </div>
    </div>
  );
}

export default Thumbnail;
