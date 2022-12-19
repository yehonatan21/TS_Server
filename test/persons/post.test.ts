import chai from 'chai'
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

chai.should()

chai.use(chaiHttp)

describe('Person - POST /', () => {
    const host = "http://localhost:5000/person/";

    it('check POST method', (done) => {
        chai
            .request(host)
            .post("/persons/")
            .end((err, res) => {
                res.should.have.status(200);
            })
        done();
    });

    it('It should person by first name', (done) => {
        chai
            .request(host)
            .post("Ross")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('string');
            })
        done();
    });
});