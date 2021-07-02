const { query } = require("../repositories/main.repository");

class cartDao {
  static async exists(value, field) {
    let cart = null;
    const existQuery = `SELECT COUNT(*) AS 'exists' FROM Cart WHERE ${field} = ?`;
    const getCartQuery = `SELECT * FROM Cart WHERE ${field} = ?`;
    const exist = await query(existQuery, value);
    if (exist[0].exists === 1) {
      cart = await query(getCartQuery, value);
    }
    return { ...cart[0] };
  }

  static get(id) {
    const sql = `SELECT userId, status, createdAt FROM User WHERE id = ?`;
    return query(sql, id);
  }

  static create(cart) {
    const insertUserQuery = `INSERT INTO Cart (userId, status) 
            values (?, ?)`;
    return query(insertUserQuery, cart);
  }

  static update(id, status) {
    let filters = "";
    const queryParams = [];
    let fields = 0;

    if (status) {
      filters += `status = ?`;
      queryParams.push(status);

      fields++;
    }

    let sql = `UPDATE User SET ${filters} WHERE id = ?`;

    queryParams.push(id);

    return query(sql, queryParams);
  }

  static delete(id) {
    const sql = `DELETE FROM User WHERE id = ?`;

    return query(sql, id);
  }
}

module.exports = cartDao;
