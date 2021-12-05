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
      }
    ];
  }

  render() {
    return (
      <div>
        <Navigation />

        <Thumbnail props={this.projects[0]}/>

        {/*<Thumbnail*/}
        {/*  link="todo-app"*/}
        {/*  image="/images/todoImg.png"*/}
        {/*  title="Todo Application"*/}
        {/*  role="Software Engineer"*/}
        {/*/>*/}
        {/*<Thumbnail*/}
        {/*  link="rickstagram"*/}
        {/*  image="/images/rickstagramImg.png"*/}
        {/*  title="Rickstagram"*/}
        {/*  role="Software Engineer"*/}
        {/*/>*/}
        {/*<Thumbnail*/}
        {/*  link="hidden-gems"*/}
        {/*  image="/images/hiddenGemsImg.png"*/}
        {/*  title="Hidden Gems"*/}
        {/*  role="Software Engineer"*/}
        {/*/>*/}

      </div>
    )
  }

}

export default Projects;
