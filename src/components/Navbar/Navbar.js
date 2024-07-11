import React from "react";

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
