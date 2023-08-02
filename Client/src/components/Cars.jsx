import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../componentsCSS/Cars.css'

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars data when the component mounts
    axios.get('http://localhost:3000/api/cars/')
      .then((response) => {
        console.log(response.data);
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cars data:', error);
      });
  }, []);

  console.log(cars);

  return (
    <div className="grid">
      <ul id="hexGrid">
        {cars.map((car) => (
          <li key={car._id} className="hex">
            <div className="hexIn">
              <a className="hexLink" href={`/cars/${car._id}`}>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${car.imageURL})` }}
                ></div>
              </a>
            </div>
          </li>
          ))}
      </ul>
    </div>
  );
};

export default Cars;





// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import CarHexagon from './CarHexagon'; // Import the CarHexagon component
// import '../componentsCSS/Cars.css'
// import EachCar from './EachCar';
// import axios from 'axios'

// const Cars = () => {
//   const [cars, setCars] = useState([]);
//   useEffect(() => {
//     // Fetch cars data when the component mounts
//     axios
//       .get('http://localhost:3000/api/cars') // Replace with the correct API endpoint
//       .then((response) => {
//         setCars(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching cars data:', error);
//       });
//   }, []);

//   return (
//     <div className="grid">
//       <ul id="hexGrid">
//         {cars.map((car) => (
//           <CarHexagon key={car._id} car={car} /> // Render the CarHexagon component for each car
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cars;


 