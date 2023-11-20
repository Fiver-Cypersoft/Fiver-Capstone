import { Avatar, Card, Divider, Flex, Space } from "antd";
import React from "react";
import { AntDesignOutlined, EditOutlined } from "@ant-design/icons";
import "./style/Information.scss"; // Path to your Sass file

export default function Information() {
  return (
    <div className="container">
      <div>
        <Space direction="vertical" size={16}>
          <Card>
            <Flex gap="middle" align="center" vertical>
              <Avatar size={100} icon={<AntDesignOutlined />}></Avatar>
              <p className="card-email font-bold">chau@gmail.com</p>
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
                      <span className="text-xs">From</span>
                    </Flex>
                    <div>
                      <span className="text-xs">VietNam</span>
                    </div>
                  </Flex>
                </div>
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
                      <span className="text-xs">Member since</span>
                    </Flex>
                    <div>
                      <span className="text-xs">Oct2022</span>
                    </div>
                  </Flex>
                </div>
              </div>
            </Flex>
          </Card>
          <Card
            size="small"
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Space>
      </div>
    </div>
  );
}
