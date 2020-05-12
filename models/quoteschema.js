const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    genre:String,
    quote:{type: String, required: true},
    author: String
});

module.exports=mongoose.model("quoteSchema", quoteSchema);