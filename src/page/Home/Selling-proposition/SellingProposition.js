import React from "react";
import "./SellingProposition.scss";
import VideoModal from "../../../component/Video/VideoModal";

export default function SellingProposition() {
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
            <VideoModal />
          </div>
        </div>
      </div>
    </section>
  );
}
