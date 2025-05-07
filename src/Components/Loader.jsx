import React from "react";

const Loader = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 grid w-full place-items-center transition-opacity duration-3000 ease-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {" "}
      <h2 className="w-full sm:w-[300px] md:w-[900px] dark:text-gray-200 flex justify-center  tracking-wide  text-gray-900 font-medium text-2xl md:text-3xl lg:text-4xl mb-5">
        Otele Olalekan Abiodun (Front-End Developer)
      </h2>
      <img src="images/loading-gif-1.gif" alt="loader" className="w-80" />
    </div>
  );
};

export default Loader;
