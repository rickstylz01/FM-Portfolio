import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail";
import Navigation from "./Navigation";
import '../App.css';
import Footer from "./Footer";

class Projects extends React.Component {
  constructor() {
    super();
    this.projects = [
      {
        link: "/projects/touryst",
        image: "/images/tourystImg.png",
        title: "Tour-Info Project",
        role: "Back-End Developer"
      },
      {
        link: "/projects/todo-app",
        image: "/images/todoImg.png",
        title: "Todo Application",
        role: "Software Engineer"
      },
      {
        link: "/projects/rickstagram",
        image: "/images/rickstagramImg.png",
        title: "Rickstagram",
        role: "Software Engineer"
      },
      {
        link: "/projects/hidden-gems",
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

        <Footer>
          A Salvi Rick Production
        </Footer>
      </div>
    )
  }

}

export default Projects;
