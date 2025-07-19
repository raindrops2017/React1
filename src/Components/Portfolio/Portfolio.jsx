import Heading from "../Heading/Heading";
import port1 from "../../assets/images/port1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";

import style from "./Portfolio.module.css";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

export default function Portfolio() {
  let [image, setImage] = useState(port1);
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "Protfolio";
  }, []);

  return (
    <>
      <div className={`container ${style.portfolio}`}>
        <Heading
          title="Portfolio Component"
          textColor="text-second"
          bgColor="bg-second"
        />
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                className="w-100 rounded-3"
                src={port1}
                alt="portfolio pictuter"
              />
              <div
                onClick={() => {
                  setImage(port1);
                  setIsOpen(true);
                }}
                className={`${style.overlay} position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center bg-main`}
              >
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                className="w-100 rounded-3"
                src={port2}
                alt="portfolio pictuter"
              />
              <div
                onClick={() => {
                  setImage(port2);
                  setIsOpen(true);
                }}
                className={`${style.overlay} position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center bg-main`}
              >
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                className="w-100 rounded-3"
                src={port3}
                alt="portfolio pictuter"
              />
              <div
                onClick={() => {
                  setImage(port3);
                  setIsOpen(true);
                }}
                className={`${style.overlay} position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center bg-main`}
              >
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                className="w-100 rounded-3"
                src={port1}
                alt="portfolio pictuter"
              />
              <div
                onClick={() => {
                  setImage(port1);
                  setIsOpen(true);
                }}
                className={`${style.overlay} position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center bg-main`}
              >
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                className="w-100 rounded-3"
                src={port2}
                alt="portfolio pictuter"
              />
              <div
                onClick={() => {
                  setImage(port2);
                  setIsOpen(true);
                }}
                className={`${style.overlay} position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center bg-main`}
              >
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="rounded-3 overflow-hidden position-relative">
              <img
                className="w-100 rounded-3"
                src={port3}
                alt="portfolio pictuter"
              />
              <div
                onClick={() => {
                  setImage(port3);
                  setIsOpen(true);
                }}
                className={`${style.overlay} position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center bg-main`}
              >
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
        </div>

        <Modal image={image} open={isOpen} closeModal={setIsOpen} />
      </div>
    </>
  );
}
