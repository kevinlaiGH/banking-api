const express = require('express');
const users = require('./routes/users');

const app =  express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/api', users);
app.use('*', function(req,res){
    res.status(404).send("Route doesn't exist")
})

app.listen(port, function(req, res){
    console.log("Hello!");
});

module.exports = app;
