const cartDao = require('../dao/cart.dao');

class userService {
    static async create(userId, status) {
        const result = await cartDao.exists(userId, 'userId');
        const exists = result[0].exists;
        //VALIDAR SI YA POSEE UN CARRO ACTIVO
        if (exists > 0)
            throw { errorStack: 'cart_already_created' };
        const cart = [userId, status];
        return cartDao.create(cart);
    }

    static async update(id, email, userName, firstName, lastName) {
        const exists = await cartDao.exists(id, 'id');
        if (exists[0].exists === 0)
            throw {
                errorStack: 'user_not_found',
            };

        return cartDao.update(id, email, userName, firstName, lastName);
    }

    static async delete(id) {
        const exists = await cartDao.exists(id, 'id');
        if (exists[0].exists === 0)
            throw {
                errorStack: 'cart_not_found',
            };

        return cartDao.delete(id);
    }

    static async get(id) {
        const exists = await cartDao.exists(id, 'id');
        if (exists[0].exists === 0)
            throw {
                errorStack: 'cart_not_found',
            };

        return cartDao.get(id);
    }
}

module.exports = userService;