import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1em;
  color: #799283;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 2.1rem;
  text-decoration: none;
  height: 4.1em;
  width: auto;
  padding-left: 3.5em;
  
  &.active {
    color: red;
    border-left: 6px solid red;
  }
`;
