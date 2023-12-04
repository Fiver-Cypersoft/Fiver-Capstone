import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { authSevr } from "../../../api/api";
import { userLocalStorage } from "../../../api/localService";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/slice/userSlice";
import {
  formRegister,
  setFormLogin,
} from "../../../redux/slice/loginFormSlice";
import "./FormLogin.scss";

const FormLogin = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    authSevr
      .signin(values)
      .then((res) => {
        const user = res.data.content;
        message.success("Đăng nhập thành công");
        // Save local
        userLocalStorage.set(user);
        // Save redux
        dispatch(setLogin(user));
        // Back Home
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        message.success("Đăng nhập thất bại");
      });
  };
  return (
    <>
      <div className="form_title mb-[50px]">
        <h2 className="text-[#1dbf73] text-[2rem] ml-[50px] font-[700] my-5">
          Sign In to Fiverr
        </h2>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label={<UserOutlined className="site-form-item-icon" />}
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          label={<LockOutlined className="site-form-item-icon" />}
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item className="mt-[100px]">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button !bg-[#1dbf73] border-none rounded-[50px] text-white text-[16px] h-[45px] w-[110px] mr-[5px] uppercase !transition-all !ease-in-out !duration-300 hover:!bg-[#188652] hover:!translate-y-[-0.25em] hover:!shadow-[2px_2px_4px_2px_#d3d6d4]"
          >
            Login
          </Button>
          <a
            href="/register"
            className="text-[14px] text-[#1dbf73]"
            onClick={() => {
              dispatch(setFormLogin(formRegister));
            }}
          >
            Or register now!
          </a>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormLogin;
