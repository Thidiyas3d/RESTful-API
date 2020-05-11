const express = require('express');
const router = express.Router();
const posts = require('../../models/postschema');

router.get('/', async (req,res) => {
    console.log("GET Request for posts...");
  
    try {
        const post = await posts.find().limit(20);
        res.json(post);
      } catch (err) {
        res.json(err);
      }
      
});

router.post('/', async(req, res)=>{
    console.log("POST Request for posts...");    
    const post = new posts({
            title: req.body.title,
            body:req.body.body
    });
  
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }
    catch(err){
            res.json({message:err});
        }
   
        
});

module.exports=router;