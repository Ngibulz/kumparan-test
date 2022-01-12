const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe("article", () => {
  describe("GET /", () => {
    it("should get all article sorted", (done) => {
      chai.request(app)
        .get('/api/article')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    it("should get a article with name tests", (done) => {
      const title = "tests";
      chai.request(app)
        .get(`/api/article2/${title}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it("should get a author aku", (done) => {
      const name = "aku";
      chai.request(app)
        .get(`/api/article/${name}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

  });
});