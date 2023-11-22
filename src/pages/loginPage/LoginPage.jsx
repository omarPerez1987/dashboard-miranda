import React from "react";
import CardUser from "../../components/general/CardUser";
import "./loginPage.css";

const LoginPage = () => {
  return (
    <section className="container-card">
      <h4 className="text-login">Email: test@test.com</h4>
      <h4 className="text-login">Password: 9999</h4>
      <CardUser />
    </section>
  );
};

export default LoginPage;
