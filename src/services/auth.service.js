const jwt = require('jsonwebtoken')

const SECRET_KEY = 'secretkey'

class authService {
    static async login(userName, password) {
        /**
         * 
         * validaciones here
         */

        // JWT 
        const payload = {
            check: true,
            role: 'user'
        };

        const token = jwt.sign(payload, SECRET_KEY, {
            expiresIn: 60 * 60
        });

        console.log(token)
        return {
            msg: 'Login successfully',
            token: token
        };
    }
}

module.exports = authService;