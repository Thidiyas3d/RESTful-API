const express = require('express');
const router = express.Router();
const quotes = require('../../models/quoteschema');

router.get('/', async(req, res)=>{
   console.log("GET Request for quotes");

   const quote = await quotes.find().limit(10);

   try {
       res.json(quote);
   } catch (error) {
       res.json({message:error});
   }
});

router.post('/', async(req, res)=>{
    console.log("POST Request for quotes...");

    const quote = new quotes({
        genre:req.body.genre,
        quote: req.body.quote,
        author: req.body.author
    });

    try {
        const savedQuote = await quote.save();
        res.json(savedQuote);
    } catch (error) {
        res.json({message: error});
    }
});


module.exports=router;