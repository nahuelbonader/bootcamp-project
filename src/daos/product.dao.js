const { query } = require("../repositories/main.repository");

class ProductDao {
  static exists(value, field) {
    const sql = `SELECT COUNT(*) AS 'exists' FROM Product WHERE ${field} = ?`;

    return query(sql, value);
  }

  static get(id) {
    const sql = `SELECT id, name, brand, price, createdAt role FROM Product WHERE id = ?`;
    return query(sql, id);
  }

  static delete(id) {
    const sql = `DELETE FROM Product WHERE id = ?`;
    return query(sql, id);
  }

  static update(id, name, brand, price) {
    let filters = "";
    const queryParams = [];
    let fields = 0;

    if (name) {
      filters += `name = ?`;
      queryParams.push(name);

      fields++;
    }
    if (brand) {
      if (fields > 0) filters += `,`;

      filters += `brand = ?`;
      queryParams.push(brand);

      fields++;
    }
    if (price) {
      if (fields > 0) filters += `,`;

      filters += `price = ?`;
      queryParams.push(price);

      fields++;
    }
    
    let sql = `UPDATE FROM SET ${filters} WHERE id = ?`;
    queryParams.push(id);
    return query(sql, queryParams);
  }
}

module.exports = ProductDao;
