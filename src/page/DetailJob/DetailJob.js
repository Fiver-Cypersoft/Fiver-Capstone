import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loaiCVSevr } from "../../api/api";

export default function DetailJob() {
  const [job, setJob] = useState({});
  const [comment, setComment] = useState([]);

  const { id } = useParams();
  console.log(id);
  const getJobById = async () => {
    try {
      const result = await loaiCVSevr.getJobDetailById(id);
      setJob(result.data?.content?.[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getCommentByJobId = async () => {
    try {
      const result = await loaiCVSevr.getCommentByJob(id);
      setComment(result.data?.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobById();
    getCommentByJobId();
  }, []);
  return (
    <div className="my-36">
      <div className="container">
        <div className="flex gap-4">
          <div style={{ flex: 7 }}>
            <div className="flex mt-2 gap-2 items-center">
              <div>
                <img className="rounded-full" src={job?.avatar} width={30} height={"auto"} />
              </div>
              <div>
                <p className="font-bold mb-0">{job?.tenNguoiTao}</p>
              </div>
              <div>
                <p className="mb-0 font-bold text-[#74767E]">
                  Level {job?.congViec?.saoCongViec} Seller
                </p>
              </div>
              <div className="ml-2 flex gap-1">
                {[...Array(job?.congViec?.saoCongViec).keys()].map((item) => {
                  return (
                    <p className="mb-0 flex items-center gap-2 text-[#ffbe5b] font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1792 1792"
                        width="15"
                        height="15"
                      >
                        <path
                          fill="#ffbe5b"
                          d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                        ></path>
                      </svg>
                    </p>
                  );
                })}
                {[...Array(5 - job?.congViec?.saoCongViec || 0).keys()].map((item) => {
                  return (
                    <p className="mb-0 flex items-center gap-2 text-[#aeaeae] font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1792 1792"
                        width="15"
                        height="15"
                      >
                        <path
                          fill="#aeaeae"
                          d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                        ></path>
                      </svg>
                    </p>
                  );
                })}
                {job?.congViec?.saoCongViec}
                <span className="text-[#b5b6ba] font-bold">({job?.congViec?.danhGia})</span>
              </div>
            </div>
            <div className="mt-4 w-[100%] overflow-hidden">
              <img
                src={job?.congViec?.hinhAnh}
                className="w-[100%] hover:scale-110"
                style={{ transition: "0.4s" }}
              />
            </div>
            <div className="mt-6">
              <h1 className="font-bold text-[24px]">About this Gig</h1>
              <p className="mt-4 text-[18px] text-[#62646A]">{job?.congViec?.moTa}</p>
            </div>
            <hr />
            <div>
              <h1 className="font-bold mt-4 text-[24px]">About the Author</h1>

              <div className="flex mt-6 gap-3 items-center">
                <div>
                  <img className="rounded-full" src={job?.avatar} width={105} height={"auto"} />
                </div>
                <div>
                  <p className="font-bold mb-0 text-[20px]">{job?.tenNguoiTao}</p>
                  <p className="mb-0 font-bold text-[#74767E]">
                    Level {job?.congViec?.saoCongViec} Seller
                  </p>
                  <div className="flex gap-1">
                    {[...Array(job?.congViec?.saoCongViec).keys()].map((item) => {
                      return (
                        <p className="mb-0 flex items-center gap-2 text-[#ffbe5b] font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1792 1792"
                            width="15"
                            height="15"
                          >
                            <path
                              fill="#ffbe5b"
                              d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                            ></path>
                          </svg>
                        </p>
                      );
                    })}
                    {[...Array(5 - job?.congViec?.saoCongViec || 0).keys()].map((item) => {
                      return (
                        <p className="mb-0 flex items-center gap-2 text-[#aeaeae] font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1792 1792"
                            width="15"
                            height="15"
                          >
                            <path
                              fill="#aeaeae"
                              d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                            ></path>
                          </svg>
                        </p>
                      );
                    })}
                    {job?.congViec?.saoCongViec}
                    <span className="text-[#b5b6ba] font-bold">({job?.congViec?.danhGia})</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-12" />
            <div className="mt-2">
              {comment.map((item) => {
                return (
                  <>
                    <div className="flex mt-6 gap-3 items-center">
                      <div>
                        <img
                          className="rounded-full"
                          src={item?.avatar || job?.avatar}
                          width={105}
                          height={"auto"}
                        />
                      </div>
                      <div>
                        <p className="flex items-center  gap-2 font-bold mb-0 text-[24px]">
                          {item?.tenNguoiBinhLuan}
                          <p className="mb-0 flex items-center gap-2 text-[#ffbe5b] font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1792 1792"
                              width="20"
                              height="20"
                            >
                              <path
                                fill="#ffbe5b"
                                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                              ></path>
                            </svg>
                          </p>
                          <span className="text-[16px] font-bold">
                            {job?.congViec?.saoCongViec}
                          </span>
                          <span className="text-[#b5b6ba] text-[16px] font-bold">
                            ({job?.congViec?.danhGia})
                          </span>
                        </p>
                        <p className="mb-0 font-bold flex mt-2 text-[16px] gap-1">
                          <img
                            width="20"
                            height="20"
                            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png"
                            alt=""
                            className="country-flag"
                          />
                          Switzerland
                        </p>
                        <p className="mt-4">{item?.noiDung}</p>
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
          </div>

          <div className="md:min-w-[428px] min-w-0" style={{ flex: 3 }}>
            <div className=" border p-4 text-[14px] text-[#64626A]">
              <p>
                LinkedIn page US$10 LinkedIn business page create and setup 3 Days Delivery Target
                audience research Automated feed ads (DPA) Ads analytical report 3 days
              </p>
              <div className="additional-info d-flex gap-4 mb-3">
                <div className="delivery d-flex align-items-center gap-1 font-bold">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                    <path d="M9 4H7v5h5V7H9V4z"></path>
                  </svg>
                  <span>14 Days Delivery</span>
                </div>
                <div className="revision d-flex align-items-center gap-1 font-bold">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                    <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                  </svg>
                  <span>Unlimited Revisions</span>
                </div>
              </div>
              <div>
                <ul className="fearture m-0 p-0">
                  <li className="d-flex align-items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 11 9"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#1dbf73"
                    >
                      <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                    </svg>
                    <span>Good fearture</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 11 9"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#1dbf73"
                    >
                      <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                    </svg>
                    <span>Good fearture</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 11 9"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#1dbf73"
                    >
                      <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                    </svg>
                    <span>Good fearture</span>
                  </li>
                </ul>
              </div>
              <div className="check-out-footer">
                <button type="button" className="submit">
                  Continue (US$10)
                </button>
                <a href="#compare" className="compare">
                  Compare Packages
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
