import React, { useEffect } from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import Loader from "./Components/Loader";
import MainPage from "./Pages/MainPage";
import ProjectsView from "./Components/ProjectsView";
import { BrowserRouter, Routes, Route} from "react-router-dom";

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
            <Routes>
              <Route path="*" element={<MainPage />} />
              <Route path="/projects" element={<ProjectsView />} />
            </Routes>
          )}
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from "./Components/Hero";
// import Services from "./Components/Services";
// import Contact from "./Components/Contact";
// import Project from "./Components/Project";
// import Loader from "./Components/Loader";
// import { ThemeProvider } from "./Context/ThemeContext";

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <BrowserRouter>
//       <ThemeProvider>
//         <div className="min-h-screen bg-white dark:bg-gray-800 text-red-500 dark:text-yellow-500 transition-colors duration-700">
//           <Loader isLoading={isLoading} />
//           {!isLoading && (
//             <Routes>
//               <Route path="/" element={<Hero />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/projects" element={<Project />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           )}
//         </div>
//       </ThemeProvider>
//     </BrowserRouter>
//   );
// };

// export default App;
