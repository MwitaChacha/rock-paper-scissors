import React from "react";
import "./Footer.css";
import rules from "./../../assets/images/image-rules.svg";
import close from "./../../assets/images/icon-close.svg";

const Footer = () => {
  return (
    <div>
      <div className="">
        <label
          htmlFor="my-modal-6"
          className="rule text-white tracking-widest border rounded-md px-10 py-2 m-10 bottom-0 md:right-0 fixed sm:justify-self-center sm:mt-16"
        >
          RULES
        </label>

        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle sm:h-screen">
          <div className="modal-box relative bg-white md:w-96 md:h-80 xs:w-screen xs:h-screen">
            <div className="flex my-2 ">
              <h6 className="dark-text text-xl">RULES</h6>
              <label
                htmlFor="my-modal-6"
                className="absolute right-2 top-2 m-5 mt-7"
              >
                <img src={close} alt="" />
              </label>
            </div>
            <img
              src={rules}
              alt="rules of the rock paper scissors game"
              className="mx-auto w-3/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
