import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail";
import Navigation from "./Navigation";
import Footer from "./Footer/Footer";

const ProjectList = ({projectInfo}) => {
  return (
    <div>
      <Navigation />
      {
        projectInfo.map((project, index) => <Thumbnail key={index} project={project} />)
      }
      <Footer />
    </div>
  )
}

export default ProjectList;
