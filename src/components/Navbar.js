import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          EthioPlan
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {" "}
            <Link to="/Posts">Posts</Link>
          </li>
          <li>
            {" "}
            <Link to="/createPost">create Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
