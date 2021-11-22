import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/*Set up the Router*/}
        <Routes>
          <Route
            name="projects"
            path="/"
            element={<Projects />}
          />
          <Route
            name="articles"
            path="/articles"
            element={<Articles />}
          />
          <Route
            name="about"
            path="/about"
            element={<About />}
          />
        </Routes>

        <div className="navigation">
          <div className="navigation-sub">

            {/*Set up the Links.  Replace a tags with Link*/}
            <Link
              to="projects"
              href=""
              className="item"
            >
              Projects
            </Link>
            <Link
              to="articles"
              href=""
              className="item"
            >
              Articles
            </Link>
            <Link
              to="about"
              href=""
              className="item"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
