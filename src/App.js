import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./components/Landing";
import ProjectList from "./components/ProjectList";
import Blog from "./components/Blog";
import About from "./components/About";
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
      techStack: "Nodejs, MongoDB/Mongoose, EJS, Bcrypt, JWT, Javascript, Git/Github",
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
      techStack: "Nodejs, Reactjs, MongoDB/Mongoose",
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

      brief: "An Instagram clone application. Complete with modals ",
      techStack: "JavaScript, Reactjs",
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
      brief: "lorum lorum ipsum ipsum",
      techStack: "Reactjs, GoogleAPI",
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
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects/:title" element={<ProjectDetails />}
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
