import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import {Fade} from "react-reveal";

const ProjectList = ({projectInfo}) => {
  return (
    <div className="projectList">
      <Navigation />

        <Fade bottom>
          {
            projectInfo.map((project, index) => <Thumbnail key={index} project={project} />)
          }
        </Fade>

      <Footer />
    </div>
  )
}

export default ProjectList;
