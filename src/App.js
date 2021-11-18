import React from "react";
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import About from "./components/About";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/*Set up the Router*/}
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        <div className="navigation">
          <img src={logo} className="logo" alt="Logo Image"/>
          <div className="navigation-sub">

            {/*Set up the Links.  Replace a tags with Link*/}
            <Link href="" className="item">Projects</Link>
            <Link href="" className="item">Articles</Link>
            <Link href="" className="item">About</Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
