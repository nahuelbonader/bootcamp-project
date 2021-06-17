const productDao = require("../daos/product.dao");

class productService {
  static async getOne(id) {
    try {
      const res = await productDao.exists(id, "id");

      if (!res[0].exists)
        throw {
          error: "product_not_found",
          msg: "Producto no encontrado",
        };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = productService;
