const express = require('express');
const users = require('./routes/users');
const login = require('./routes/login');
const account = require('./routes/account');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.json');

const app =  express();
const port = 3000;

app.use(express.json());

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(dbConfig.development.MONGODB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

// Routes
app.use('/api', users);
app.use('/api', login);
app.use('/api', account);
app.use('*', function(req,res){
    res.status(404).send("Route doesn't exist")
})

app.listen(port, function(req, res){
    console.log("Hello!");
});

module.exports = app;
