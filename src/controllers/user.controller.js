const userService = require("../services/user.service");

class userController {
  static async create(req, res) {
    const { username, firstName, lastName, email, password } = req.body;
    if (
      (email && typeof email !== "string") ||
      (password && typeof password !== "string") ||
      (username && typeof username !== "string") ||
      (firstName && typeof firstName !== "string") ||
      (lastName && typeof lastName !== "string")
    ) {
      return res.status(400).send("Input incorrecto");
    }
    try {
      const result = await userService.create(req.body);
      return res.status(201).send(result);
    } catch (error) {
      const status = error.status;
      if (status === undefined) return res.status(500).send();
      return res.status(status).send(error);
    }
  }

  static async get(req, res) {
    const { id } = req.params;
    if (id && typeof id !== "string") {
      return res.status(400).send("ID de usuario inválido");
    }
    try {
      const userFound = await userService.get(id);
      if (userFound.error) {
        return res.status(404).send(userFound.msg);
      }
      return res.status(200).send(userFound);
    } catch (error) {
      const status = error.status;
      if (status === undefined) return res.status(500).send();
      return res.status(status).send(error);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    if (id && typeof id !== "string") {
      return res.status(400).send("ID de usuario inválido");
    }
    try {
      const userFound = await userService.update(req.body);
      if (userFound.error) {
        return res.status(404).send(userFound.msg);
      }
      return res.status(200).send(userFound);
    } catch (error) {
      const status = error.status;
      if (status === undefined) return res.status(500).send();
      return res.status(status).send(error);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    if (id && typeof id !== "string") {
      return res.status(400).send("ID de usuario inválido");
    }
    try {
      const userFound = await userService.delete(id);
      if (userFound.error) {
        return res.status(404).send(userFound.msg);
      }
      return res.status(204).send("Operación exitosa");
    } catch (error) {
      const status = error.status;
      if (status === undefined) return res.status(500).send();
      return res.status(status).send(error);
    }
  }
}

module.exports = userController;
