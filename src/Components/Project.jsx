import React from "react";
import { projectCard } from "../assets/data";
import NavigationCircle from "./NavigationCircle";

const Project = () => {
  return (
    <div
      id="project"
      className="flex min-h-screen flex-col justify-center items-center px-4 xl:py-0 py-5"
    >
      <h2 className="text-4xl font-light mb-10 md:mb-14 xl:mt-0 mt-12">
        What I Have Done...
      </h2>
      <div className="flex flex-col justify-center items-center w-full  mx-auto">
        {projectCard.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row mb-5 lg:gap-x-30 mx-auto w-full md:w-2/5 lg:w-4/6  bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-red-400 dark:shadow-amber-400 p-2"
          >
            <div className="w-full md:w-40  p-4 flex justify-center items-center">
              <img
                src={project.image}
                alt={project.title}
                className="  object-cover w-50 h-50 rounded-lg shadow-lg "
              />
            </div>

            <div className="w-full md:w-1/2 p-4 ">
              <h3 className="text-2xl font-semibold mb-2 text-red-500 dark:text-yellow-500">
                {project.title}
              </h3>
              <p className="text-gray-900 dark:text-white">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <NavigationCircle section="project" />
    </div>
  );
};

export default Project;
