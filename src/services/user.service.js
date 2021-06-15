const userDao = require("../daos/user.dao");

class userService {
  static async create({ username, firstName, lastName, email, password }) {
    const user = [username, firstName, lastName, email, password];
    return userDao.create(user);
  }

  static async get(id) {
    const exists = await userDao.exists(id, "id");
    if (exists[0].exists === 0)
      throw {
        error: "user_not_found",
        msg: "Usuario no encontrado",
      };

    return userDao.get(id);
  }

  static async update(user) {
    const exists = await userDao.exists(id, "id");
    if (exists[0].exists === 0)
      throw {
        error: "user_not_found",
        msg: "Usuario no encontrado",
      };

    return userDao.update(user);
  }

  static async delete(id) {
    const exists = await userDao.exists(id, "id");
    if (exists[0].exists === 0)
      throw {
        error: "user_not_found",
        msg: "Usuario no encontrado",
      };

    return userDao.delete(id);
  }
}

module.exports = userService;
