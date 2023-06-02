const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine","ejs")
mongoose.connect('mongodb://127.0.0.1:27017/results')
.then(()=>console.log("Database connected Succesfully"))
.catch((err)=>console.log(err));

const topResults= require('./DB')

app.get('/', async (req, res) => {
    try {
      const data = await topResults.find(); 
      res.render('index', { data });
    } catch (err) {
      console.log(err);
      res.send('Error occurred');
    }
  });


app.listen(port,()=>{console.log(`Listening to port ${port}`)})