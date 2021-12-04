import React from "react";
import Navigation from "./Navigation";
import '../App.css'
import Thumbnail from "./Thumbnail/Thumbnail";

const ProjectDetails = (props) => {

return (
  <div>
    <Navigation />

    <Thumbnail
      link={props.link}
      image={props.image}
      title={props.title}
      role={props.role}
    />

    <h1>Hello world!</h1>

  </div>
  )
}

export default ProjectDetails;
