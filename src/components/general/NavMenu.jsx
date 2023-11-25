import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiKey } from "react-icons/tfi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { BsTelephoneInbound } from "react-icons/bs";
import { NavMenustyled } from "../../componentsStyle/general/NavMenuStyled";
import { NavLinkStyled } from "../../componentsStyle/general/NavMenuStyled";
import { CardUserStyled } from "../../componentsStyle/general/CardUserStyled";
import Logo from "../../../public/navMenu/logo-dashboard.png";
import ModalEditClient from "../modal/ModalEditClient";

const NavMenu = ({ menuOpen }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {menuOpen && (
        <NavMenustyled>
          <img className="logo" src={Logo} alt="logo" />

          <div className="container-link">
            <NavLinkStyled to="/home/dashboard">
              <MdOutlineDashboard />
              Dashboard
            </NavLinkStyled>

            <NavLinkStyled to="/home/bookings">
              <LuCalendarCheck2 />
              Bookings
            </NavLinkStyled>

            <NavLinkStyled to="/home/rooms">
              <TfiKey /> Rooms
            </NavLinkStyled>

            <NavLinkStyled to="/home/contact">
              <BsTelephoneInbound />
              Contact
            </NavLinkStyled>

            <NavLinkStyled to="/home/users">
              <FaUsers />
              Users
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
            <button className="card-button" onClick={() => setOpenModal(true)}>
              Edit
            </button>
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
      )}
      {openModal && <ModalEditClient setOpenModal={setOpenModal}/>}
    </>
  );
};

export default NavMenu;
