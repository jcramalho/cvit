var listaTeses = require(__dirname + '/../models/teses')

// Rotinas de resposta aos pedidos sobre teses

// Listar todas as teses
exports.teseList = function(req, res){
    listaTeses.find().sort({ tese_data : -1}).exec((err, tList) => {
      if(!err) 
        res.render('temp-teses', {lista: tList})
      else
        console.log('Error: ' + err + ' - retrieving teses.')
    })
}

// Listar detalhes de uma tese
exports.teseInfo = function(req, res){
    res.send('Ainda não implementada: detalhes de uma tese')
}

// Form para a criação de uma nova tese num pedido GET
exports.tese_create_get = function(req, res){
    res.render('temp-tese-create')
}

// Criação de uma nova tese num pedido POST
exports.tese_create_post = function(req, res){
    res.send('Ainda não implementada: criação de uma nova tese num pedido POST')
}

// Form para a remoção de uma tese num pedido GET
exports.tese_delete_get = function(req, res){
    res.send('Ainda não implementada: remoção de uma tese num pedido GET')
}

// Remoção de uma tese num pedido POST
exports.tese_delete_post = function(req, res){
    res.send('Ainda não implementada: remoção de uma tese num pedido POST')
}

// Form para a atualização de uma tese num pedido GET
exports.tese_update_get = function(req, res){
    res.send('Ainda não implementada: atualização de uma tese num pedido GET')
}

// Atualização de uma tese num pedido POST
exports.tese_update_post = function(req, res){
    res.send('Ainda não implementada: atualização de uma tese num pedido POST')
}