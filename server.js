const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.static(__dirname +'/public'));
app.use(bodyParser.json());


const postRoute = require('./routes/posts/posts');
const userRoute = require('./routes/users/users');
const quoteRoute = require('./routes/quotes/quotes');


app.use('/posts', postRoute);
app.use('/users', userRoute);
app.use('/quotes', quoteRoute);

app.get('/',(req,res)=>{
        res.render("index");
});



//database connection
//signup with MongoDB Atlas and use ur credentials: username and password.
mongoose.connect('mongodb+srv://thidiyas:<ur password>@alexander-irqlu.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true,useUnifiedTopology: true}, ()=>console.log("connected to database"));

let PORT = process.env.PORT || 8080;

app.listen(PORT,()=>console.log("server is listening on port 8080..."));
