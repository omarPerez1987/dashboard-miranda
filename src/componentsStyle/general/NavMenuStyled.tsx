import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavMenustyled = styled.nav`
  padding-top: 3.2em;
  width: 34.5em;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 13px 3px 40px #00000005;
  
  & .logo {
    margin: 0 auto;
    width: 70%;
    height: auto;
  }
  
  & .container-link {
    margin-top: 6em;
    display: flex;
    flex-direction: column;
    gap: 5.8em;
    margin-bottom: 2.5em;
  }
  
  & .container-copyright {
    margin-top: 3.8em;
    margin-left: 3.5em;
  }
  
  & .container-copyright__title {
    font-size: 1.4rem;
    
  }
  
  & .container-copyright__subtitle {
    font-size: 1.4rem;
    color: #799283;
    margin-bottom: 4.1em;
  }
  
  
  `;


export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.6em;
  color: #799283;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 3.3rem;
  text-decoration: none;
  width: auto;
  padding-left: 3.5em;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
  
  &.active {
    color: red;
    border-left: 6px solid red;
  }
`;