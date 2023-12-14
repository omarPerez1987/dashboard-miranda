import React from "react";
import { LoginStyled } from "../componentsStyle/general/LoginStyled";
import CardAdmin from "../components/general/CardAdmin";

const LoginPage = () => {
  return (
    <LoginStyled>
      <div className="text-login">
        <span className="loader"></span>
        <h4>Email: test@test.com</h4>
        <h4>Password: 9999</h4>
      </div>
      <CardAdmin />
    </LoginStyled>
  );
};

export default LoginPage;
