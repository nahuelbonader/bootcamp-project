const userController = require('./user.controller');
const userService = require('../services/user.service.js');

jest.mock('../services/user.service.js');

let sendMock;
let statusMock;
let res;

beforeEach(() => {
  sendMock = jest.fn();
  statusMock = jest.fn();
  res = { status: statusMock, send: sendMock };
  statusMock.mockImplementation(() => res);
});

describe('user Controller', () => {
  describe('sign up method', () => {});
  describe('/put update user info', () => {});
  describe('delete single user', () => {});
  describe('get single user', () => {});
});
