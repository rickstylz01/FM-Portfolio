import React from "react";
import Thumbnail from "./Thumbnail";
// import tourystImg from "../../public/images/tourystImg.png";
import '../App.css';

const Projects = (props) => {
  return(
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/touryst"
        image="/image/tourystImg"
        title="Tour-Info Project"
        role="Back-End Developer"
      />
      <Thumbnail
        link="/todo-app"
        image="/image/todoImg"
        title="Todo Application"
        role="Software Engineer"
      />
      <Thumbnail
        link="/rickstagram"
        image="/image/rickstagramImg"
        title="Rickstagram"
        role="Software Engineer"
      />
      <Thumbnail
        link="/hidden-gems"
        image="/image/hiddenGemsImg"
        title="Hidden Gems"
        role="Software Engineer"
      />
    </div>
  )
}

export default Projects;
