//importo el service de reviews
const reviewService = require(`../services/reviews.service`);

//obtener todas las reseñas
exports.getReviews = async (req, res) =>{
try {
const reviews = await reviewService.getAllReviews();
res.json(reviews);
}    
catch (err){
res.status(500).json({error:`Error al obtener reseñas`})}
};

//obtener una reseña
exports.getOne = async (req, res) =>{
    try{
        const review = await reviewService.getById(req.params.id);

       if (!review) {
       return res.status(404).json({error:`Reseña no encontrada`})};
       res.json(review);
    }catch (err){
        res.status(500).json({ error: 'Error al obtener reseña' });
    }
};

exports.getByMovieId = async (req, res) => {
  const movieId = req.params.movieId;

  try {
    const reviews = await reviewService.getByMovieId(movieId);
    res.json(reviews);
  } catch (err) {
    console.error("Error al obtener reseñas:", err);
    res.status(500).json({ error: "Error al obtener reseñas" });
  }
};

//crear reseña
exports.createReview = async (req, res) =>{
    try{
       const user = req.user.id;
        const newReview = await reviewService.create(req.body, user);
        res.status(201).json(newReview);
    }
    catch (err){
        res.status(500).json({ error: 'Error al crear reseña' });
    }
};

//editar (actualizar reseña)
exports.updateReview = async (req, res) =>{
    try{
     const reviewId = req.params.id;
      const user = req.user.id;    
       const review = await reviewService.getById(reviewId);

        if (!review){
            res.status(404).json({message: `Reseña no encontrada.`})
        }
        if (reviewId !== user) {
        res.status(403).json({message: `No tienes permitido editar la reseña.`})
        }

    const updateReview = await reviewService.update(req.params.id, req.body);
        res.json(reviewUpdated);
    }
    catch(err){
         res.status(500).json({error: `Error al editar reseña`})
    };
};

//eliminar reseña 

exports.deleteReview = async (req, res) =>{
    try{
      const reviewId = req.params.id;
       const user = req.user.id;
        const review = await reviewService.getById(reviewId);

        if (!review) {
            res.status(404).json({message: `Reseña no encontrada.`})
        }
        if (reviewId !== user){
            res.status(403).json({message: `No tienes permitido eliminar la reseña.`})
        }

        const result = await reviewService.remove(req.params.id);
        res.json(result);

    }catch (err){
        res.status(500).json({ error: err.message || 'Error al eliminar reseña.'})
    };
};