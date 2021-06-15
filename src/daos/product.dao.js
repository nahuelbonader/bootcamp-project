const { query } = require("../repositories/main.repository");

class ProductDao {
  static exists(value, field) {
    const sql = `SELECT COUNT(*) AS 'exists' FROM Product WHERE ${field} = ?`;

    return query(sql, value);
  }
}

module.exports = ProductDao;
