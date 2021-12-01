import React from "react";
import {Image} from "react-bootstrap";
import Navigation from "./Navigation";
import '../App.css'

const ProjectDetails = (props) => {

return (
  <div>
    <Navigation />

    <div className="bg-light border">
      <Image
        src={props.image}
        alt="project sample"
        fluid
      />
    </div>

  </div>
  )
}

export default ProjectDetails;
