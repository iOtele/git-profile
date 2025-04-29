import React, { useEffect } from "react";
import Hero from "./Components/Hero";
import { ThemeProvider } from "./Context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Loader from "./Components/Loader";
import Project from "./Components/Project";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-800 text-red-500 dark:text-yellow-500 transition-colors duration-700">
          <Loader isLoading={isLoading} />
          {!isLoading && (
            <>
              <Hero />
              <Services />
              <Project />
              <Contact />
            </>
          )}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
