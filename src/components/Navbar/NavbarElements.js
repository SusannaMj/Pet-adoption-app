import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding: 25px;
  font-size: 15px;
  font-weight: bold;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding-right: 20px;
  color: black;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
