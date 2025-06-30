import { useState, useEffect } from "react";
import axios from "axios";

export default function useReview(movieId) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `http://localhost:3000/api/reviews/movie/${movieId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setReviews(response.data);
    } catch (err) {
      console.error("Error al traer las reseñas.", err);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (movieId) {
      fetchReviews();
    }
  }, [movieId]);

  return { reviews, setReviews, loading, refetch: fetchReviews };
}

