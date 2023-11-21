import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiKey } from "react-icons/tfi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { BsTelephoneInbound } from "react-icons/bs";
import { NavMenustyled } from "../componentsStyle/NavMenuStyled";
import { NavLinkStyled } from "../componentsStyle/NavMenuStyled";
import { CardUserStyled } from "../componentsStyle/CardUserStyled";
import Logo from "../../public/navMenu/logo-dashboard.png";

const NavMenu = ({ menuOpen }) => {
  return (
    menuOpen && (
      <NavMenustyled>
        <img className="logo" src={Logo} alt="logo" />

        <div className="container-link">
          <NavLinkStyled to="/home/dashboard">
            <MdOutlineDashboard />
            Dashboard
          </NavLinkStyled>

          <NavLinkStyled to="/home/rooms">
            <TfiKey /> Rooms
          </NavLinkStyled>

          <NavLinkStyled to="/home/bookings">
            <LuCalendarCheck2 />
            Bookings
          </NavLinkStyled>

          <NavLinkStyled to="/home/users">
            <FaUsers />
            Users
          </NavLinkStyled>

          <NavLinkStyled to="/home/contact">
            <BsTelephoneInbound />
            Contact
          </NavLinkStyled>
        </div>
        <CardUserStyled>
          <img
            className="card-img"
            src="../../public/cardUser/bxs-user.svg"
            alt=""
          />
          <h3 className="card-name">Omar Perez</h3>
          <p className="card-email">test@test.com</p>
          <button className="card-button">Contact Us</button>
        </CardUserStyled>

        <div className="container-copyright">
          <h3 className="container-copyright__title">
            Travl Hotel Admin Dashboard
          </h3>
          <p className="container-copyright__subtitle">
            © 2020 All Rights Reserved
          </p>
          <p className="container-copyright__subtitle">
            Made with ♥ by Peterdraw
          </p>
        </div>
      </NavMenustyled>
    )
  );
};

export default NavMenu;
