import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./components/Landing";
import ProjectList from "./components/ProjectList";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe/AboutMe";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

function App() {
  const PROJECTINFO = [
    {
      link: "/projects/touryst",
      image: "/images/tourystImg.png",
      title: "Tour-Info Project",
      role: "Back-End Developer",
      brief: "Collaborated with a team of back-end developers to create a tour information/booking application complete with user registration, email verification, and tour booking features",
      techStack: ["Nodejs", "MongoDB/Mongoose", "EJS", "Bcrypt", "JWT", "Javascript", "Git/Github"],
      projectLink: {
        to: "https://github.com/reskillamericans/Tour-Info-Group-Node",
        text: "Touryst Github"
      }
    },
    {
      link: "/projects/todo-app",
      image: "/images/todoImg.png",
      title: "Todo Application",
      role: "Software Engineer",
      brief: "This is a simple to-do application that let's you create, edit, delete, and mark task's as complete.",
      techStack: ["NodejsJ", "Reactjs", "MongoDB/Mongoose"],
      projectLink: {
        to: "https://github.com/rickstylz01/soloNodeTodo",
        text: "Todo App Github"
      }
    },
    {
      link: "/projects/rickstagram",
      image: "/images/rickstagramImg.png",
      title: "Rickstagram",
      role: "Software Engineer",

      brief: "An Instagram clone application. Complete with a functional searchbar and modal pop ups for a closer look at images.",
      techStack: ["JavaScript", "Reactjs", "Bootstrap"],
      projectLink: {
        to: "https://github.com/rickstylz01/Rickstagram",
        text: "Rickstagram Github"
      }
    },
    {
      link: "/projects/hidden-gems",
      image: "/images/hiddenGemsImg.png",
      title: "Hidden Gems",
      role: "Software Engineer",
      brief: "Using Reactjs, Bootstrap and Google's location beta api, I created an app that will locate registered restaurants and cafes in your immediate area within a 10 mile radius.",
      techStack: ["Reactjs","GoogleAPI", "Bootstrap"],
      projectLink: {
        to: "https://github.com/rickstylz01/-hidden-gemz",
        text: "Hidden Gems Github"
      }
    }
  ];

  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/projects" element={<ProjectList  projectInfo={PROJECTINFO}/>} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects/:title" element={<ProjectDetails />}
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
