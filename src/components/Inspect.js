import React from "react";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";

const Inspect = (props) => {
return (
  <div>
    <Navigation />
    <Link to={props.link}>
      <h1>Hello World</h1>
    </Link>
  </div>
  )
}

export default Inspect;
