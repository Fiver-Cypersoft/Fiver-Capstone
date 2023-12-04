import React from "react";
import "./BannerRegister.scss";
import registerImg from "../../../assets/images/signup.png";
import { useDispatch } from "react-redux";
import { formLogin, setFormLogin } from "../../../redux/slice/loginFormSlice";

export default function BannerRegister() {
  const dispatch = useDispatch();
  return (
    <>
      <figure>
        <img src={registerImg} alt="" />
      </figure>
      <a
        href="/login"
        onClick={() => {
          dispatch(setFormLogin(formLogin));
        }}
        className="text-[#1dbf73] text-sm text-center"
      >
        I am already member
      </a>
    </>
  );
}
