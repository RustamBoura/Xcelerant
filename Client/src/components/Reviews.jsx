import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews data from the backend API
    axios.get('/api/reviews')
      .then((response) => setReviews(response.data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>{review.comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
