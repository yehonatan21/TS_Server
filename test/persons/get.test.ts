// process.env.NODE_ENV = 'test';

import chai from 'chai'
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

chai.should()

chai.use(chaiHttp)

describe('Persons', () => {
  const host = "http://localhost:5000/person/";

  describe('GET/person/', () => {
    it('check error path', (done) => {
      chai
        .request(host)
        .get("/persons/")
        .end((err, res) => {
          res.should.have.status(404);
        })
      done();
    });
  });
  describe('GET/person/:firstName', () => {
    it('It should person by first name', (done) => {
      chai
        .request(host)
        .get("/Ross")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('string');
        })
      done();
    });
  })
})