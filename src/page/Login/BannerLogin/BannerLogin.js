import React from "react";
import "./BannerLogin.scss";
import loginImg from "../../../assets/images/signin.png";

export default function BannerLogin() {
  return (
    <div className="login-image">
      <figure>
        <img src={loginImg} alt="" />
      </figure>
    </div>
  );
}
