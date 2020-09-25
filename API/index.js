const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
//server instance
const app = express();

//connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//Enabled routing
app.use('/', routes());


//port and enabled server
app.listen(4000, () => {
    console.log('running')
})