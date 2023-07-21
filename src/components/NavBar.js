import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav> {links.map(nav => <a href={`#${nav}`} key={nav}>{nav}</a>)}
  {/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
