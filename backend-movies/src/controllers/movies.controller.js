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
 
exports.getOne = async (req, res) =>{

    try{
        const movie = await movieService.getById(req.params.id);
        if (!movie) {
        return res.status(404).json({error:`Pelicula no encontrada`})};

        return res.json(movie);

    }catch (err){
        res.status(500).json({ error: 'Error al obtener la pelicula' });
    }
}
