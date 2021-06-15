const cartDao = require('../dao/cartDao.dao');

class userService {
    static async create(email, password, userName, firstName, lastName) {
        const result = await cartDao.exists(email, 'email');
        const exists = result[0].exists;

        if (exists > 0)
            throw { status: 409, error: 'email_in_use', msg: 'Email en uso' };

        const user = [email, password, userName, firstName, lastName];

        return cartDao.signUp(user);
    }

    static async update(id, email, userName, firstName, lastName) {
        const exists = await cartDao.exists(id, 'id');
        console.log(exists)
        if (exists[0].exists === 0)
            throw {
                status: 404,
                error: 'user_not_found',
                msg: 'Usuario no encontrado'
            };

        return cartDao.update(id, email, userName, firstName, lastName);
    }

    static async delete(id) {
        const exists = await cartDao.exists(id, 'id');
        if (exists[0].exists === 0)
            throw {
                status: 404,
                error: 'user_not_found',
                msg: 'Usuario no encontrado'
            };

        return cartDao.delete(id);
    }

    static async get(id) {
        const exists = await cartDao.exists(id, 'id');
        if (exists[0].exists === 0)
            throw {
                status: 404,
                error: 'user_not_found',
                msg: 'Usuario no encontrado'
            };

        return cartDao.get(id);
    }
}

module.exports = userService;