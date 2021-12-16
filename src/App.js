import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
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
