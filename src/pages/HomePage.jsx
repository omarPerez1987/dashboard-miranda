import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavMenu from "../components/general/NavMenu";
import { HomeStyled } from "../componentsStyle/general/HomeStyled";
import TopMenu from "../components/general/TopMenu";
import { ColumnStyled } from "../componentsStyle/general/ColumnStyled";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const hiddenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const location = useLocation();
  const [title, setTitle] = useState("Dashboard");

  useEffect(() => {
    switch (location.pathname) {
      case "/home/dashboard":
        setTitle("Dashboard");
        break;

      case "/home/bookings":
        setTitle("Bokkings List");
        break;

      case "/home/new-booking":
        setTitle("Create Booking");
        break;

      case "/home/rooms":
        setTitle("Room List");
        break;

      case "/home/contact":
        setTitle("Contact List");
        break;

      case "/home/users":
        setTitle("Users List");
        break;

      case "/home/new-user":
        setTitle("Create User");
        break;

      case "/home/new-room":
        setTitle("Create Room");
        break;
    }
  }, [location.pathname]);

  return (
    <HomeStyled>
      <NavMenu menuOpen={menuOpen} />
      <ColumnStyled>
        <TopMenu hiddenMenu={hiddenMenu} menuOpen={menuOpen} title={title} />
        <Outlet />
      </ColumnStyled>
    </HomeStyled>
  );
};

export default HomePage;
