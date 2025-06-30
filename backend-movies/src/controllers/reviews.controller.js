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

// Crear reseña
exports.createReview = async (req, res) => {
  try {
    const userId = req.user.id;
    const newReview = await reviewService.create(req.body, userId);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear reseña' });
  }
};

// Editar reseña
exports.updateReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const userId = req.user.id;

    const review = await reviewService.getById(reviewId);

    if (!review) {
      return res.status(404).json({ message: 'Reseña no encontrada.' });
    }

    if (review.user_id !== userId) {
      return res.status(403).json({ message: 'No tienes permitido editar esta reseña.' });
    }

    const updatedReview = await reviewService.update(reviewId, req.body);
    res.json(updatedReview);
  } catch (err) {
    res.status(500).json({ error: 'Error al editar reseña' });
  }
};

// Eliminar reseña
exports.deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;
    const userId = req.user.id;

    const review = await reviewService.getById(reviewId);

    if (!review) {
      return res.status(404).json({ message: 'Reseña no encontrada.' });
    }

    if (review.user_id !== userId) {
      return res.status(403).json({ message: 'No tienes permitido eliminar esta reseña.' });
    }

    await reviewService.remove(reviewId);
    res.json({ message: 'Reseña eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar reseña.' });
  }
};
