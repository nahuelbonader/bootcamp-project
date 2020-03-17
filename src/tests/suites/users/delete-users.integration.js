const request = require('supertest');
const app = require('../../../../app');
const {version} = require('../../../router');

module.exports = () =>
  describe('delete /v1/users/:id', () => {
    it('should fail with 404 if user is not found', done => {
      request(app)
        .delete(`/${version}/users/10000`)
        .then(response => {
          expect(response.statusCode).toBe(404);
          done();
        });
    });

    it('it should succeed with 200 and delete user', done => {
      const randomNumber = Math.floor(Math.random() * Math.floor(1000));
      const body = {
        email: `silviagarcia${randomNumber}@test.com`,
        password: 'password',
        firstName: 'Silvia',
        lastName: 'Garcia',
        userName: 'silviaGarcia65',
      };
      let id;

      request(app)
        .post(`/${version}/users`)
        .send(body)
        .then(response => {
          id = response.body.insertId;
          console.log('responsee', response.body)
          request(app)
            .delete(`/${version}/users/${id}`)
            .then(response => {
              expect(response.statusCode).toBe(200);
              done();
            });
        });
    });
  });
