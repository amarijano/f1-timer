import React from "react";
import { LoginPageBody } from "../../containers/LoginPageBody";
import PageLayout from "../../layout/PageLayout";
import "./loginPage.scss";

const LoginPage = () => {
  return (
    <>
      <PageLayout>
        <LoginPageBody />
      </PageLayout>
    </>
  );
};

export default LoginPage;
