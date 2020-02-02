const app = require('../index.js')
const request = require('supertest');
const mongoose = require('mongoose');
const dbConfig = require('../config/db.json');
const User = require('../models/User');
const chai = require('chai');
const expect = chai.expect;

var userData = {
    firstname: 'Ahmed',
    lastname: 'Shaaban',
    email: 'ahmed@example.com',
    password: 'test1234'
  };


describe.only('GET /', function () {
    //Before starting the test, create a sandboxed database connection
    //Once a connection is established invoke done()
    before(async function () {
        mongoose.connect(dbConfig.test.MONGODB_URI);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
          console.log('We are connected to test database!');
        });

        const validUser = new User(userData);
        const savedUser = await validUser.save();
        expect(savedUser._id).to.not.be.empty;
      });

    it('responds with /api', () => {
        request(app)
            .get('/api')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body).length(1);
            });
    });
    it('responds with /api', function(done) {
        request(app)
            .get('/api')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
    it('responds with /api/account/balance', function(done) {
        request(app)
            .get('/api/account/balance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    after(function(done){
        mongoose.connection.db.dropDatabase(function(){
          mongoose.connection.close(done);
        });
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

