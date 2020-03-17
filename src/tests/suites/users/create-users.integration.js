const request = require('supertest');
const app = require('../../../../app');
const {version} = require('../../../router');

module.exports = () =>
  describe('POST create User', () => {
    it('it should fail with 400 if email is missing', done => {
      const body = {
        password: '123',
        firstName: 'firstName',
        lastName: 'lastName',
      };

      request(app)
        .post(`/${version}/users`)
        .send(body)
        .then(response => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });

    it('it should fail with 400 if password is missing', done => {
      const body = {
        email: 'email@test.com',
        firstName: 'firstName',
        lastName: 'lastName',
      };

      request(app)
        .post(`/${version}/users`)
        .send(body)
        .then(response => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });

    it('it should fail with 400 if firstName is missing', done => {
      const body = {
        email: 'email@test.com',
        password: '123',
        lastName: 'lastName',
      };

      request(app)
        .post(`/${version}/users`)
        .send(body)
        .then(response => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });

    it('it should fail with 400 if lastName is missing', done => {
      const body = {
        email: 'email@test.com',
        password: '123',
        firstName: 'firstName',
      };

      request(app)
        .post(`/${version}/users`)
        .send(body)
        .then(response => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });

    it('it should fail with 400 if userName is missing', done => {
      const body = {
        email: 'email@test.com',
        password: '123',
        firstName: 'firstName',
        lastName: 'lastName',
      };

      request(app)
        .post(`/${version}/users`)
        .send(body)
        .then(response => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });

    it('it should fail with 400 if a parameter has wrong type', done => {
      const body = {
        email: 1,
        password: '123',
        username: 'username',
        firstName: 'firstName',
        lastName: 'lastName',
      };

      request(app)
        .post(`/${version}/users`)
        .send(body)
        .then(response => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });

    it('it should pass with 200', done => {
      const randomNumber = Math.floor(Math.random() * Math.floor(1000));
      const body = {
        email: `silviagarcia${randomNumber}@test.com`,
        password: 'password',
        firstName: 'Silvia',
        lastName: 'Garcia',
        userName: 'silviaGarcia65'
      };

      request(app)
        .post(`/${version}/users`)
        .send(body)
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
