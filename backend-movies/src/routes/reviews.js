//importaciones
const express = require(`express`);
const router = express.Router();
const reviewsController = require(`../controllers/reviews.controller`);

router.get(`/`, reviewsController.getReviews);

router.get(`/:id`, reviewsController.getOne);

router.post(`/`, reviewsController.createReview);

//editar reseña
router.put(`/:id`, reviewsController.updateReview);

//eliminar reseña
router.delete(`/:id`, reviewsController.deleteReview);

module.exports = router;