import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

export default function VideoModal2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imgVideo = "https://demo5.cybersoft.edu.vn/img/testimonial2.png";
  return (
    <>
      <Button className="modal-btn btn btn-none p-0" onClick={handleShow}>
        <img className="modal-img" src={imgVideo} alt="..."></img>
      </Button>

      <Modal
        className="fade modal-show modal-lg modal show"
        show={show}
        onHide={handleClose}
        size="lg"
        centered
      >
        <div className="video-selling">
          <ReactPlayer
            url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl"
            width="100%"
            height="auto"
            playing={true}
            controls={false}
          />
        </div>
      </Modal>
    </>
  );
}
