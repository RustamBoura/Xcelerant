import React, { useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import '../componentsCSS/Main.scss';
import { setupMainFunctionality } from '../componentsCSS/Main.js'; // Import the setup function from Main.js
import carBackgroundImage from './audio/cars-autobots.jpeg'
import userBackgroundImage from './audio/Users-autobots.jpeg'


const Main = () => {
  const containerRef = useRef(null); // Create a ref for the container element

  useEffect(() => {
    setupMainFunctionality(); // Run the setup function from Main.js
  }, []);


  return (
    <div>
      {/* <div className="menu">
        Logo etc
      </div> */}

      {/* <div className="hero">
        <h1>hero text here</h1>
        <span className="scroll">^</span>
      </div> */}

      <div className="container" ref={containerRef} >
        <NavLink to="/cars" activeClassName="section-one" >
          <div className="section-one" style={{ backgroundImage: `url(${carBackgroundImage})` }}>
            <div className="content" style={{ backgroundImage: `url(${carBackgroundImage})` }}>
              
            </div>
          </div>
        </NavLink>
        <NavLink to="/signupform" activeClassName="section-two">
          <div className="section-two" style={{ backgroundImage: `url(${userBackgroundImage})` }}>
            <div className="content" style={{ backgroundImage: `url(${userBackgroundImage})` }}>
              
            </div>
          </div>
        </NavLink>
      </div>

      {/* <div className="cta">
        Call to action
      </div> */}
    </div>
  );
}

export default Main;
