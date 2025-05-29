import { useEffect, useState } from "react";

export default function UseMovie(){
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{
fetch("http://localhost:3000/movies")
.then((res) =>res.json())
.then((data) => { setMovies(data);})
.catch((error) => console.error("Error al cargar las peliculas:", error))
.finally(() => setLoading(false))
},[]);

return {movies, loading}
};