import { Col, Row } from "antd";
import React from "react";
import Information from "./Information";
import JobHired from "./JobHired";

export default function Profile() {
  return (
    <div className="profile container ">
      <div className="information">
        <Information />
      </div>
      <div className="job-hired">
        <JobHired />
      </div>
    </div>
  );
}
