import React from "react";
import Navigation from "../Navigation";
import {useLocation} from "react-router-dom";
import {Image} from "react-bootstrap";
import '../../App.css'

const ProjectDetails = ({ props }) => {
  const location = useLocation();
  const projectData = location.state

  return (
    <div>
      <Navigation />
      <Image
        src={projectData.projectData.image}
        alt="project sample"
        fluid
      />
      <br/>
      <br/>
      <h1>{projectData.projectData.title}</h1>

    </div>
  );
}

export default ProjectDetails;
