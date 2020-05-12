const express = require('express');
const router = express.Router();
const quotes = require('../../models/quoteschema');

router.get('/', (req, res)=>{
    res.send("quotes");
});

router.post('/', (req, res)=>{
    res.send("quotes");
});


module.exports=router;