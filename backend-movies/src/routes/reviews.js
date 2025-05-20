//importaciones
const express = require(`express`);
const router = express.Router();
const reviewsController = require(`../controllers/reviews.controller`);

router.get(`/`, reviewsController.getReviews);

router.get(`/:id`, reviewsController.getOne)

router.post(`/`, reviewsController.createReview);

//editar reseña
router.put(`/:id`,(req, res) =>{
res.send(`Editar reseña mediante id ${req.params.id}`)
});
//eliminar reseña
router.delete(`/:id`,(req, res) =>{
res.send(`Eliminar reseña`)
});

module.exports = router;