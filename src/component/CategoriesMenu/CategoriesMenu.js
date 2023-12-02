import React, { useEffect, useState } from "react";
import { congViecServ } from "../../api/api";
import "./CategoriesMenu.scss";
import { NavLink, useLocation } from "react-router-dom";
import { convertToSlug } from "../Header/utils";
import { route } from "../../App";

export default function CategoriesMenu() {
  const [listTitle, setListTitle] = useState([]);
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    congViecServ
      .getMenuLoaiCV()
      .then((res) => {
        setListTitle(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      if (location.pathname === "/") {
        setScrollPosition(window.pageYOffset);
      } else if (location.pathname !== "/") {
        setScrollPosition(0);
      }
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [location.pathname]);

  const makeUrlPath = (id, tenChiTiet) => {
    let slug = convertToSlug(tenChiTiet);
    return route.categories.nameId(`${slug}-${id}`);
  };

  const renderItemDetail = (listItem) => {
    return listItem.map(({ id, tenChiTiet }) => {
      return (
        <NavLink
          to={makeUrlPath(id, tenChiTiet)}
          key={id}
          style={{ textDecoration: "none" }}
        >
          <span
            className="categoriesmenu_li_jobdetail_detail_job container"
            href="#top"
          >
            {tenChiTiet}
          </span>
        </NavLink>
      );
    });
  };

  const renderTitelDetail = (list) => {
    return list.map((item, index) => {
      return (
        <div className="container-fluid flex flex-col" key={index}>
          <p className="categoriesmenu_li_jobdetail_detail container">
            {item.tenNhom}
          </p>
          {renderItemDetail(item.dsChiTietLoai)}
        </div>
      );
    });
  };
  return (
    <section
      className={
        scrollPosition > 0 || location.pathname !== "/"
          ? "CategoriesMenu CategoriesMenu-active"
          : "CategoriesMenu "
      }
    >
      <div className="categoriesmenu_wrapper">
        <nav className="categoriesmenu_row">
          <div className="categoriesmenu_ul ">
            {listTitle.slice(0, 6).map((item, index) => {
              return (
                <div className="categoriesmenu_li" key={index}>
                  <a className="links mb-0" href="#top">
                    <p className="mb-0">{item.tenLoaiCongViec}</p>
                  </a>
                  <div className="categoriesmenu_li_jobdetail categoriesmenu_li_jobdetail_1">
                    {renderTitelDetail(item.dsNhomChiTietLoai)}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
}
