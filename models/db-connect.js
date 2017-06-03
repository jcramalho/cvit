//setting database
var mongoose = require('mongoose')
mongoose.connect('mongodb://guest:iamaguest@ds155411.mlab.com:55411/teses')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function(){
  console.log("Ligação ao Mongo estabelecida.")
})

// Export model
module.exports = db
