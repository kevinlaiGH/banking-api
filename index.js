const express = require('express');
const users = require('./routes/users');
const login = require('./routes/login');

const app =  express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/api', users);
app.listen(port, function(req, res){
    console.log("Hello!");
});

module.exports = app;
