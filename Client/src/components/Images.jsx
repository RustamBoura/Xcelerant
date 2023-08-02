import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Images = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images data from the backend API
    axios.get('/api/images')
      .then((response) => setImages(response.data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <div>
      <h1>Images</h1>
      <ul>
        {images.map((image) => (
          <li key={image._id}>
            <img src={image.url} alt={image.caption} style={{ width: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Images;
