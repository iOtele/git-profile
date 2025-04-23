import React from "react";
import NavigationCircle from "./NavigationCircle";

const Contact = () => {
  return (
    <>
      <div id="contact" className="h-[90vh] flex flex-col pt-10  items-center ">
        <h2 className="text-4xl font-light md:mb-32 mb-24">Connect with ME</h2>
        <div className="flex flex-col lg:flex-row md:gap-x-40 gap-x-8 lg:gap-y-0 gap-y-8 lg:mb-0 mb-20 ">
          <div className="flex flex-col flex-1">
            <h1 className="text-3xl md:text-4xl font-bold py-2">Hire Me...</h1>
            <p className="text-lg md:text-xl py-3.5 font-semibold ">
              I'm currently available to take on new projects, so if{" "}
            </p>
            <div className="flex items-center space-x-4 py-3">
              <i className="bx bx-mail-send"></i>
              <p>lekanbiodun2@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4 py-3">
              <i className="bx bx-phone-call"></i>
              <p>+234-703-722-2562</p>
            </div>
            <div className="flex items-center space-x-4 py-3">
              <i className="bx bxl-whatsapp"></i>
              <p>+234-703-722-2562</p>
            </div>
            <div className="flex items-center space-x-4 py-3">
              <i className="bx bx-current-location"></i>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <form className="flex flex-col lg:space-y-12 space-y-8">
              <input
                type="email"
                placeholder="Email"
                className="md:w-[400px] w-[300px] h-13 pl-3 text-lg outline-o border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500"
              />
              <textarea
                placeholder="Message"
                className="md:w-[400px] w-[330px] h-13 pl-3 text-lg outline-o border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 min-h-[100px] max-h-[200px] resize-y p-3 transition-colors duration-500"
                id=""
              ></textarea>
              <input
                type="Submit"
                value="Stay Connected"
                className="md:w-[400px] w-[330px] h-13 pl-3 text-lg outline-0 bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500 "
              />
            </form>
          </div>
        </div>
        <NavigationCircle section="contact" />
      </div>
      <div className=" flex flex-col items-center ">
        {" "}
        <p className=" pt-3 dark:text-gray-200 tracking-widest  text-gray-900  ">
          &copy;2025 iotele.com{" "}
        </p>
      </div>
    </>
  );
};

export default Contact;
