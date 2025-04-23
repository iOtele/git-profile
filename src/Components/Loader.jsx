import React from "react";

const Loader = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 grid place-items-center transition-opacity duration-5000 ease-in-out${
        isLoading ? "opacity-100" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {" "}
      <h2 className="w-[400px] sm:w-[700px] md:w-[900px] dark:text-gray-200 tracking-widest  text-gray-900 font-bold text-2xl md:text-3xl lg:text-4xl mb-5">
        Otele Olalekan Abiodun (Front-End Developer)
      </h2>
      <img src="images/loading-gif-1.gif" alt="loader" className="w-80" />
    </div>
  );
};

export default Loader;
