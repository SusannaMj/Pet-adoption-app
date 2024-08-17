import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;

  font-size: 15px;
  font-weight: bold;
  background-color: white;

  border-bottom: 6px solid var(--light-grey-color);
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  padding-right: 20px;
  color: var(--grey-color);
  font-size: 18px;
  text-transform: uppercase;
  margin-left: auto;
  border-left: 2px solid var(--light-grey-color);
  margin-top: 0;
  padding-top: 0;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
