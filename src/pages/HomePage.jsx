import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../components/general/NavMenu";
import { HomeStyled } from "../componentsStyle/general/HomeStyled";
import TopMenu from "../components/general/TopMenu";
import { ColumnStyled } from "../componentsStyle/general/ColumnStyled";

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
