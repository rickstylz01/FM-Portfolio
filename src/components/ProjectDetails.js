import React from "react";
import Navigation from "./Navigation";
import {useParams} from "react-router-dom";

const ProjectDetails = (props) => {
  const { title } = useParams();

return (
  <div>
    <Navigation />

      <h1>{props.title} - { title }</h1>

  </div>
  )
}

export default ProjectDetails;
