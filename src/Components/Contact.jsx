import React from "react";
import NavigationCircle from "./NavigationCircle";
import Swal from "sweetalert2";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c5fd7ea9-9629-40b4-a7aa-22198373884c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
      });
      event.target.reset();
    }
  };
  return (
    <div
      id="contact"
      className="flex min-h-screen flex-col justify-around items-center px-4 xl:py-0 py-5 "
    >
      <h2 className="text-4xl font-light mb-24 xl:mt-10  mt-12 ">
        Connect with ME
      </h2>
      <div className="flex flex-col justify-center  lg:flex-row sm:gap-x-15 md:gap-x-40 gap-x-5 gap-y-8 lg:mb-0 px-5 w-full sm:w-auto ">
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl md:text-4xl font-bold py-2">Hire Me...</h1>
          <p className="text-lg md:text-xl py-3.5 font-semibold text-wrap ">
            I'm currently available to take on new projects, let's build
            something amazing together!{" "}
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
            <p>+234-903-185-0878</p>
          </div>
          <div className="flex items-center space-x-4 py-3">
            <i className="bx bx-current-location"></i>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
        <div className="flex flex-col  flex-1 ">
          <form
            className="flex flex-col  lg:space-y-12 space-y-8"
            onSubmit={onSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="md:w-[400px] w-full h-13 pl-3 text-lg outline-o border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500" required
            />
            <textarea
              placeholder="Message"
              name="message"
              className="md:w-[400px] w-full h-13 pl-3 text-lg outline-o border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 min-h-[100px] max-h-[200px] resize-y p-3 transition-colors duration-500"
              id="" required
            />
            <input
              type="Submit"
              value="Stay Connected"
              name="submit"
              className="md:w-[400px] w-full h-13 pl-3 text-lg outline-0 bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500 "
            />
          </form>
          <NavigationCircle section="contact" />
        </div>
      </div>
      <div className="flex flex-col items-center pt-0 ">
        <p className="  dark:text-gray-200 tracking-widest  text-gray-900  ">
          &copy;2025 iotele.com{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
