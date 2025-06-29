import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseMovie from "../../hooks/UseMovie";
import HomeCard from "../homeCard/HomeCard";
import Navbar from "../navbar/Navbar";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const { movies, loading } = UseMovie();

  const [showAlert, setShowAlert] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleReviewClick = (movieId) => {
    const token = localStorage.getItem("token");

    if (!token || token === "undefined" || token === "123456") {
    console.log("🔐 No hay token. Mostrando alerta...");
    setSelectedMovieId(movieId);
    setShowAlert(true);
    } else {
    console.log("✅ Token presente. Redirigiendo...");
    navigate(`/movieDetail/${movieId}`);
    }
  };

  const goToLogin = () => {
    navigate(`/loginRegister?redirect=/movieDetail/${selectedMovieId}`);
  };

  if (loading) return <p>Cargando películas...</p>;

  return (
    <>
      <Navbar />

      <div className="container text-center">
        <h1 className="my-4 text-white">Deje su reseña aquí</h1>
        <div className="movies-container">
          {movies.slice(0, 10).map((movie) => (
            <HomeCard
              key={movie.id}
              image={movie.imagen}
              id={movie.id}
              title={movie.titulo}
              onReviewClick={handleReviewClick}
            />
          ))}
        </div>
      </div>

      {showAlert && (
        <div className="alert-container">
          <div className="alert-box">
            <p className="alert-message">⚠️ Debes iniciar sesión para hacer una reseña.</p>
            <div className="alert-buttons">
              <button className="alert-btn confirm" onClick={goToLogin}>
                Iniciar sesión
              </button>
              <button className="alert-btn cancel" onClick={() => setShowAlert(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}    