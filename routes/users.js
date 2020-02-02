const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', async function (req,res,next){
    const users = await User.find({}).lean();
    res.json(users);
});

router.post('/register', function (req,res){
    res.status(200).send(req.body);
});


module.exports = router;