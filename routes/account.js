const express = require('express');

const router = express.Router();

router.get('/account/balance', function (req,res,next){
    res.json('All users sent');
});

module.exports = router;