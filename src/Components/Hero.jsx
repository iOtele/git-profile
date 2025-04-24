import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  letters,
  professionTexts,
  aboutText,
  socialIcons,
} from "../assets/data";
import NavigationCircle from "./NavigationCircle";

const Hero = () => {
  const [hoveredLetter, setHoveredLetter] = useState(null);
  const [currentText, setCurrentText] = useState(professionTexts[0]);
  const [isRotating, setIsRotating] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [roadImageOpacity, setRoadImageOpacity] = useState(0.3);
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
      className="w-full min-h-screen flex flex-col justify-center  xl:pl-36 lg:pl-24 md:pl-12 sm:px-6 px-4 isolate relative z-10 "
    >
      <Navbar />
      <div className="  absolute flex top-[120px] xl:w-[850px] lg:w-[700px]  sm:w-[700px] md:w-[900px] justify-center md:justify-start md:text-5xl text-3xl md:font-normal font-bolder pl-5 ">
        <span className="flex overflow-hidden px-3 pt-20   md:border-t-0 shadow-md shadow-red-300 dark:shadow-gray-200 rounded-md">
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
      <div className="flex flex-col   items-center md:justify-left md:items-start  xl:gap-y-4 gap-y-3 xl:mb-0 md:mb-20 mb-0  bottom-5 ">
        <h1 className=" flex flex-colxl:space-y-8 md:pt-10  md:space-y-4 space-y-2 xl:text-5xl md:text-4xl text-3xl  md:font-normal font-bolder md:mt-0  w-[350px] md:w-[400px] lg:w-[550px] text-center md:justify-left tracking-wider ">
          <span className=" w-full xl:text-5xl md:text-4xl text-2xl tracking-wider xl:py-3 py-3 overflow-hidden flex sm:mx-0  mx-auto flex-col md:flex-row   ">
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
          className="xl:w-[400px] md:w-[300px] min-w-[200px] bg-gray-900 dark:bg-gray-500 md:py-1 py-0 md:px-2 xl:text-xl md:text-lg text-base dark:text-gray-900 tracking-widest rounded-r-4xl flex justify-between text-white items-center md:mr-auto md:mx-0 mx-auto transition-colors duration-300 ease-out"
          onClick={() => setIsTextVisible(!isTextVisible)}
          onMouseEnter={() => setRoadImageOpacity(0.9)}
          onMouseLeave={() => setRoadImageOpacity(0.3)}
        >
          {isTextVisible ? "Hide My Story" : "Read My Story"}{" "}
          <i
            className={`bx ${isTextVisible ? "bx-book-alt" : "bx-book-open"}`}
          ></i>
        </button>

        <div className="lg:w-[570px] md:w-[250px] w-[300px] absolute left-1/2 -translate-x-1/2 -z-10  bottom-10 ">
          <img
            src="images/profile-pic-1.png"
            alt="Road Image"
            className="w-full md:w-[450px] mx-auto transition duration-300 ease-out"
            style={{ opacity: roadImageOpacity }}
          />
          <span className="xl:text-[2px] md:text-[1px] text-[0.5px] font-bold tracking-wide  absolute -top-5 xl:right-54 lg:right-52  right-5 rotate-[3.5deg] animate-bounce">
            Ready for exciting challenges.
          </span>
          <div
            className={`w-full xl:h-[150px] h-[100px] px-3 xl:text-lg md:text-base text-xs font-light text-gray-200 text-justify tracking-wide transform overflow-y-auto origin-left ${
              isTextVisible ? "scale-x-100" : "scale-x-0"
            } transition-transform duration-300 custom-scrollbar`}
          >
            <p className="xl:py-1 py-1 dark:text-gray-200 text-gray-900 [&::first-letter]:text-[30px] [&::first-letter]:ml-3 dark:[&::first-letter]:text-yellow-500  [&::first-letter]:text-red-500 transition-colors duration-300 ease-out ">
              {aboutText}
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:gap-10 gap-2 ml-auto absolute top-40 right-8 md:right-4  md:top-40 flex-col overflow-hidden px-4 py-2    border-gray-200  shadow-md shadow-red-300 dark:shadow-gray-200   rounded-md ">
        {socialIcons.map((icon, index) => (
          <a
            href="#"
            key={index}
            className="xl:text-3xl md:text-2xl text-xl dark:hover:text-white hover:text-gray-900 dark:hover:shadow-amber-200 hover:shadow-red-500 shadow transition-all duration-500 ease-in-out "
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
