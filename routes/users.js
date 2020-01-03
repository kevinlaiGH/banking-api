const express = require('express')

const router = express.Router();

router.get('/', function (req,res,next){
    res.json('All users sent');
});

module.exports = router;