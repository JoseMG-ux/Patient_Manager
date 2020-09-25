const express = require('express');
const mongoose = require('mongoose')
//server
const app = express();

//connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
//port and enabled server
app.listen(4000, () => {
    console.log('running')
})