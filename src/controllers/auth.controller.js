const authService = require('../services/auth.service')

const user = {
    userName: 'nai',
    password: 'asd123'
}

class authController {
    static async authenticate(req, res) {
        const { userName, password } = req.body

        if (typeof userName !== 'string' || typeof password !== 'string') {
            console.log(
                'Call id: %s error:%s',
                callId,
                'Required parameter is missing or wrong type'
            );
            return res.status(400).send();
        }

        try {
            const result = await authService.login(
                userName,
                password
            );
            return res.status(200).send(result);
        } catch (error) {
            const status = error.status
            if (status === undefined) return res.status(500).send();
            return res.status(status).send(error);
        }

    }
}

module.exports = authController