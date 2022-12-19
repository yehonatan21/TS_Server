import chai from 'chai'
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';

chai.should()

chai.use(chaiHttp)

describe('Persons - GET:', () => {
  const host = 'http://localhost:5000/person/';

  it('check error path - 404', (done) => {
    chai
      .request(host)
      .get('/persons/')
      .end((err, res) => {
        res.should.have.status(404);
      })
    done();
  });

  it('by first name - 200', (done) => {
    const name = 'Ross'
    chai
      .request(host)
      .get(`/${name}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('string');
      })
    done();
  });

  it('Get person group by first name', (done) => {
    const path = 'getPersonsGroup/'
    const name = 'Ross'
    chai
      .request(host)
      .get(path + name)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
      })
    done();
  });

  it('Get all persons', (done) => {
    const path = 'getAll'

    chai
      .request(host)
      .get(path)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
      })
    done();
  });
})