const express = require('express');
const router = express.Router();
const users = require('../../models/userschema');


//GET request handler
router.get('/', async(req,res) => {

    console.log(" GET Request for user ...");

     try {
        //query database for posts
         const user = await users.find().limit(20);
         //send results to client
         res.json(user);
     } catch (error) {
         res.json({message : error});
     }

});


//POST request handler
router.post('/',  async(req, res)=>{
    
    console.log("POST Request for user...");

    //create new user post
    const user = new users({
        name: req.body.name,
        username: req.body.username,
        email:  req.body.email,
        phone:req.body.phone,
        address:{
            street:  req.body.address.street,
            city : req.body.address.city,
            pincode : req.body.address.pincode,
            country : req.body.address.country
        },
        company:{
            name : req.body.company.name,
            designation : req.body.company.designation
        }
    });

    try {
        //save user to database
        const savedUser = await user.save();

        //return the saved user
        res.json(savedUser);
    } catch (error) {
        res.json(error);
    }
});

module.exports=router;