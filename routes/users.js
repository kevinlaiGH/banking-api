const express = require('express');

const router = express.Router();

router.get('/', function (req,res,next){
    res.json('All users sent');
});

router.post('/register', function (req,res){
    res.status(200).send(req.body);
});

router.post('/login', function (req,res){
    res.status(200).send(req.body);
});

module.exports = router;