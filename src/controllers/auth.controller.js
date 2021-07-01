const authService = require('../services/auth.service')
const userService = require('../services/user.service')
const errors = require('./utils/errorsSpecification')

class authController {
    static async authenticate(req, res) {
        const { email, password } = req.body
        try {
            const isUserRegister = await userService.isUserRegister(email, `email`)
            if (typeof email !== 'string' || typeof password !== 'string') {
                console.log(
                    'Required parameter is missing or wrong type'
                );
                return res.status(400).send();
            }
            if (isUserRegister) {
                const result = await authService.login(
                    email
                );
                return res.status(200).send(result);
            }
        } catch ({ errorStack }) {
            const { status, ...rest } = errors[errorStack]
            if (status === undefined) return res.status(500).send();
            return res.status(status).send(rest);
        }
    }
}

module.exports = authController