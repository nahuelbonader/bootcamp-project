const jwt = require('jsonwebtoken')
const userDao = require('../daos/user.dao')
const SECRET_KEY = 'secretkey'

class authService {
    static async login(email) {
        const user = await userDao.getUserForAuthentication(email)
        const payload = {
            check: true,
            role: user.role,
            id: user.id
        };

        const token = jwt.sign(payload, SECRET_KEY, {
            expiresIn: 60 * 60
        });

        console.log(token)
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