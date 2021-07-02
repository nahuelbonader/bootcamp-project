const jwt = require('jsonwebtoken')
const userDao = require('../daos/user.dao')
const SECRET_KEY = 'secretkey'

class authService {
    static async login(email) {
        const user = await userDao.getUserForAuthentication(email)

        const payload = {
            check: true,
            role: user[0].role,
            id: user[0].id,
        };

        const token = jwt.sign(payload, SECRET_KEY, {
            expiresIn: 60 * 60
        });

        try {
            return {
                msg: 'Login successfully',
                token: token
            };
        } catch (error) {
            return {
                errorStack: 'user_not_found'
            }
        }
    }
}

module.exports = authService;