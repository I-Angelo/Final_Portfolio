import React from "react";
// import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import pyramid from '../static/pyramid-double.gif';
import '../Styles/HomeButton.css';
import { motion } from 'framer-motion'


function HomeButton () {

    console.log('rendering home button...')

    const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0 } };
    const enterAnimation = { opacity: 1, transition: { duration: 1.5, delay: 2 }};

    
    

    return (
        
        <motion.div initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
        <div className="button-container-B">
        <Link to="/" className="home-link-button-B">
          <div className="button-content">
            <img src={pyramid} alt="pyramid" className="button-image" />
            <span>Go Back to Work Station</span>
          </div>
        </Link>
        </div>
        </motion.div>
        
    )
}


export default HomeButton;
