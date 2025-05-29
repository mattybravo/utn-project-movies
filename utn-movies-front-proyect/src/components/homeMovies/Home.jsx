import HomeCard from "../homeCard/HomeCard";
import Navbar from "../navbar/Navbar";
import UseMovie from "../../hooks/UseMovie";

export default function Home(){
const {movies, loading} = UseMovie();

 if (loading) return <p>Cargando películas...</p>;
 
return(
<>
<Navbar/>
<div className="container text-center">
 <h1 className="my-4 text-primary">Deje su reseña aqui.</h1>

{movies.map((movie) =>{
console.log(movie);
<HomeCard key={movie.id} image={movie.imagen}/>
})}
</div>  
</>
)

}