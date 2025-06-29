//importaciones
const express = require(`express`);
const router = express.Router();
const reviewsController = require(`../controllers/reviews.controller`);
const {auntheticateToken} = require(`../middlewares/auth.middleware`)

router.get(`/`, reviewsController.getReviews);

router.get("/movie/:movieId", reviewsController.getByMovieId);


router.get(`/:id`, reviewsController.getOne);

router.post(`/`, auntheticateToken, reviewsController.createReview);

//editar reseña
router.put(`/:id`, auntheticateToken, reviewsController.updateReview);

//eliminar reseña
router.delete(`/:id`, auntheticateToken, reviewsController.deleteReview);

module.exports = router;