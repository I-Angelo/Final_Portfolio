import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Menu from '../../Pages/Menu';
import GitHubRepoCarousel from '../../Pages/GitHubRepoCarousel';
import AboutMe from '../../Pages/aboutMe';
import ContactMe from '../../Pages/contactMe';
import Projects from '../../Pages/Projects';
import Certifications from '../../Pages/certifications';
import Error from '../../Pages/Error';
import Login from '../../Pages/Login';
import '../../Styles/AnimatedRoutes.css';


import { AnimatePresence } from 'framer-motion'; //. if a bug is present try this instead "framer-motion/dist/framer-motion"
import WelcomePage from '../../Pages/WelcomePage';
import DataDisplay from '../../Pages/dataBaseData';

console.log('Creating router...');


function AnimatedRoutes() {

  const location = useLocation();

  return (
    <AnimatePresence wait>
      <Routes location={location} key={location.pathname}>
          {/* Define the default route (home) */}
          <Route path="/" element={<Menu />} />

          {/* Route for the GitHubRepoCarousel component with a dynamic parameter */}
          <Route path="/github-carousel/:repoOwner" element={<GitHubRepoCarousel />} />
          
          {/* Route for About Me */}
          <Route path="/about" element={<AboutMe />} />

          {/* Route for About Me */}
          <Route path="/contact" element={<ContactMe />} />

          {/* Route for About Me */}
          <Route path="/projects" element={<Projects />} />

          {/* Route for About Me */}
          <Route path="/certifications" element={<Certifications />} />

          {/* Route for About Me */}
          <Route path='/*' element={<Error />} />
          
          {/* Route for About Me */}
          <Route path="/login" element={<Login />} />
          
          {/* Route for About Me */}
          <Route path="/welcome" element={<WelcomePage />} />

          {/* Route for About Me */}
          <Route path="/data" element={<DataDisplay />} />

          {/* Route for About Me */}
          <Route path="/logout" element={<Menu />} />

          {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;


//type rfc to complete the boiler plate

// https://www.youtube.com/watch?v=FdrEjwymzdY. explanation of the animation