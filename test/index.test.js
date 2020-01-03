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

