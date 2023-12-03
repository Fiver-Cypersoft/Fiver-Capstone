import React, { useEffect, useState } from "react";
import { Card, Flex, Space, message } from "antd";
import { profileUser } from "../../api/api";
import { userLocalStorage } from "../../api/localService";

export default function JobHired() {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    profileUser
      .getCongViecDaThue()
      .then((res) => {
        setJobList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let handleFetchJobList = () => {
    profileUser
      .getCongViecDaThue()
      .then((res) => {
        setJobList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    profileUser
      .deleteCongViecDaThue(id)
      .then((res) => {
        console.log(res);
        message.success("delete success");
        handleFetchJobList();
      })
      .catch((err) => {
        message.error("delete fail");

        console.log(err);
      });
  };

  const renderJobList = () => {
    return jobList.map((job) => {
      return (
        <Card style={{ width: "750px" }}>
          <Flex>
            <img className="job-hired-image" src={job.congViec.hinhAnh} alt="" />
            <div className="pl-5">
              <p className="font-semibold ">{job.congViec.tenCongViec}</p>
              <p>{job.congViec.moTaNgan}</p>
              <Flex justify="space-between">
                <Flex align="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="red"
                    className="w-3 h-3"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                  <span className="pl-2">{job.congViec.saoCongViec}</span>
                </Flex>
                <span>${job.congViec.giaTien}</span>
              </Flex>
              <Flex justify="flex-end" className="space-x-2">
                <button className="bg-green-500 px-2 py-1 text-white font-bold rounded">
                  View detail
                </button>
                <button
                  onClick={() => {
                    handleDelete(job.id);
                  }}
                  className="bg-red-500 px-2 py-1 text-white font-bold rounded"
                >
                  Delete
                </button>
              </Flex>
            </div>
          </Flex>
        </Card>
      );
    });
  };
  return (
    <div>
      <Space direction="vertical" size={16}>
        {renderJobList()}
      </Space>
    </div>
  );
}
