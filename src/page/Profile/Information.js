import { Avatar, Card, Divider, Flex, Space } from "antd";
import React, { useEffect, useState } from "react";
import {
  AntDesignOutlined,
  ArrowRightOutlined,
  EditOutlined,
  FacebookFilled,
  GithubOutlined,
  GoogleOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./style/Profile.scss"; // Path to your Sass file
import { profileUser } from "../../api/api";

export default function Information() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    profileUser
      .getInfo()
      .then((res) => {
        setInfo(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div>
        <Space direction="vertical" size={16}>
          <Card>
            <Flex gap="middle" align="center" vertical>
              <Avatar
                src={info.avatar}
                size={100}
                icon={<AntDesignOutlined />}
              ></Avatar>
              <p className="card-email font-bold">{info.name}</p>
              <EditOutlined />
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
          <Card
            size="small"
            style={{
              width: 400,
            }}
          >
            <strong>Description</strong>
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
            </div>
            <Divider></Divider>
            <strong>Languages</strong>
            <div className="text-xs">
              <span>English</span>
              <ArrowRightOutlined style={{ fontSize: "10px", color: "gray" }} />
              <span className="text-gray-400">Basic</span>
            </div>
            <Divider />
            <strong>Skills</strong>
            <Divider />
            <strong>Education</strong>
            <Divider />
            <strong>Certification</strong>
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
            <Divider />
          </Card>
        </Space>
      </div>
    </div>
  );
}
