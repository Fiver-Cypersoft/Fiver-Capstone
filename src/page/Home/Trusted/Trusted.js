import React from "react";
import "./Trusted.scss";

export default function Trusted() {
  const classli = "m-[10px] max-w-[15%]";
  const imgArr = [
    {
      img: "https://demo5.cybersoft.edu.vn/img/fb.png",
      classname: "h-[70px] w-full",
      alt: "fb",
    },
    {
      img: "https://demo5.cybersoft.edu.vn/img/google.png",
      classname: "h-[70px] w-full",
      alt: "gg",
    },
    {
      img: "https://demo5.cybersoft.edu.vn/img/netflix.png",
      classname: "w-full",
      alt: "netflix",
    },
    {
      img: "https://demo5.cybersoft.edu.vn/img/pg.png",
      classname: "",
      alt: "pg",
    },
    {
      img: "https://demo5.cybersoft.edu.vn/img/paypal.png",
      classname: "h-[70px] w-full",
      alt: "paypal",
    },
  ];
  return (
    <section className="trusted-by bg-[#fafafa] relative max-w-full ">
      <div className="trusted-by-wrapper flex justify-center items-center container">
        <span className="text-[#b5b6ba] font-[600] pr-[20px]">Trusted by:</span>
        <ul className="flex trusted-by-logo items-center">
          {imgArr.map(({ img, className, alt }, index) => {
            return (
              <li className={classli} key={index}>
                <img src={img} alt={alt} className={className} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
