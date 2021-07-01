const { query } = require("../repositories/main.repository");

class userDao {
  static create(user) {
    const insertUserQuery = `INSERT INTO User (username, firstName, lastName, email, passwordEncrypted, role) 
        values (?, ?, ?, ?, ?, ?)`;
    return query(insertUserQuery, user);
  }

  static exists(value, field) {
    const sql = `SELECT COUNT(*) AS 'exists' FROM User WHERE ${field} = ?`;
    return query(sql, value);
  }

  static get(id) {
    const sql = `SELECT username, firstName, lastName, email, createdAt, role FROM User WHERE id = ?`;
    return query(sql, id);
  }

  static delete(id) {
    const sql = `DELETE FROM User WHERE id = ?`;
    return query(sql, id);
  }

  static update(id, username, firstName, lastName, email, role) {
    let filters = "";
    const queryParams = [];
    let fields = 0;

    if (email) {
      filters += `email = ?`;
      queryParams.push(email);

      fields++;
    }
    if (username) {
      if (fields > 0) filters += `,`;

      filters += `username = ?`;
      queryParams.push(username);

      fields++;
    }
    if (firstName) {
      if (fields > 0) filters += `,`;

      filters += `firstName = ?`;
      queryParams.push(firstName);

      fields++;
    }
    if (lastName) {
      if (fields > 0) filters += `,`;

      filters += `lastName = ?`;
      queryParams.push(lastName);

      fields++;
    }
    if (role) {
      if (fields > 0) filters += `,`;

      filters += `role = ?`;
      queryParams.push(role);

      fields++;
    }
    let sql = `UPDATE User SET ${filters} WHERE id = ?`;
    queryParams.push(id);
    return query(sql, queryParams);
  }
}

module.exports = userDao;
