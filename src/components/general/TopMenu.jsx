import React from "react";
import { TopMenuStyled } from "../../componentsStyle/general/TopMenuStyled";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegBell } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

const TopMenu = ({ hiddenMenu, menuOpen, title }) => {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };

  return (
    <TopMenuStyled>
      <div>
        <button onClick={hiddenMenu}>
          {menuOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
        <h1>{title}</h1>
      </div>
      <div className="container-right">
        <HiOutlineMail />
        <FaRegBell />
        <button onClick={goToLogin}>
          <RiLoginBoxLine />
        </button>
      </div>
    </TopMenuStyled>
  );
};

export default TopMenu;
