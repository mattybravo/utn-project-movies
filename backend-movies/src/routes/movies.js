//Importaciones
const express = require(`express`);
const router = express.Router();
const moviesController = require(`../controllers/movies.controller`);



router.get(`/`,moviesController.getAll);

module.exports = router;