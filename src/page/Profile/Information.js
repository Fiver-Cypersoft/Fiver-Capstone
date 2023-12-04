import {
  Avatar,
  Button,
  Card,
  DatePicker,
  Divider,
  Flex,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Select,
  Space,
  Upload,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  ArrowRightOutlined,
  CameraFilled,
  EditOutlined,
  FacebookFilled,
  GithubOutlined,
  GoogleOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style/Profile.scss"; // Path to your Sass file
import { profileUser } from "../../api/api";
import { Option } from "antd/es/mentions";

export default function Information() {
  const [info, setInfo] = useState({});
  const [open, setOpen] = useState(false);
  const [certification, setCertification] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    profileUser
      .getInfo()
      .then((res) => {
        setInfo(res.data.content);
        setCertification(res.data.content.certification || []);
        setSkills(res.data.content.skill || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // avatar
  const fetchInfo = () => {
    profileUser
      .getInfo()
      .then((res) => {
        setInfo(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const customRequest = ({ file }) => {
    let formData = new FormData();
    formData.append("formFile", file);
    profileUser
      .uploadAvatar(formData)
      .then((res) => {
        console.log(res);
        fetchInfo();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //modal EDIT
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = (e) => {
    console.log("Info certification:", info.certification);
    console.log("Info skills:", info.skill);
    fetchInfo();
    setCertification(info.certification);
    setSkills(info.skill);
    setOpen(false);
  };
  //Form
  const onFinish = (values) => {
    let infoEdit = {
      id: info.id,
      name: values.name,
      email: values.email,
      birthday: values.birthday,
      gender: values.gender,
      certification: values.certification,
      skill: values.skill,
    };
    profileUser
      .editInfo(info.id, infoEdit)
      .then((res) => {
        console.log(res);
        message.success("Edit successfully");
        fetchInfo();
        setCertification(infoEdit.certification);
        setSkills(infoEdit.skill);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //

  return (
    <div className="container ">
      <Modal
        centered
        open={open}
        okButtonProps={{
          style: { display: "none" },
        }}
        cancelButtonProps={{
          style: { display: "none" },
        }}
      >
        <p className="text-black font-medium text-center text-xl">UPDATE USER</p>
        <Divider></Divider>

        <div>
          <Form
            name="demo-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
          >
            <Form.Item
              label="Email"
              name="email"
              initialValue={info.email}
              disabled
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input prefix={<MailOutlined />} />
            </Form.Item>

            <Form.Item option label="Phone" name="phone" initialValue={info.phone}>
              <Input prefix={<PhoneOutlined />} />
            </Form.Item>

            <Form.Item label="Name" name="name" initialValue={info.name} option>
              <Input prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item label="Birthday" name="birthday" initialValue={info.birthday}>
              <Input style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item label="Gender" name="gender">
              <Radio.Group defaultValue={info.gender}>
                <Radio value={true}>Male</Radio>
                <Radio value={false}>Female</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Certification"
              name="certification"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select
                mode="tags"
                placeholder="Select or create"
                value={certification}
                defaultValue={certification}
                onChange={(value) => setCertification(value)}
              >
                {certification &&
                  certification.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Skills"
              name="skill"
              rules={[
                {
                  required: false,
                  message: "Please enter your skills!",
                },
              ]}
            >
              <Select
                mode="tags"
                placeholder="Select or create"
                value={skills}
                defaultValue={skills}
                // onChange={(value) => setSkills(value)}
              >
                {skills &&
                  skills.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
              <Button type="primary" className="bg-blue-400" htmlType="submit">
                Submit
              </Button>

              <Button
                type="button"
                className="bg-red-500 text-white hover:bg-red-600 ml-5"
                onClick={handleCancel}
              >
                Close
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <div>
        <Space direction="vertical" size={16} className="info-all">
          <Card>
            <Flex gap="middle" align="center" vertical>
              <div className="relative upload-file">
                <Upload
                  customRequest={customRequest}
                  showUploadList={false}
                  accept="image/*" // Allow only image files
                >
                  <Avatar size={150} src={info.avatar} style={{ cursor: "pointer" }}></Avatar>

                  <CameraFilled className="add-avatar" />
                </Upload>
              </div>
              <p className="card-email font-bold">{info.email}</p>
              <Divider />

              <div className="w-full">
                <div>
                  <Flex align="center" justify="space-between">
                    <Flex>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="location-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="text-xs ">From</span>
                    </Flex>
                    <div>
                      <span className="text-xs font-bold">VietNam</span>
                    </div>
                  </Flex>
                </div>
                <div>
                  <Flex align="center" justify="space-between">
                    <div>
                      <UserOutlined />
                      <span className="text-xs ">Member since</span>
                    </div>

                    <div>
                      <span className="text-xs font-bold">Oct2022</span>
                    </div>
                  </Flex>
                </div>
              </div>
            </Flex>
          </Card>
          <Card size="small" className="info-all">
            <Flex justify="space-between">
              <strong>Description</strong>
              <div>
                <EditOutlined onClick={() => showModal()} />
              </div>
            </Flex>

            <div className="space-y-5">
              <Flex wrap="wrap" justify="space-between">
                <span className="text-xs">Name:</span>
                <span className="text-xs">{info.name}</span>
              </Flex>
              <Flex wrap="wrap" justify="space-between">
                <span className="text-xs">Phone:</span>
                <span className="text-xs">{info.phone}</span>
              </Flex>
              <Flex wrap="wrap" justify="space-between">
                <span className="text-xs">Birthday:</span>
                <span className="text-xs">{info.birthday}</span>
              </Flex>
              <Flex wrap="wrap" justify="space-between">
                <span className="text-xs">Gender:</span>
                <span className="text-xs">{info.gender ? "Male" : "Female"}</span>
              </Flex>
            </div>
            <Divider></Divider>
            <strong>Languages</strong>
            <div className="text-xs">
              <span>English</span>
              <ArrowRightOutlined style={{ fontSize: "10px", color: "gray" }} />
              <span className="text-gray-400">Basic</span>
            </div>
            <Divider />
            <strong>Certification</strong>
            {certification &&
              certification.map((cer) => {
                return <p>{cer}</p>;
              })}

            <Divider />
            <strong>Education</strong>
            <Divider />
            <strong>Skills</strong>
            {skills &&
              skills.map((skill) => {
                return <p>{skill}</p>;
              })}
            <Divider />
            <strong>Linked Acounts</strong>
            <div className="text-xs space-y-3 mt-3">
              <p>
                <FacebookFilled /> <a>facebook</a>
              </p>
              <p>
                <GoogleOutlined /> <a>google</a>
              </p>
              <p>
                <GithubOutlined /> <a>github</a>
              </p>
              <p>
                <FacebookFilled /> <a>facebook</a>
              </p>
              <p>
                <TwitterOutlined /> <a>twitter</a>
              </p>
            </div>
          </Card>
        </Space>
      </div>
    </div>
  );
}
