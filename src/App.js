import React from "react";
// import logo from '../public/images/LOGO.png'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import About from "./components/About";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/*Router setup*/}
        <Routes>
          <Route path="/projects" component={Projects} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
        </Routes>

        <div className="navigation">
          <Link to="/">
            <img
              src="/images/LOGO.png"
              className="logo-image"
              alt="custom-logo"
            />
          </Link>

          <div className="navigation-sub">
            {/*Set up links*/}
            <Link to="/" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/articles" className="item">Articles</Link>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
