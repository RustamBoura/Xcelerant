import React from "react";
import { NavLink } from 'react-router-dom';


const Main = () => {


    return (
        <div>
            <NavLink to="/cars" activeclassname="hexagon2">
			  <div className="hexagon2">
					<h6 className="title">Cars</h6>
			  </div>
	 	  </NavLink>
        </div>

    )
}

export default Main