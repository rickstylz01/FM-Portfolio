import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
