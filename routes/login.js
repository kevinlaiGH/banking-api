const express = require('express');

const router = express.Router();

router.post('/login', function (req,res){
    res.status(200).send(req.body);
});

router.post('/logout', function (req,res){
    res.status(200).send(req.body);
});

module.exports = router;