import React from "react";
import BannerLogin from "./BannerLogin/BannerLogin";
import "./Login.scss";
import FormLogin from "./FormLogin/FormLogin";

export default function Login() {
  return (
    <div className="login">
      <div className="container_login">
        <div className="login-content">
          <div className="banner-login">
            <BannerLogin />
          </div>
          <div className="form-login">
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
