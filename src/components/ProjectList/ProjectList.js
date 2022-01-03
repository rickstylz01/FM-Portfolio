import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import {Fade} from "react-reveal";

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

      <Footer />
    </div>
  )
}

export default ProjectList;
