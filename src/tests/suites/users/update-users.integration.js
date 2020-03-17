const request = require('supertest');
const app = require('../../../../app');
const {version} = require('../../../router');

module.exports = () =>
  describe('PUT update /v1/users/:id', () => {
    it('should fail with 400 if email is sent with wrong type', done => {
      request(app)
        .put(`/${version}/users/1`)
        .send({firstName: 1})
        .then(response => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });

    it('should fail with 404 if user is not found', done => {
      request(app)
        .put(`/${version}/users/10000`)
        .send({firstName: 'name'})
        .then(response => {
          expect(response.statusCode).toBe(404);
          done();
        });
    });

    it('should succeed with 200 and update user', done => {
      request(app)
        .put(`/${version}/users/1`)
        .send({firstName: 'newName'})
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
