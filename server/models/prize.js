let mongoose = require('mongoose')
let Schema = mongoose.Schema

let PrizeSchema = new Schema({
  name: String,
  description: String,
  image_url: String,
  quantity: Number
})

module.exports = mongoose.model('Prize',PrizeSchema)
