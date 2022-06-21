var express = require('express');
const { Model } = require('sequelize/types');
var router = express.Router();
var apiController = require('../controllers/apiController');

//list produts
router.get('/movies', apiController.getMovies); //mudar para livros

module.exports = router;

