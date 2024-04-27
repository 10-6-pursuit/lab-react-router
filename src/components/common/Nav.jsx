import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">
            Northwest <span>Animal Hospital</span>
          </Link>
        </h1>
      </article>
      <aside>
        <ul>
          <li>
            <Link to="/staff">All Staff</Link>
          </li>
          <li>
            <Link to="/pets">All Pets</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}

export default Nav;
