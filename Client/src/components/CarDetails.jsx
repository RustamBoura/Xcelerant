// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import LeaveReview from './LeaveReview';


// const CarDetails = () => {
//   const [car, setCar] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0); // Added state for tracking the current image index
//   const { id } = useParams();

//   useEffect(() => {
//     // Fetch the details of the specific car based on the ID from the URL
//     axios
//       .get(`http://localhost:3000/api/cars/${id}`)
//       .then((response) => {
//         setCar(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching car data:', error);
//       });
//   }, [id]); // Add id to the dependency array to fetch data when the ID changes

//   const handleLeftArrowClick = () => {
//     // Logic to handle left arrow click and change the currentImageIndex accordingly
//     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? car.imageURL.length - 1 : prevIndex - 1));
//   };

//   const handleRightArrowClick = () => {
//     // Logic to handle right arrow click and change the currentImageIndex accordingly
//     setCurrentImageIndex((prevIndex) => (prevIndex === car.imageURL.length - 1 ? 0 : prevIndex + 1));
//   };

//   if (!car) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='container'>
//       <div className="arrow-container">
//         <div className="left-arrow arrow" onClick={handleLeftArrowClick}></div>       
//         <div className="cardetails-container">
//           <div className="cardetails">
//           <img
//             src={car.imageURL[currentImageIndex]}
//             alt={`Car ${currentImageIndex}`}
//             style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
//           />
//           </div>
//           <div className='cardetails2'>
//             <p>Make: {car.make}</p>
//             <p>Model: {car.model}</p>
//             <p>Year: {car.year}</p>
//             <p>Top Speed: {car.topSpeed} mph</p>
//             <p>Engine: {car.engine}</p>
//             <p>Horsepower: {car.horsepower}</p>
//             <p>Torque: {car.torque}</p>
//             <p>Price: ${car.price}</p>
//             <p>Description: {car.description}</p>
//           </div>
//           <LeaveReview carId={id} />
//         </div>
//         <div className="right-arrow arrow" onClick={handleRightArrowClick}></div>
//       </div>
//     </div>
//   );
// };

// export default CarDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LeaveReview from './LeaveReview';

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reviews, setReviews] = useState([]); // Added state for storing reviews
  const { id } = useParams();

  useEffect(() => {
    // Fetch the details of the specific car based on the ID from the URL
    axios
      .get(`http://localhost:3000/api/cars/${id}`)
      .then((response) => {
        setCar(response.data);
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
      });

    // Fetch the reviews for the specific car based on the car ID from the URL
    axios
      .get(`http://localhost:3000/api/reviews?carId=${id}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, [id]);

  const handleLeftArrowClick = () => {
    // Logic to handle left arrow click and change the currentImageIndex accordingly
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? car.imageURL.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    // Logic to handle right arrow click and change the currentImageIndex accordingly
    setCurrentImageIndex((prevIndex) => (prevIndex === car.imageURL.length - 1 ? 0 : prevIndex + 1));
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className="arrow-container">
        <div className="left-arrow arrow" onClick={handleLeftArrowClick}></div>       
        <div className="cardetails-container">
          <div className="cardetails">
            <img
              src={car.imageURL[currentImageIndex]}
              alt={`Car ${currentImageIndex}`}
              style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
            />
          </div>
          <div className='cardetails2'>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Top Speed: {car.topSpeed} mph</p>
            <p>Engine: {car.engine}</p>
            <p>Horsepower: {car.horsepower}</p>
            <p>Torque: {car.torque}</p>
            <p>Price: ${car.price}</p>
            <p>Description: {car.description}</p>
          </div>
          {/* Display the reviews */}
          <div className="reviews">
            <h2>Reviews</h2>
            {reviews.length === 0 ? (
              <p>No reviews for this car yet.</p>
            ) : (
              <ul>
                {reviews.map((review) => (
                  <li key={review._id}>
                    <p>Rating: {review.rating}</p>
                    <p>Comment: {review.comment}</p>
                    {/* Add any other review information you want to display */}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <LeaveReview carId={id} />
        </div>
        <div className="right-arrow arrow" onClick={handleRightArrowClick}></div>
      </div>
    </div>
  );
};

export default CarDetails;



