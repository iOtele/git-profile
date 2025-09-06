import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  letters,
  professionTexts,
  aboutText,
  socialIcons,
} from "../assets/data";
import NavigationCircle from "./NavigationCircle";
import { href } from "react-router-dom";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [currentText, setCurrentText] = useState(professionTexts[0]);
  const [isRotating, setIsRotating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [profileOpacity, setProfileOpacity] = useState(0.3);
  let currentTextIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        currentTextIndex = (currentTextIndex + 1) % professionTexts.length;
        setCurrentText(professionTexts[currentTextIndex]);
        setIsRotating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-col px-4 xl:py-0 py-5 justify-center  xl:pl-36 lg:pl-24 md:pl-12 sm:px-6 isolate relative z-10 "
    >
      <Navbar />
      <div className="  absolute flex top-[70px]  justify-center md:justify-start md:text-5xl text-3xl md:font-normal font-bolder md:pl-0 ">
        <span className="flex overflow-hidden pl-2 pt-18   md:border-t-0 shadow-md shadow-gray-700 dark:shadow-gray-200 rounded-md">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block md:w-38 w-32 xl:-mr-24 -mr-20 relative      "
              onMouseEnter={() => setHoveredLetter(index)}
              onMouseLeave={() => setHoveredLetter(null)}
            >
              {letter.char}
              <img
                src={letter.img}
                alt={`Hover image ${index + 1}`}
                className={`xl:h-18 h-16 absolute bottom-full -translate-x-1/2  ${
                  letter.rotate
                } ${hoveredLetter === index ? "visible" : "invisible"}`}
              />
            </span>
          ))}
        </span>
      </div>
      <div className="flex flex-col   items-center  md:items-start  xl:gap-y-4 gap-y-3 xl:mb-0 md:mb-20 mb-0  bottom-5 ">
        <h1 className=" flex flex-col xl:space-y-8 md:pt-10  md:space-y-4 space-y-2 xl:text-5xl md:text-4xl text-3xl  md:font-normal font-bolder md:mt-0  w-[350px] md:w-[400px] lg:w-[550px] text-center tracking-wider ">
          <span className=" w-full xl:text-5xl md:text-4xl text-2xl tracking-wider xl:py-3 py-3 overflow-hidden flex sm:mx-0  flex-col md:flex-row   ">
            I'm
            <span
              className={`inline-block   lg:ml-6 md:ml-4 sm:ml-2 
             font-extrabold  transform origin-left    transition-transform duration-300 ease-out ${
               isRotating ? "hidden md:rotate-[80deg]" : "rotate-0"
             }`}
            >
              {currentText}
            </span>{" "}
          </span>
        </h1>
        <button
          className="xl:w-[400px] md:w-[300px] min-w-[200px] bg-gray-500 dark:bg-gray-500 md:py-1 py-0 md:px-2 xl:text-xl md:text-lg text-base dark:text-gray-900 tracking-widest rounded-r-4xl flex justify-between text-white items-center  md:mx-0 mx-auto transition-colors duration-300 ease-out cursor-pointer"
          onClick={() => setIsTextVisible(!isTextVisible)}
          onMouseEnter={() => setProfileOpacity(0.9)}
          onMouseLeave={() => setProfileOpacity(0.3)}
        >
          {isTextVisible ? "Hide My Story" : "Read My Story"}{" "}
          <i
            className={`bx ${isTextVisible ? "bx-book-alt" : "bx-book-open"}`}
          ></i>
        </button>

        <div className="lg:w-[570px] md:w-[250px] w-full absolute left-1/2 -translate-x-1/2 -z-10  bottom-15 md:bottom-10 ">
          <img
            src="images/profile-pic-1.png"
            alt="Road Image"
            className="w-full md:w-[500px] mx-auto transition duration-300 ease-out"
            style={{ opacity: profileOpacity }}
          />
          <span className=" hidden md:block xl:text-[10px] md:text-[8px] text-[5px] font-bold tracking-wide  absolute top-0  xl:right-54 lg:right-52 right-5 rotate-[6.5deg] animate-bounce">
            Ready for exciting challenges.
          </span>
          <div
            className={`w-full xl:h-[150px] h-[100px] px-3 xl:text-lg md:text-base text-xs font-light text-gray-200 text-justify tracking-wide transform overflow-y-auto origin-left ${
              isTextVisible ? "scale-x-100" : "scale-x-0"
            } transition-transform duration-300 custom-scrollbar`}
          >
            <p className="xl:py-1 py-1 dark:text-gray-200 text-gray-900 [&::first-letter]:text-[30px] [&::first-letter]:ml-3 dark:[&::first-letter]:text-yellow-500  [&::first-letter]:text-gray-700   transition-colors duration-300 ease-out ">
              {aboutText}
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:gap-5 gap-2 ml-auto absolute top-[70px] right-5 md:right-4  flex-col overflow-hidden px-2 py-2    border-gray-200  shadow-md shadow-gray-300 dark:shadow-gray-200   rounded-md ">
        {socialIcons.map((icon, index) => (
          <a
            href={icon.href}
            target="_blank"
            key={index}
            className="xl:text-3xl md:text-2xl text-xl dark:hover:text-white hover:text-gray-900 dark:hover:shadow-amber-200 hover:shadow-gray-500 shadow transition-all duration-500 ease-in-out "
          >
            <i className={icon.icon} />
          </a>
        ))}
      </div>
      <NavigationCircle section="home" />
    </div>
  );
};

export default Hero;
