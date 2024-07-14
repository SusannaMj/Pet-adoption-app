import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffb3ff;
  display: flex;
  padding: 10px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding-right: 20px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
