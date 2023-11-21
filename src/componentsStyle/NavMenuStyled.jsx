import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavMenustyled = styled.nav`
  padding-top: 2em;
  width: 23.5em;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 13px 3px 40px #00000005;
  
  & .logo {
    margin: 0 auto;
    width: 80%;
    height: 57px;
  }

  & .container-link {
    margin-top: 3.8em;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin-bottom: 2.5em;
  }

  & .container-copyright {
    margin-top: 3.8em;
    margin-left: 3.5em;
  }
  
  & .container-copyright__title {
    font-size: 0.9rem;

  }

  & .container-copyright__subtitle {
    font-size: 0.8rem;
    color: #799283;
    margin-bottom: 4.1em;
  }

  
  `;


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

  & svg {
    width: 24px;
    height: 24px;
  }
  
  &.active {
    color: red;
    border-left: 6px solid red;
  }
`;