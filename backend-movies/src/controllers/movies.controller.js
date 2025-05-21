//importo service
const movieService= require(`../services/movies.service`);

//obtener todas las peliculas
exports.getAll = async (req, res) =>{

try{
const movies = await movieService.getAllMovies();
res.json(movies);
}
catch{res.status(500).json(`Error al obtener las peliculas`)};
};
 
