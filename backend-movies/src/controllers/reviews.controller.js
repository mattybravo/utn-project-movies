const service = require(`../services/reviews.service`);
//obtener todas las reseñas
exports.getReviews = async (req, res) =>{

try {
const reviews = await service.getAllReviews();
res.json(reviews);
}    
catch (err){
res.status(500).json({error:`Error al obtener reseñas`})}
};

//obtener una reseña
exports.getOne = async (req, res) =>{

try{
const review = await service.getById(req.params.id);
if (!review) {
return res.status(404).json({error:`Reseña no encontrada`});
}
res.json(review);
}catch (err){
 res.status(500).json({ error: 'Error al obtener reseña' });
}
};

//crear reseña
exports.createReview = async (req, res) =>{

try{
const newReview = await service.create(req.body);
res.status(201).json(newReview);
}
catch (err){
 res.status(500).json({ error: 'Error al crear reseña' });
}
};