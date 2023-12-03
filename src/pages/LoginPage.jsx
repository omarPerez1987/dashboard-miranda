import React from "react";
import { LoginStyled } from "../componentsStyle/general/LoginStyled";
import CardAdmin from "../components/general/CardAdmin";

const LoginPage = () => {
  return (
    <LoginStyled>
      <h4 className="text-login">Email: test@test.com</h4>
      <h4 className="text-login">Password: 9999</h4>
      <CardAdmin />
    </LoginStyled>
  );
};

export default LoginPage;
