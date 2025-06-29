import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UseReview from "../../hooks/UseReview";
import axios from "axios";
import "./MovieDetail.css"
export default function MovieDetail() {
  const { id } = useParams();              // ID que llega de la URL
  const [movie, setMovie] = useState(null);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [editingReviewId, setEditingReviewId] = useState(null);

  const token = localStorage.getItem("token");

  const [reviews, loading] = UseReview(id);

  // 🔁 Obtener datos de la película
  useEffect(() => {
    axios.get(`http://localhost:3000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Error al traer película", err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return alert("Debes iniciar sesión");

    try {
      if (editingReviewId) {
        await axios.put(`http://localhost:3000/api/reviews/${editingReviewId}`, {
          comment,
          rating
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setEditingReviewId(null);
      } else {
        await axios.post("http://localhost:3000/api/reviews", {
          comment,
          rating,
          movieId: id
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }

      setComment("");
      setRating(0);
      window.location.reload();

    } catch (error) {
      console.error("Error al enviar reseña:", error);
    }
  };

  const handleEdit = (review) => {
    setComment(review.comment);
    setRating(review.rating);
    setEditingReviewId(review.id);
  };

  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:3000/api/reviews/${reviewId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar reseña:", error);
    }
  };

  return (
    <div className="movie-detail-wrapper">
      {/* Película a la izquierda */}
      {movie && (
        <div className="movie-info">
          <img src={movie.imagen} alt={movie.titulo} className="movie-poster" />
          <h2>{movie.titulo}</h2>
          <p>{movie.descripcion}</p>
        </div>
      )}

      {/* Formulario de reseña a la derecha */}
      <div className="review-section">
        <form onSubmit={handleSubmit} className="review-form">
          <h3>{editingReviewId ? "✏️ Edita tu reseña" : "📝 Escribe tu reseña"}</h3>
          <textarea
            value={comment}
            placeholder="Tu comentario"
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((num) => (
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
                <p><strong>Usuario:</strong> {rev.userName || "Anónimo"}</p>
                <p><strong>Puntuación:</strong> {rev.rating} ★</p>
                <p>{rev.comment}</p>
                <div className="review-actions">
                  <button onClick={() => handleEdit(rev)}>Editar</button>
                  <button onClick={() => handleDelete(rev.id)}>Eliminar</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}