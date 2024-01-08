import React from "react";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FormCreateUser from "../components/forms/FormCreateUser";

const NewUserPage = () => {
  return (
    <MainStyled>
      <FormCreateUser />
    </MainStyled>
  );
};

export default NewUserPage;
