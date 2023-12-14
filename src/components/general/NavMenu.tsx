import React, { useState} from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiKey } from "react-icons/tfi";
import { LuCalendarCheck2 } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import { NavMenustyled } from "../../componentsStyle/general/NavMenuStyled";
import { NavLinkStyled } from "../../componentsStyle/general/NavMenuStyled";
import { CardAdminStyled } from "../../componentsStyle/general/CardAdminStyled";
import Logo from "../../../public/navMenu/logo-dashboard.png";
import admin from "../../../public/cardAdmin/bxs-user.svg";
import ModalEditAdmin from "../modal/ModalEditAdmin";

const NavMenu = ({ menuOpen }) => {
  const adminData = JSON.parse(localStorage.getItem("formData"));

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
              <FaComments />
              Contact
            </NavLinkStyled>

            <NavLinkStyled to="/home/users">
              <FaUsers />
              Users
            </NavLinkStyled>
          </div>
          <CardAdminStyled>
            <img className="card-img" src={admin} alt="" />
            <h3 className="card-name">{adminData.name}</h3>
            <p className="card-email">{adminData.email}</p>
            <button className="card-button" onClick={() => setOpenModal(true)}>
              Edit
            </button>
          </CardAdminStyled>

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
      {openModal && <ModalEditAdmin setOpenModal={setOpenModal} />}
    </>
  );
};

export default NavMenu;
