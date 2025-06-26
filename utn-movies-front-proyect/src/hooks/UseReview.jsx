import { useState, useEffect } from "react";
import axios from "axios";

export default function useReview(movieId) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

        setReviews(response.data); // guardamos las reviews
      } catch (err) {
        console.error(`Error al traer las reseñas.`, err);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchReviews();
    }
  }, [movieId]); // <- dependencias del useEffect

  return [reviews, loading]; // <- retornar el array aquí, FUERA del useEffect
}
