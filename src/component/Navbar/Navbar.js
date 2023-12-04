import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userLocalStorage } from "../../api/localService";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userSlice);

  let handleLogOut = () => {
    userLocalStorage.remove();
    window.location.reload();
  };

  const renderItem = () => {
    if (user) {
      return (
        <>
          {user?.user.avatar ? (
            <div className="dropdown dropstart">
              <button
                type="button"
                className="btn-success text-justify "
                data-bs-toggle="dropdown"
              >
                <figure className="mb-0">
                  <img
                    src={user?.user.avatar}
                    alt="avatar"
                    className="avatar"
                    style={{
                      borderRadius: 50,
                      width: 50,
                      height: 50,
                    }}
                  />
                </figure>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <span
                    className="dropdown-item !text-black"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item !text-red-500"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown dropstart">
              <button
                type="button"
                className="btn-success text-justify "
                data-bs-toggle="dropdown"
              >
                <p className="text uppercase my-0 mx-0">{user?.user.name}</p>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <span
                    className="dropdown-item !text-black"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                  </span>
                </li>
                <li>
                  <span
                    className="dropdown-item !text-red-500"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </span>
                </li>
              </ul>
            </div>
          )}
        </>
      );
    } else {
      return (
        <NavLink to={"/login"}>
          <button className="btn-success text-justify">Sign in</button>
        </NavLink>
      );
    }
  };

  const renderItem2 = () => {
    if (user) {
      return (
        <li className="hidden">
          <NavLink to={"/register"}>
            <button className="btn-success">Join</button>
          </NavLink>
        </li>
      );
    } else {
      return (
        <li>
          <NavLink to={"/register"}>
            <button className="btn-success">Join</button>
          </NavLink>
        </li>
      );
    }
  };

  const renderItemNav = () => {
    if (user) {
      return (
        <div>
          {user.user.avatar ? (
            <figure className="mb-0 flex">
              <img
                src={user?.avatar}
                alt="avatar"
                className="nav_avatar"
                style={{ borderRadius: 50, width: 50, height: 50 }}
              />
              <div className="flex flex-col items-start mx-3">
                <h6 className="font-extrabold uppercase">{user?.user.name}</h6>
                <p>{user?.user.email}</p>
              </div>
            </figure>
          ) : (
            <div className="flex flex-col items-start my-3 mx-2">
              <h6 className="font-extrabold uppercase">{user?.user.name}</h6>
              <p>{user?.user.email}</p>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <NavLink to={"/login"} className="no-underline">
          <span href="" className="btn-header-res !text-sm">
            Sign in
          </span>
        </NavLink>
      );
    }
  };

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

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <header
      className={
        scrollPosition > 0 || location.pathname !== "/"
          ? "header"
          : "header header-active"
      }
    >
      <div className="header_wrapper">
        <div className="header_row">
          <div className="left">
            <>
              <button
                className="mr-5 text-2xl text-black btnBars"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <i className="fa fa-bars" />
              </button>
              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabIndex={-1}
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    {renderItemNav()}
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <li>
                    <a href="#top">Fiver Pro</a>
                  </li>
                  <li>
                    <a href="#top">Explore</a>
                  </li>
                  <li>
                    <a href="#top">Messages</a>
                  </li>
                  <li>
                    <a href="#top">List</a>
                  </li>
                  <li>
                    <a href="#top">Orders</a>
                  </li>
                  <div className="dropdown mt-3">
                    <span
                      className="dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        listStyle: "none",
                        margin: "0 10px",
                        padding: "15px 6px",
                        transition: "0.3s",
                        fontWeight: 600,
                        fontSize: 16,
                        color: "#74767e",
                        cursor: "pointer",
                      }}
                    >
                      <a
                        href="#top"
                        style={{
                          color: "#62646a",
                          fontSize: "24px",
                          fontWeight: 600,
                          marginBottom: "16px",
                          paddingBottom: "20px",
                          borderBottom: "1px solid #e4e5e7",
                          textDecoration: "none",
                        }}
                      >
                        Help &amp; Resources
                      </a>
                    </span>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                      style={{}}
                    >
                      <li>
                        <a className="dropdown-item" href="#top">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#top">
                          Fiverr Forum
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#top">
                          Fiverr Blogs
                        </a>
                      </li>
                      <div className="tW6GKQA">
                        <div className="Wb8wmFx" />
                      </div>
                      <li>
                        <a className="dropdown-item" href="#top">
                          Ask the Community
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#top">
                          Contact Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>

            <div className="header_logo cursor-pointer">
              <svg
                width="89"
                height="27"
                viewBox="0 0 89 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleBackHome}
              >
                <g
                  fill={
                    scrollPosition > 0 || location.pathname !== "/"
                      ? "#404145"
                      : "#fff"
                  }
                >
                  <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#1dbf73" className="dotblack">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                </g>
              </svg>
            </div>

            <div className="header_search">
              <form className="search_form">
                <div className="search">
                  <span>
                    <input
                      name="resultParam"
                      type="search"
                      className="inp"
                      placeholder="Find Services"
                    />
                  </span>
                </div>
                <button className="btn">Search</button>
              </form>
            </div>
          </div>
          <div className="right">
            <nav className="header_navbar">
              <ul className="ul">
                <li>
                  <a href="#top" className="fiver-link fiver-link-active">
                    Fiverr Business
                  </a>
                </li>
                <li>
                  <a href="#top" className="fiver-link">
                    Explore
                  </a>
                </li>
                <li>
                  <a href="#top" className="fiver-link">
                    <i className="fa fa-globe" aria-hidden="true"></i>English
                  </a>
                </li>
                <li>
                  <a href="#top" className="fiver-link">
                    US$ USD
                  </a>
                </li>
                <li>
                  <a href="#top" className="fiver-link">
                    Become a Seller
                  </a>
                </li>
                <li>{renderItem()}</li>
                {renderItem2()}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
