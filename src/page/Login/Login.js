import React from "react";
import BannerLogin from "./BannerLogin/BannerLogin";
import "./Login.scss";
import FormLogin from "./FormLogin/FormLogin";

export default function Login() {
  return (
    <div className="login">
      <div className="container_login">
        <div className="login-content">
          <BannerLogin />
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
