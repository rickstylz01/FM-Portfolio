import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import {Fade} from "react-reveal";
import './ProjectList.css'
import Form from "../Form/Form";

const ProjectList = ({projectInfo}) => {
  return (
    <div>
      <Navigation />

      <Fade bottom>
        <div className="projectList">
          {
            projectInfo.map((project, index) => <Thumbnail key={index} project={project} />)
          }
        </div>
      </Fade>

      <Form />
      <Footer />
    </div>
  )
}

export default ProjectList;
