import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useReview from "../../hooks/UseReview";
import axios from "axios";
import Navbar from "../navbar/Navbar"; // Asegurate del path
import "./MovieDetail.css";

export default function MovieDetail() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [editingReviewId, setEditingReviewId] = useState(null);

  const { reviews, loading, refetch } = useReview(movieId);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${movieId}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Error al traer película", err));
  }, [movieId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return alert("Debes iniciar sesión");

    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
      if (editingReviewId) {
        await axios.put(
          `http://localhost:3000/api/reviews/${editingReviewId}`,
          {
            comentario_reviews: comment,
            rating,
          },
          config
        );
      } else {
        await axios.post(
          `http://localhost:3000/api/reviews`,
          {
            comentario_reviews: comment,
            rating,
            movie_id: movieId,
          },
          config
        );
      }

      await refetch();
      setEditingReviewId(null);
      setComment("");
      setRating(0);
    } catch (err) {
      console.error("Error al enviar reseña", err);
    }
  };

  const handleEdit = (review) => {
    const userIdToken = JSON.parse(atob(token.split(".")[1])).id;
    if (review.user_id !== userIdToken) {
      return alert("No tienes permitido editar esta reseña porque no es tuya.");
    }

    setEditingReviewId(review.id);
    setComment(review.comentario_reviews);
    setRating(review.rating);
  };

  const handleDelete = async (reviewId, userReviewOwnerId) => {
    const userIdToken = JSON.parse(atob(token.split(".")[1])).id;

    if (userReviewOwnerId !== userIdToken) {
      return alert("No puedes eliminar esta reseña porque no es tuya.");
    }

    if (!window.confirm("¿Seguro que deseas eliminar esta reseña?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/reviews/${reviewId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      await refetch();
      setEditingReviewId(null);
      setComment("");
      setRating(0);
    } catch (err) {
      console.error("Error al eliminar reseña", err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="movie-detail-wrapper">
        {movie && (
          <div className="movie-info">
            <img src={movie.imagen} alt={movie.titulo} className="movie-poster" />
            <h2>{movie.titulo}</h2>
            <p className="movie-description">{movie.descripcion}</p>
          </div>
        )}

        <div className="review-section">
          <form onSubmit={handleSubmit} className="review-form">
            <h3>{editingReviewId ? "✏️ Edita tu reseña" : "📝 Escribe tu reseña"}</h3>
            <textarea
              value={comment}
              placeholder="Tu comentario"
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="rating-stars">
              {[5, 4, 3, 2, 1].map((num) => (
                <span
                  key={num}
                  className={num <= rating ? "star selected" : "star"}
                  onClick={() => setRating(num)}
                >
                  ★
                </span>
              ))}
            </div>
            <button type="submit">
              {editingReviewId ? "Actualizar reseña" : "Enviar reseña"}
            </button>
          </form>

          <div className="existing-reviews">
            <h3>Reseñas:</h3>
            {loading ? (
              <p>Cargando reseñas...</p>
            ) : reviews.length === 0 ? (
              <p>No hay reseñas todavía.</p>
            ) : (
              reviews.map((rev) => (
                <div key={rev.id} className="review">
                  <p><strong>Usuario:</strong> {rev.userName}</p>
                  <p><strong>Puntuación:</strong> {rev.rating} ★</p>
                  <p>{rev.comentario_reviews}</p>
                  <div className="review-actions">
                    <button onClick={() => handleEdit(rev)}>Editar</button>
                    <button onClick={() => handleDelete(rev.id, rev.user_id)}>Eliminar</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
