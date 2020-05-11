const mongoose = require('mongoose');

//schema for collection posts
const postSchema = mongoose.Schema({
    title: {type: String, required:true},
    body: {type:String}
});

module.exports = mongoose.model("postSchema", postSchema);
