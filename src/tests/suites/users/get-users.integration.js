const request = require('supertest');
const app = require('../../../../app');
const {version} = require('../../../router');

module.exports = () =>
  describe('get /v1/users/:id', () => {
    it('should fail with 404 if user is not found', done => {
      request(app)
        .get(`/${version}/users/10000`)
        .then(response => {
          expect(response.statusCode).toBe(404);
          done();
        });
    });

    it('it should succeed with 200 and get user', done => {
      request(app)
        .get(`/${version}/users/1`)
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
