import React from "react";
import { Link } from "react-router-dom";

function Navigation({ lang = false }) {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
        <li>
          <Link to="/news">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
