const authController = require('./auth.controller')
const authService = require('../services/auth.service.js')

jest.mock('../services/auth.service.js')

let sendMock, statusMock, res

beforeEach(() => {
    sendMock = jest.fn();
    statusMock = jest.fn();
    res = {
        status: statusMock, send: sendMock
    }
    statusMock.mockImplementation(() => res)
})