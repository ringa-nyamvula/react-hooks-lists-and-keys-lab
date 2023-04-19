import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

function NavBar() {
    const links = ["home", "about", "projects"];
  
    return <nav>{/* display an <a> tag for each link here */}</nav>;
    return (
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </nav>
    );
  }
  
  export default NavBar;

ReactDOM.render(<App />, document.getElementById("root"));
