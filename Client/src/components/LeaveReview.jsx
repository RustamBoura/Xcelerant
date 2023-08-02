// // LeaveReview.jsx
// import React, { useState } from "react";
// import axios from "axios";

// const LeaveReview = ({ carId }) => {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   const handleSubmitReview = () => {
//     const reviewData = {
//       carId,
//       rating,
//       comment,
//     };

//     axios
//       .post("http://localhost:3000/api/reviews", reviewData)
//       .then((response) => {
//         console.log("Review submitted:", response.data);
//         // Optionally, update the UI to show the submitted review immediately
//         setRating(0);
//         setComment("");
//       })
//       .catch((error) => {
//         console.error("Error submitting review:", error);
//       });
//   };

//   return (
//     <div className="review-form">
//       <h3>Leave a Review:</h3>
//       <div>
//         <label>Rating:</label>
//         <input
//           type="number"
//           min="1"
//           max="5"
//           value={rating}
//           onChange={(e) => setRating(Number(e.target.value))}
//         />
//       </div>
//       <div>
//         <label>Comment:</label>
//         <textarea
//           rows="4"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//         />
//       </div>
//       <button onClick={handleSubmitReview}>Submit Review</button>
//     </div>
//   );
// };

// export default LeaveReview;


import React, { useState } from 'react';
import axios from 'axios';

const LeaveReview = ({ carId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const newReview = {
      carId,
      rating,
      comment,
    };

    axios
      .post('http://localhost:3000/api/reviews', newReview)
      .then((response) => {
        console.log('Review submitted successfully:', response.data);
        // Optionally, you can add logic to refresh the reviews after submitting
        // For example, you can refetch the reviews for the current car from the backend.
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
      });
  };

  return (
    <div className="leave-review">
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmitReview}>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="5"
            step="0.1"
            required
          />
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default LeaveReview;
