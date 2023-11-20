import { Col, Row } from "antd";
import React from "react";
import Information from "./Information";

export default function Profile() {
  return (
    <div className="container">
      <Row>
        <Col span={12}>
          <Information />
        </Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  );
}
