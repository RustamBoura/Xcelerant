// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import axios from 'axios';
// import '../componentsCSS/Cars.css';
// // Add more audio files for each car as needed

// const Cars = () => {
//   const [cars, setCars] = useState([]);
//   const audioRef = useRef(null); // Create a ref for the <audio> element
//   const navigate = useNavigate(); // Get the navigate function from react-router-dom

//   useEffect(() => {
//     // Fetch cars data when the component mounts
//     axios.get('http://localhost:3000/api/cars/')
//       .then((response) => {
//         console.log(response.data);
//         setCars(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching cars data:', error);
//       });
//   }, []);

//   console.log(cars);

//   const playAudio = (event, carId, carSoundURL) => {
//     event.preventDefault(); // Prevent default navigation
//     audioRef.current.src = carSoundURL; // Set the audio source to the corresponding car sound
//     audioRef.current.play(); // Play the audio
//     setTimeout(() => {
//       navigate(`/cars/${carId}`); // Manually navigate to the car details page after the audio plays
//     }, 1000); // Adjust the delay (in milliseconds) to give enough time for the audio to play
//   };

//   return (
//     <div className="grid">
//       <ul id="hexGrid">
//         {cars.map((car) => (
//           <li key={car._id} className="hex" onClick={(e) => playAudio(e, car._id, car.soundURL)}>
//             <div className="hexIn">
//               <a className="hexLink" href={`/cars/${car._id}`}>
//                 <div
//                   className="img"
//                   style={{ backgroundImage: `url(${car.imageURL})` }}
//                 ></div>
//               </a>
//             </div>
//           </li>
//         ))}
//       </ul>
//       {/* Audio element */}
//       <audio controls={false} ref={audioRef}>
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// };

// export default Cars;


import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../componentsCSS/Cars.css';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/cars/')
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cars data:', error);
      });
  }, []);

  const playAudio = (event, carId, carSoundURL) => {
    event.preventDefault();
    audioRef.current.src = carSoundURL;
    audioRef.current.play();
    setTimeout(() => {
      navigate(`/cars/${carId}`);
    }, 6000);
  };

  return (
    <div className="grid">
      <ul id="hexGrid">
        {cars.map((car) => (
          <li key={car._id} className="hex" onClick={(e) => playAudio(e, car._id, car.soundURL)}>
            <div className="hexIn">
              <a className="hexLink" href={`/cars/${car._id}`}>
                <div
                  className="img"
                  style={{ backgroundImage: `url(${car.imageURL[0]})` }}
                ></div>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <audio controls={false} ref={audioRef}>
        Your browser does not support the audio element.
      </audio>
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


 