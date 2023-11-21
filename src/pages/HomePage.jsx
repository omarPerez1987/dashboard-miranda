import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import { HomeStyled } from "../componentsStyle/HomeStyled";
import TopMenu from "../components/TopMenu";
import { ColumnStyled } from "../componentsStyle/ColumnStyled";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const hiddenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HomeStyled>
      <NavMenu menuOpen={menuOpen}/>
      <ColumnStyled>
        <TopMenu hiddenMenu={hiddenMenu} menuOpen={menuOpen} />
        <Outlet />
      </ColumnStyled>
    </HomeStyled>
  );
};

export default HomePage;
