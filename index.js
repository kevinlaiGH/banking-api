const express = require('express');
const routes = require('./routes/users');

const app =  express();
const port = 3000;

app.use(express.json());
app.use('/api', routes);
app.listen(port, function(req, res){
    console.log("Hello!");
});

module.exports = app;
