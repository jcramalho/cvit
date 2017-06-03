//displaying time on console
var date = require('date-and-time')
var now = new Date();
date.format(now, 'HH:mm')
console.log(now)

//reading JSON
const jf = require('jsonfile')

var myTeses = jf.readFileSync(__dirname + "/../models/teses.json")
console.log("Lista de teses carregada: " + myTeses.length + " teses")

//setting database
var mongoose = require('mongoose')
mongoose.connect('mongodb://guest:iamaguest@ds155411.mlab.com:55411/teses')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function(){
  console.log("Ligação ao Mongo estabelecida.")
})

var teseModel = require(__dirname + "/../models/teses.js")
  
myTeses.forEach(function(tese) {
    var t = new teseModel(tese)
    t.save(function (err){
      if(!err)
        console.log('Tese guardada: ' + tese.tese_titulo)
      else
        console.log("Erro ao guardar tese: " + err)
    })
})

db.close(function(){
  console.log("That's all folks!")
})
