const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  // CRUD : Create Read Update Delete
  // C: ajoute un nouvel utilisateur avec create à la table users.
  async create({
    email,
    hashedPassword,
    firstName,
    lastName,
    createDate,
    lastConnection,
    profile,
  }) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (email, hashed_password,first_name,last_name,create_date,last_connection,profile) VALUES (?,?,?,?,?,?,?)`,
      [
        email,
        hashedPassword,
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
  async update({
    email,
    hashedPassword,
    firstName,
    lastName,
    createDate,
    lastConnection,
    profile,
    id,
  }) {
    // Récupérer l'utilisateur actuel de la base de données
    const [currentUser] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Utiliser les valeurs existantes comme valeurs par défaut
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET email = ?, hashed_password = ?, first_name = ?, last_name = ?, create_date = ?, last_connection = ?, profile = ? WHERE id = ?`,
      [
        email !== undefined ? email : currentUser.email,
        hashedPassword !== undefined
          ? hashedPassword
          : currentUser.hashed_password,
        firstName !== undefined ? firstName : currentUser.first_name,
        lastName !== undefined ? lastName : currentUser.last_name,
        createDate !== undefined ? createDate : currentUser.create_date,
        lastConnection !== undefined
          ? lastConnection
          : currentUser.last_connection,
        profile !== undefined ? profile : currentUser.profile,
        id,
      ]
    );
    return [rows];
  }

  // D: supprime un utilisateur spécifique (delete) dans la table en fonction de l'id.
  async delete(id) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return [rows];
  }
}

module.exports = UsersManager;
