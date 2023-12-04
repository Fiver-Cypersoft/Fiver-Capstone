import React from "react";
import BannerRegister from "./BannerRegister/BannerRegister";
import FormRegister from "./FormRegister/FormRegister";
import "./Register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="container_register">
        <h2 className="uppercase text-center text-3xl font-medium text-[#1dbf73] my-5">
          register
        </h2>
        <div className="register-content">
          <div className="form-register">
            <FormRegister />
          </div>
          <div className="banner-register">
            <BannerRegister />
          </div>
        </div>
      </div>
    </div>
  );
}
