import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../Context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState("services");
  const isStrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isStrollingRef.current) return;
      const sections = ["home", "services", "project", "contact"];
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 0 && bottom >= 100) {
            setActiveSection(sectionId);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    isStrollingRef.current = true;
    const element = document.getElementById(sectionId);
    element.scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => {
      isStrollingRef.current = false;
    }, 1000);
  };
  return (
    <div className="w-full md:h-12 sm:h-14 h-18 flex flex-col md:flex-row justify-center md:justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-3 fixed top-0 left-0 z-50 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="flex items-center sm:gap-x-4 gap-x-2">
        <a href="#home" className="text-lg sm:text-xl md:text-2xl  font-bold ">
          Otele
        </a>

        <i
          className={`text-xl sm:text-2xl md:text-3xl dark:text-gray-200 sm:ml-4 ml-2 cursor-pointer ${
            darkMode ? "bx bx-sun" : "bx bx-moon"
          } text-gray-600  `}
          onClick={toggleDarkMode}
        ></i>
      </div>
      <div>
        <a
          href="#home"
          className={`group lg:text-lg md:text-base text-sm  lg:mr-12 mr-8 tracking-wide hover:text-gray-200 transition duration-300 ease-in-out font-bold relative ${
            activeSection === "home"
              ? "text-red-500 dark:text-yellow-500"
              : " text-gray-600 dark:text-white"
          }`}
          onClick={(e) => handleNavClick(e, "home")}
        >
          <span
            className={`absolute -bottom-1 left-0 w-full h-[1px] transform scale-x-0 group-hover:scale-x-100 group-hover:origin-right transition duration-300 ${
              activeSection === "home"
                ? "bg-red-500 dark:bg-yellow-500 scale-x-100 "
                : " bg-gray-500 dark:bg-white scale-x-0"
            } `}
          ></span>
        </a>
        <a
          href="#services"
          className={`group lg:text-lg md:text-base text-sm  lg:mr-12 mr-8 tracking-wide hover:text-gray-200 transition duration-300 ease-in-out font-bold relative ${
            activeSection === "services"
              ? "text-red-500 dark:text-yellow-500"
              : " text-gray-600 dark:text-white"
          }`}
          onClick={(e) => handleNavClick(e, "services")}
        >
          Services
          <span
            className={`absolute -bottom-1 left-0 w-full h-[1px]  transform scale-x-0 group-hover:scale-x-100 group-hover:origin-right transition duration-300 ${
              activeSection === "services"
                ? "bg-red-500 dark:bg-yellow-500 scale-x-100 "
                : " bg-gray-500 dark:bg-white scale-x-0"
            } `}
          ></span>
        </a>{" "}
        <a
          href="#project"
          className={`group lg:text-lg md:text-base text-sm  lg:mr-12 mr-8 tracking-wide hover:text-gray-200 transition duration-300 ease-in-out font-bold relative ${
            activeSection === "project"
              ? "text-red-500 dark:text-yellow-500"
              : " text-gray-600 dark:text-white"
          }`}
          onClick={(e) => handleNavClick(e, "project")}
        >
          Project
          <span
            className={`absolute -bottom-1 left-0 w-full h-[1px]  transform scale-x-0 group-hover:scale-x-100 group-hover:origin-right transition duration-300 ${
              activeSection === "project"
                ? "bg-red-500 dark:bg-yellow-500 scale-x-100 "
                : " bg-gray-500 dark:bg-white scale-x-0"
            } `}
          ></span>
        </a>{" "}
        <a
          href="#"
          className={`group lg:text-lg md:text-base text-sm  lg:mr-12 mr-8 tracking-wide hover:text-gray-200 transition duration-300 ease-in-out font-bold relative ${
            activeSection === "contact"
              ? "text-red-500 dark:text-yellow-500"
              : " text-gray-600 dark:text-white"
          }`}
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Contact
          <span
            className={`absolute -bottom-1 left-0 w-full h-[1px]  transform scale-x-0 group-hover:scale-x-100 group-hover:origin-right transition duration-300 ${
              activeSection === "contact"
                ? "bg-red-500 dark:bg-yellow-500 scale-x-100 "
                : " bg-gray-500 dark:bg-white scale-x-0"
            } `}
          ></span>
        </a>
        <button className="px-4 py-2   border font-bold hover:shadow-amber-300 shadow-md shadow-red-300 dark:shadow-gray-200 rounded-xl cursor-pointer ">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
