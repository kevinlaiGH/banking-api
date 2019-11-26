const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Sydney Opera House',
        description: 'Best place to visit in Sydney',
        location: {
            lat: -33.8841629,
            long: 151.1971893
        },
        address: 'Sydney Opera House, Bennelong Point, Sydney NSW 2000',
        creator: 'kevin'

    }
]

router.get('/:pid', (req,res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find( p => {
        return p.id === placeId;
    })
    res.json({place});
})

router.get('/user/:uid')

module.exports = router;