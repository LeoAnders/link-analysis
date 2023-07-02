const mongoose = require("mongoose")

const linkSchema = new mongoose.Schema({
  title:{type:String, require:true},
  description:"string",
  url:{type:String, require:true},
  click: {type:Number, default: 0}
})

module.exports = mongoose.model("Link", linkSchema)