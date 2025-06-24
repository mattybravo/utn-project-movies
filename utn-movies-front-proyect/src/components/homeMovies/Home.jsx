import HomeCard from "../homeCard/HomeCard";
import Navbar from "../navbar/Navbar";
import UseMovie from "../../hooks/UseMovie";
import "./Home.css";

export default function Home() {
    const { movies, loading } = UseMovie();

    if (loading) return <p>Cargando películas...</p>;

    return (
        <>
            <Navbar />
            <div className="container text-center">
                <h1 className="my-4 text-white">Deje su reseña aqui.</h1>
                <div className="movies-container">
                    {movies.slice(0, 10).map((movie) => {
                        console.log(movie);
                        return <HomeCard key={movie.id} image={movie.imagen} id={movie.id} title={movie.titulo} />
                    })}
                </div>
            </div>
        </>
    )

}