import { useState, useEffect } from 'react';

const GOOGLE_API_KEY = '';
const PLACE_ID = '';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=JFCucjrp5VQ8dXhX6&fields=name,rating,reviews&key=AIzaSyDSZgPKHO_cFLZ49zOqRbi8X--on7WmFMc`);
      const data = await response.json();
      setReviews(data.result.reviews);
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Google Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.time}>
            <p>{review.text}</p>
            <p>{review.author_name}</p>
            <p>{review.rating}/5</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;