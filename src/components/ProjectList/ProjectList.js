import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import {Fade} from "react-reveal";
import './ProjectList.css'
import Contact from "../Contact/Contact";

const ProjectList = ({projectInfo}) => {
  return (
    <div id="projectList-container">
      <Navigation />

      <Fade bottom>
        <div className="projectList">
          {
            projectInfo.map((project, index) => <Thumbnail key={index} project={project} />)
          }
        </div>
      </Fade>

      <Contact />
      <Footer />
    </div>
  )
}

export default ProjectList;
