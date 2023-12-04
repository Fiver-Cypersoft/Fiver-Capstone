import React, { useEffect, useState } from "react";
import { loaiCVSevr } from "../../api/api";
import { Link, useParams } from "react-router-dom";

export default function Categories() {
  const { nameId } = useParams();
  const [data, setData] = useState([]);

  const getJobByCategory = async () => {
    try {
      const result = await loaiCVSevr.getJobByCateId(nameId);
      setData(result.data?.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobByCategory();
  }, [nameId]);
  console.log(data);
  return (
    <div className="my-36">
      <div className="container">
        <h1 className="text-[14px] text-[#74767e] ml-2">
          {data?.length} services is available
        </h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid-cols-4 mt-4 gap-4">
          {data?.map((item) => {
            return (
              <div className="border">
                <div className="p-2">
                  <img src={item?.congViec?.hinhAnh} />
                  <div className="flex mt-2 gap-2 items-center">
                    <div>
                      <img
                        className="rounded-full"
                        src={item?.avatar}
                        width={30}
                        height={"auto"}
                      />
                    </div>
                    <div>
                      <p className="font-bold mb-0">{item?.tenNguoiTao}</p>
                      <p className="mb-0 font-bold text-[#74767E]">
                        Level {item?.congViec?.saoCongViec} Seller
                      </p>
                    </div>
                  </div>
                  <p className="mt-4">{item?.congViec?.tenCongViec}</p>
                  <p className="mt-2 flex items-center gap-2 text-[#ffbe5b] font-bold">
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
                    {item?.congViec?.saoCongViec}
                    <span className="text-[#b5b6ba]">
                      ({item?.congViec?.danhGia})
                    </span>
                  </p>
                </div>
                <div className="border-t mt-8">
                  <div className="p-2 text-[#b5b6ba] flex font-bold items-center justify-between">
                    <svg
                      className="fill-[#b5b6ba]"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"></path>
                    </svg>
                    <p className="uppercase text-[10px] mb-0">
                      STARTING AT{" "}
                      <span className="text-[#74767E] text-[18px] font-bold">
                        $US{item?.congViec?.giaTien}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
