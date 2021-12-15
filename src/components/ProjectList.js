import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail";
import Navigation from "./Navigation";
import Footer from "./Footer/Footer";

const ProjectList = () => {
    const projectInfo = [
      {
        link: "/projects/touryst",
        image: "/images/tourystImg.png",
        title: "Tour-Info Project",
        role: "Back-End Developer",
        brief: "Collaborated with a team of back-end developers to create a tour information/booking application complete with user registration, email verification, and tour booking features",
        techStack: "Nodejs, MongoDB/Mongoose, EJS, Bcrypt, JWT, Javascript, Git/Github"
      },
      {
        link: "/projects/todo-app",
        image: "/images/todoImg.png",
        title: "Todo Application",
        role: "Software Engineer",
        brief: "ipsum ipsum lorum lorum",
        techStack: "Nodejs, Reactjs, MongoDB/Mongoose"
      },
      {
        link: "/projects/rickstagram",
        image: "/images/rickstagramImg.png",
        title: "Rickstagram",
        role: "Software Engineer",
        brief: "Short-term contract to help complete a printing e-commerce website.",
        techStack: "JavaScript, Reactjs"
      },
      {
        link: "/projects/hidden-gems",
        image: "/images/hiddenGemsImg.png",
        title: "Hidden Gems",
        role: "Software Engineer",
        brief: "lorum lorum ipsum ipsum",
        techStack: "Reactjs, GoogleAPI"
      }
    ];

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
