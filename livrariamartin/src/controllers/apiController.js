let db = require('../database/models'); //falta arquivo models

let apiController = {
    getMovies: function(req, res) {
        return res.json('Bem vindo')
    }
}; 

module.exports = apiController;