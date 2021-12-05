import React from "react";
import Navigation from "./Navigation";
import '../App.css'
import {useLocation} from "react-router-dom";

const ProjectDetails = ({ props }) => {
  const location = useLocation();
  const projectData = location.state

  // console.log(projectData.projectData.title);
  return (
    <div>
      <Navigation />

      <h1>{projectData.projectData.title}</h1>

    </div>
  );
}

export default ProjectDetails;
