const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  // CRUD : Create Read Update Delete
  // C: ajoute un nouvel utilisateur avec create à la table users.
  async create({
    email,
    passeword,
    firstName,
    lastName,
    createDate,
    lastConnection,
    profile,
  }) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (email, passeword,firstName,lastName,createDate,lastConnection,profile) VALUES (?,?,?,?,?,?,?)`,
      [
        email,
        passeword,
        firstName,
        lastName,
        createDate,
        lastConnection,
        profile,
      ]
    );

    return rows.insertId;
  }

  // R: recupère un utilisateur spécifique (read) ou plusieur utilisateur (readAll) dans la table users.ici j'ai 3 methodes pour lire les info de l'utilisateur: read, readAll et readByEmail

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  // partie ajouter par charles: recupère un utilisateur spécifique (readByEmail) dans la table users
  async readByEmail(email) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where email = ?`,
      [email]
    );

    return rows[0];
  }

  // U: modifie un utilisateur spécifique (update) dans la table users en fonction de l'id.
  async update(
    id,
    {
      email,
      passeword,
      firstName,
      lastName,
      createDate,
      lastConnection,
      profile,
    }
  ) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET email = ?, passeword = ?, firstName = ?, lastName = ?, createDate = ?, lastConnection = ?, profile = ? WHERE id = ?`,
      [
        email,
        passeword,
        firstName,
        lastName,
        createDate,
        lastConnection,
        profile,
        id,
      ]
    );
    return rows[0];
  }

  // D: supprime un utilisateur spécifique (delete) dans la table en fonction de l'id.
  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = UsersManager;
