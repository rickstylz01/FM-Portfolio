import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Landing from "./components/Landing";
import Projects from "./components/ProjectList";
import Blog from "./components/Blog";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
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
