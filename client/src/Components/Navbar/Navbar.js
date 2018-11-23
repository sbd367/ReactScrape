import React from "react";

const Navbar = () =>(
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo center">NewsScrape</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="/Saved">Saved Articles</a></li>
      </ul>
    </div>
  </nav>
)
export default Navbar;