import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

export default function Navbar() {
  return (
    <Nav>
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dogbreeds">Dogbreeds</NavLink>
        <NavLink to="/pups">Meet the pups</NavLink>
      </NavMenu>
    </Nav>
  );
}
