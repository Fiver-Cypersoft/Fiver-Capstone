import { Link, useParams } from "react-router-dom";
import { loaiCVSevr } from "../../api/api";
import { useEffect, useState } from "react";

const Title = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getJobType = async () => {
    try {
      const result = await loaiCVSevr.getJobTypeDetail(id);
      setData(result.data?.content?.[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobType();
  }, [id]);
  console.log(data);
  return (
    <div className="mt-36">
      <div className="container">
        <h1 className="text-[24px]">Explore {data?.tenLoaiCongViec}</h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid-cols-4 mt-4 gap-2">
          {data.dsNhomChiTietLoai?.map((item) => {
            return (
              <div className="">
                <img src={item?.hinhAnh} className="w-full" />
                <h2 className="font-[20px] mt-[20px]">{item.tenNhom}</h2>
                <ul className="list-none p-0 mt-4">
                  {item?.dsChiTietLoai?.map((detail) => (
                    <Link
                      className=" no-underline text-[#62646A] text-[18px]"
                      to={`/categories/${detail.id}`}
                    >
                      <li className="p-1 hover:bg-[#f5f5f5]">
                        {detail?.tenChiTiet}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Title;
