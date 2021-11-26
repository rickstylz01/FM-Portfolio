import React from "react";
import {Link} from "react-router-dom";
import'./Thumbnail.css';
import '../App.css';
import {Container, Image} from "react-bootstrap";


const Thumbnail = (props) => {
  return (
    <div className="project">
      <Link to={props.link}>
        <Container className="project-image">
          <div className="bg-light border">
            <Image src={props.image} alt="project sample" fluid />
          </div>
        </Container>
        <div className="project-title">{props.title}</div>
      </Link>
      <div className="project-role">{props.role}</div>
    </div>
  );
}

export default Thumbnail;
