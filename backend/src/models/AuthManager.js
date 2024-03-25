const AbstractManager = require("./AbstractManager");

class AuthManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  // CRUD : Create Read Update Delete
  async readByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where email = ?`,
      [email]
    );

    return rows[0];
  }
}

module.exports = AuthManager;
