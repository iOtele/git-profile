import React from "react";

const NavigationCircle = ({ section }) => {
  return (
    <div className="h-[300px] w-[1px] bg-gray-900 dark:bg-yellow-500 absolute left-10 hidden  md:flex flex-col justify-between items-center transition-colors duration-500">
      <div
        className={`w-5 aspect-square border border-gray-900 dark:border-yellow-500 rounded-full bg-gray-300 transition-colors duration-500 ${
          section === "home" ? "bg-gray-900 dark:bg-yellow-500" : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-5 aspect-square border border-gray-900 dark:border-yellow-500 rounded-full bg-gray-300 transition-colors duration-500 ${
          section === "services"
            ? "bg-gray-900 dark:bg-yellow-500"
            : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-5 aspect-square border border-gray-900 dark:border-yellow-500 rounded-full bg-gray-300 transition-colors duration-500 ${
          section === "project"
            ? "bg-gray-900 dark:bg-yellow-500"
            : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`w-5 aspect-square border border-gray-900 dark:border-yellow-500 rounded-full bg-gray-300 transition-colors duration-500 ${
          section === "contact"
            ? "bg-gray-900 dark:bg-yellow-500"
            : "bg-gray-300"
        }`}
      ></div>
    </div>
  );
};

export default NavigationCircle;
