import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    <ol>
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#projects">projects</a>
  </ol>
  }</nav>;
}

export default NavBar;
