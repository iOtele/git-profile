import React from "react";
import { projectCard } from "../assets/data";
import NavigationCircle from "./NavigationCircle";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div
      id="project"
      className="flex min-h-screen flex-col justify-center items-center px-4 xl:py-0 py-5"
    >
      <h2 className="text-4xl font-light mb-32 xl:mt-0 mt-12">
        What I Have Done...
      </h2>
      <div className="w-full xl:w-[900px] lg:w-[750px] md:w-[500px] grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-16 xl:mb-0 ">
        {projectCard.map((project, index) => (
          <div
            key={index}
            className="lg:max-w-[250px] md:max-w-[500px] max-w-[330px] w-full mx-auto rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative isolate p-4 flex flex-col justify-center items-center bg-white dark:bg-gray-800 transition-colors duration-500 hover:shadow-lg hover:shadow-gray-700/20"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-80 rounded-lg shadow-lg mb-4 cursor-pointer"
            />

            <div className="w-full justify-center items-center flex flex-col gap-2">
              <h3 className="text-2xl font-semibold mb-2 text-red-500 dark:text-yellow-500">
                {project.title}
              </h3>
              <p className="text-gray-900 dark:text-white md:h-28 h-24 text-sm font-light overflow-y-auto custom-scrollbar pr-2 transition-colors duration-500">
                {project.description}
                {project.terminologies && (
                  <span className="mt-2 block">
                    <strong>Technologies:</strong>{" "}
                    {project.terminologies.join(", ")}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/projects"}>
        <button
          type="button"
          className=" md:w-[200px] w-full h-13 pl-3 text-lg mt-10 outline-0 bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500"
        >
          See More...
        </button>
      </Link>

      <NavigationCircle section="project" />
    </div>
  );
};

export default Project;
