import HomeCard from "../homeCard/HomeCard";
import Navbar from "../navbar/Navbar";
import UseMovie from "../../hooks/UseMovie";
import "./Home.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import LoginAlert from "../loginAlert/LoginAlert";

export default function Home() {
    const navigate = useNavigate();
    const { movies, loading } = UseMovie();
    const [showAlert, setShowAlert] = useState(false)
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const token = localStorage.getItem('token'); 

    if (loading) return <p>Cargando películas...</p>;

    const handleReviewClick = (movieId) => {
        if(!token) {
            setSelectedMovieId(movieId);
            setShowAlert(true)
            navigate(`/login?redirect=/movieDetail/${movieId}`); 
        }else{
            navigate(`/movieDetail/${movieId}`);
        }
    };

{showAlert && (
  <div className="alertButton">
    <p>¡Debes iniciar sesión para ver la película!</p>
    <button onClick={() => navigate(`/login?redirect=/movieDetail/${selectedMovieId}`)}>
      Ir a iniciar sesión
    </button>
  </div>
)}

    const goToLogin = () => {
    navigate(`/login?redirect=/movieDetail/${selectedMovieId}`);
    }
    
    return (
        <>
            <Navbar />
            <div className="container text-center">
                <h1 className="my-4 text-white">Deje su reseña aqui.</h1>
                <div className="movies-container">
                    {movies.slice(0, 10).map((movie) => {
                        console.log(movie);
                        return <HomeCard key={movie.id} image={movie.imagen} id={movie.id} title={movie.titulo} onReviewClick={handleReviewClick}/>
                    })}
                </div>
            </div>

            <LoginAlert
            show={showAlert}
            onClose={() => setShowAlert (false)}
            onLogin={goToLogin}
            />
        </>
    )

}