import React from "react";
import {Link} from "react-router-dom";
import '../App.css';


function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="project sample"/>
        </div>
        <div className="project-title">{props.title}</div>
      </Link>
      <div className="project-role">{props.role}</div>
    </div>
  );
}

export default Thumbnail;
