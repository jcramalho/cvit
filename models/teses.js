var mongoose = require('mongoose')

var teseSchema = mongoose.Schema({
    aluno_nome: {type: String, required: true, max: 100},
    aluno_id: String,
    tese_titulo: {type: String, required: true, max: 200},
    tese_data: Date,
    docente_func: String,
    docente_nome: {type: String, required: true, max: 100}
})

// Export model
module.exports = mongoose.model('teses',teseSchema)
