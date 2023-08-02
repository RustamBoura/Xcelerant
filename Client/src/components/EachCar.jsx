import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarHexagon from './CarDetails'; // Import the CarHexagon component
import '../componentsCSS/Cars.css'

const EachCar = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars data when the component mounts
    axios
      .get('http://localhost:3000/api/cars') // Replace with the correct API endpoint
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cars data:', error);
      });
  }, []);

  return (
    <div className="grid">
      <ul id="hexGrid">
        {cars.map((car) => (
          <CarHexagon key={car._id} car={car} /> // Render the CarHexagon component for each car
        ))}
      </ul>
    </div>
  );
};

export default EachCar;
