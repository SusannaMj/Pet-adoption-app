import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

import "./Navbar.css";

export default function Navbar() {
  return (
    <Nav>
      <NavMenu>
        <div className="logo" style={{ padding: 17 }}>
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
          <NavLink className="navbarLink" to="/" style={{ padding: 45 }}>
            Home
          </NavLink>
          <NavLink className="navbarLink" to="/about" style={{ padding: 45 }}>
            About
          </NavLink>
          <NavLink
            className="navbarLink"
            to="/dogbreeds"
            style={{ padding: 45 }}
          >
            Dogbreeds
          </NavLink>
          <NavLink className="navbarLink" to="/pups" style={{ padding: 45 }}>
            Meet the pups
          </NavLink>
        </div>
      </NavMenu>
    </Nav>
  );
}
