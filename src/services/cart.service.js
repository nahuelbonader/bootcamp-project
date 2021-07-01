const cartDao = require("../daos/cart.dao");

class userService {
  static async create(userId, status) {
    const result = await cartDao.exists(userId, "userId");
    const exists = result[0].exists;
    //VALIDAR SI YA POSEE UN CARRO ACTIVO
    if (exists > 0) throw { errorStack: "cart_already_created" };

    const cart = [userId, status];
    return cartDao.create(cart);
  }

  static async get(id) {
    const exists = await cartDao.exists(id, "id");
    if (exists[0].exists === 0)
      throw {
        errorStack: "cart_not_found",
      };

    return cartDao.get(id);
  }

  static async update(id) {
    const exists = await cartDao.exists(id, "id");
    console.log(exists);
    if (exists[0].exists === 0)
      throw {
        errorStack: "cart_not_found",
      };

    return cartDao.update(id, status);
  }

  static async delete(id) {
    const exists = await cartDao.exists(id, "id");
    if (exists[0].exists === 0)
      throw {
        errorStack: "cart_not_found",
      };

    return cartDao.delete(id);
  }
}

module.exports = userService;
