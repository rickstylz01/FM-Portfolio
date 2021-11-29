import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail";
import Navigation from "./Navigation";
import '../App.css';
import {Route, Routes} from "react-router-dom";
import Inspect from "./Inspect";

const Projects = (props) => {
  return(
    <div>
      <Navigation />

      <Thumbnail
        link="touryst/inspect"
        image="/images/tourystImg.png"
        title="Tour-Info Project"
        role="Back-End Developer"
      />
      <Thumbnail
        link="/todo-app"
        image="/images/todoImg.png"
        title="Todo Application"
        role="Software Engineer"
      />
      <Thumbnail
        link="/rickstagram"
        image="/images/rickstagramImg.png"
        title="Rickstagram"
        role="Software Engineer"
      />
      <Thumbnail
        link="/hidden-gems"
        image="/images/hiddenGemsImg.png"
        title="Hidden Gems"
        role="Software Engineer"
      />

    </div>
  )
}

export default Projects;
