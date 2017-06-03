var mongoose = require('mongoose')

var funcaoSchema = mongoose.Schema({
    nome: {type: String, required: true, min: 3, max: 100}
})

// Export model
module.exports = mongoose.model('Funcao', funcaoSchema)