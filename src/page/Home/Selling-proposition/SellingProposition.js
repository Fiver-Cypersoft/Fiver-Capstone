import React from "react";
import "./SellingProposition.scss";

export default function SellingProposition() {
  const imgVideo = "https://demo5.cybersoft.edu.vn/img/selling.png";
  return (
    <section className="selling-proposition-wrapper">
      <div className="selling-proposition container">
        <div className="row align-items-center justify-content-between">
          <div className="selling-text col-12 col-md-12 col-lg-5 col-xl-5">
            <h2>A whole world of freelance talent at your fingertips</h2>
            <ul className="ul-selling">
              <li>
                <h6>
                  <i
                    className="fa fa-check-circle-o"
                    style={{
                      color: "rgb(122, 125, 133)",
                      fontSize: 20,
                      marginRight: 3,
                    }}
                    aria-hidden="true"
                  ></i>
                  The best for every budget
                </h6>
                <p>
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </li>
              <li>
                <h6>
                  <i
                    className="fa fa-check-circle-o"
                    style={{
                      color: "rgb(122, 125, 133)",
                      fontSize: 20,
                      marginRight: 3,
                    }}
                    aria-hidden="true"
                  ></i>
                  Quality work done quickly
                </h6>

                <p>
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </li>
              <li>
                <h6>
                  <i
                    className="fa fa-check-circle-o"
                    style={{
                      color: "rgb(122, 125, 133)",
                      fontSize: 20,
                      marginRight: 3,
                    }}
                    aria-hidden="true"
                  ></i>
                  Protected payments, every time
                </h6>
                <p>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </li>
              <li>
                <h6>
                  <i
                    className="fa fa-check-circle-o"
                    style={{
                      color: "rgb(122, 125, 133)",
                      fontSize: 20,
                      marginRight: 3,
                    }}
                    aria-hidden="true"
                  ></i>
                  24/7 support
                </h6>
                <p>
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div className="selling-video col-12 col-md-12 col-lg-7 col-xl-7">
            <>
              {/* Button to Open the Modal */}
              <button
                type="button"
                className="modal-btn btn btn-none"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                <img className="modal-img" src={imgVideo} alt="..." />
              </button>
              {/* The Modal */}
              <div className="modal" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="video-selling w-[1200px]">
                      <div style={{ width: "100%", height: "auto" }}>
                        <video
                          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                          preload="auto"
                          autoPlay
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
