import React from "react";
import {Link} from "react-router-dom";
import'./Thumbnail.css';
import {Container, Image} from "react-bootstrap";

const Thumbnail = (props) => {
  return (
    <div className="Thumbnail">
      <Link to={props.link}>
        <Container className="project-image">
          <div className="bg-light border">
            <Image src={props.image} alt="project sample" fluid />
          </div>
        </Container>
        <div
          className="project-title text-style thumbnail-text">
          {props.title}
        </div>
      </Link>
      <div
        className="project-role text-style thumbnail-text">
        {props.role}
      </div>
    </div>
  );
}

export default Thumbnail;
