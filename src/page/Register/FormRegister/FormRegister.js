import React from "react";
import { Button, Checkbox, DatePicker, Form, Input, Select, message } from "antd";
import { LockFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import moment from "moment";
import { authSevr } from "../../../api/api";
import { useDispatch } from "react-redux";
import { formLogin, setFormLogin } from "../../../redux/slice/loginFormSlice";
import { useNavigate } from "react-router-dom";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const FormRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (registerInfo) => {
    const initialValues = {
      email: registerInfo.email,
      password: registerInfo.password,
      passwordConfirm: registerInfo.confirm,
      name: registerInfo.name,
      phone: registerInfo.phone,
      birthday: moment(registerInfo.birthday).format("DD/MM/YYYY"),
      gender: true,
    };

    authSevr
      .signup(initialValues)
      .then((res) => {
        message.success("Đăng ký thành công");
        dispatch(setFormLogin(formLogin));
        navigate("/login");
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="p-5">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "84",
        }}
        style={{
          maxWidth: "100%",
          padding: "0 20px",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label={<i className="fa fa-user" aria-hidden="true"></i>}
          rules={[
            {
              required: true,
              message: "Please input your Name!",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Your Name" />
        </Form.Item>

        <Form.Item
          name="email"
          label={<MailFilled />}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Your Email" />
        </Form.Item>

        <Form.Item
          name="password"
          label={<LockFilled className="site-form-item-icon" />}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Your Password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label={<i className="fa fa-key" aria-hidden="true"></i>}
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The new password that you entered do not match!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Repeat Your Password" />
        </Form.Item>

        <Form.Item
          name="phone"
          label={<PhoneFilled className="site-form-item-icon" />}
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
            placeholder="Your Phone"
          />
        </Form.Item>

        <Form.Item
          name="birthday"
          label={<i className="fa fa-birthday-cake" aria-hidden="true"></i>}
        >
          <DatePicker placeholder="YYYY/MM/DD" />
        </Form.Item>

        <Form.Item
          name="gender"
          label={<i className="fa fa-venus-mars" aria-hidden="true"></i>}
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value={true}>
              <i className="fa fa-mars" aria-hidden="true"></i>
              <span className="mx-1">Male</span>
            </Option>
            <Option value={false}>
              <i className="fa fa-venus" aria-hidden="true"></i>
              <span className="mx-1">Female</span>
            </Option>
            {/* <Option value="other">
              <i className="fa fa-mars" aria-hidden="true"></i>
              <span className="mx-1">other</span>
            </Option> */}
          </Select>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I agree all statements in
            <a href="#check" className="text-blue-400 mx-1">
              Terms of service
            </a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#1dbf73] ease-in-out duration-300 font-medium w-[100px] h-[50px] my-[30px]
            hover:!bg-white hover:!shadow-[2px_2px_4px_2px_#1dbf73] hover:!text-[#1dbf73]
            "
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormRegister;
