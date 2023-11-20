import React from "react";
import { NavMenustyled } from "../componentsStyle/NavMenuStyled";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiKey } from "react-icons/tfi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { BsTelephoneInbound } from "react-icons/bs";
import { NavLinkStyled } from "../componentsStyle/NavLinkStyled";

const NavMenu = () => {
  return (
    <NavMenustyled>
      <img src="../../public/navMenu/logo-dashboard.png" alt="logo" />

      <div>
        <NavLinkStyled to="/dashboard">
          <MdOutlineDashboard />
          Dashboard
        </NavLinkStyled>

        <NavLinkStyled to="/rooms">
          <TfiKey /> Rooms
        </NavLinkStyled>

        <NavLinkStyled to="/bookings">
          <LuCalendarCheck2 />
          Bookings
        </NavLinkStyled>

        <NavLinkStyled to="/users">
          <FaUsers />
          Users
        </NavLinkStyled>

        <NavLinkStyled to="/contact">
          <BsTelephoneInbound />
          Contact
        </NavLinkStyled>
      </div>
    </NavMenustyled>
  );
};

export default NavMenu;
