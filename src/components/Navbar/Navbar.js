import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

import "./Navbar.css";

export default function Navbar() {
  return (
    <Nav>
      <NavMenu>
        <div className="logo">
          <span className="logoStart">DOG</span>
          <span className="logoEnd">
            <span className="pink">h</span>
            <span className="green">o</span>
            <span className="blue">u</span>
            <span className="orange">s</span>
            <span className="green">e</span>
          </span>
        </div>
        <div className="navbarLinks">
          <NavLink className="navbarLink" to="/">
            Home
          </NavLink>
          <NavLink className="navbarLink" to="/about">
            About
          </NavLink>
          <NavLink className="navbarLink" to="/dogbreeds">
            Dogbreeds
          </NavLink>
          <NavLink className="navbarLink" to="/pups">
            Meet the pups
          </NavLink>
        </div>
      </NavMenu>
    </Nav>
  );
}
