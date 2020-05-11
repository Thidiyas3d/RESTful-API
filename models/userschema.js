const mongoose = require('mongoose');

//Schema for collections user
const userSchema = mongoose.Schema({
    name: {type:String, required: true},
    username:String,
    email: {type: String, required:true},
    address:{
        street: String,
        city : String,
        pincode : Number,
        country : String
    },
    phone:Number,
    
    company:{
        name : String,
        designation : String,
    }
});

module.exports = mongoose.model("userSchema", userSchema);