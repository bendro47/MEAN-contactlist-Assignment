var mongoose = require('mongoose');
var ContactSchema = new mongoose.Schema({
    Name: String,
    HomeNumber: String,
    CellNumber:String,
    Email:String,
    
    updated_date: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Contact', ContactSchema);