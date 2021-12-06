import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail";
import Navigation from "./Navigation";
import '../App.css';

class Projects extends React.Component {
  constructor() {
    super();
    this.projects = [
      {
        link: "touryst",
        image: "/images/tourystImg.png",
        title: "Tour-Info Project",
        role: "Back-End Developer"
      },
      {
        link: "todo-app",
        image: "/images/todoImg.png",
        title: "Todo Application",
        role: "Software Engineer"
      },
      {
        link: "rickstagram",
        image: "/images/rickstagramImg.png",
        title: "Rickstagram",
        role: "Software Engineer"
      },
      {
        link: "hidden-gems",
        image: "/images/hiddenGemsImg.png",
        title: "Hidden Gems",
        role: "Software Engineer"
      }
    ];
  }

  render() {
    return (
      <div>
        <Navigation />

        <Thumbnail props={this.projects[0]} />
        <Thumbnail props={this.projects[1]} />
        <Thumbnail props={this.projects[2]} />
        <Thumbnail props={this.projects[3]} />

      </div>
    )
  }

}

export default Projects;
