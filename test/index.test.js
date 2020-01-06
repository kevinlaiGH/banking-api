const app = require('../index.js')
const request = require('supertest');

describe('GET /', function () {
    it('responds with /api', function(done) {
        request(app)
            .get('/api')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /', function () {
    it('responds with /api/register', function(done) {
        request(app)
            .post('/api/register')
            .send({
                "name": "Kevin Lai",
                "email": "kevin.km.lai@gmail.com",
                "password": "password123456"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect(function (res)
            {
                res.body.name = "Kevin Lai"
                res.body.password = "password123456"
            })
    });

    it('responds with /api/login', function(done) {
        request(app)
            .post('/api/login')
            .send({
                "name": "Kevin Lai",
                "email": "kevin.km.lai@gmail.com",
                "password": "password123456"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect(function (res)
            {
                res.body.name = "Kevin Lai"
                res.body.password = "password123456"
            })
    });

    it('responds with /api/logout', function(done) {
        request(app)
            .post('/api/logout')
            .send({
                "name": "Kevin Lai",
                "email": "kevin.km.lai@gmail.com",
                "password": "password123456"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect(function (res)
            {
                res.body.name = "Kevin Lai"
                res.body.password = "password123456"
            })
    });
});

