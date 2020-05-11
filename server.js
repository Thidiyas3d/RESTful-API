const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());


const postRoute = require('./routes/posts/posts');
const userRoute = require('./routes/users/users');


app.use('/posts', postRoute);
app.use('/users', userRoute);

app.get('/',(req,res)=>{
        res.send("Home page");
});



//database connection
//NOTE: add ur mongodb database username : password below
mongoose.connect('mongodb+srv://thidiyas:<ur password>@alexander-irqlu.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true,useUnifiedTopology: true}, ()=>console.log("connected to database"));



app.listen(8080,()=>{
        console.log("server is listening on port 8080...");
});
