const userDao = require("../daos/user.dao");

class userService {
  static async create({
    username,
    firstName,
    lastName,
    email,
    password,
    role,
  }) {
    const user = [username, firstName, lastName, email, password, role];
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

  static async update({
    id,
    username,
    firstName,
    lastName,
    email,
    role,
  }) {
    const exists = await userDao.exists(id, "id");
    if (exists[0].exists === 0)
      throw {
        error: "user_not_found",
        msg: "Usuario no encontrado",
      };

    const user = [id, username, firstName, lastName, email, role];
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

  static async isUserRegister(email) {
    const exists = await userDao.exists(email, "email");
    if (exists[0].exists === 0)
      throw {
        errorStack: "user_not_found",
      }
    return true
  }
}

module.exports = userService;
