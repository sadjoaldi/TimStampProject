const tables = require("../tables");

//  BREAD: Browse Read Edit Add Delete

//  B: recupère tous les utilisateurs avec browse readAll
const browse = async (req, res, next) => {
  try {
    const users = await tables.users.readAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
};

// R: recupère un utilisateur spécifique par son ID avec read
const read = async (req, res, next) => {
  try {
    const user = await tables.users.read(req.params.id);

    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

//  E: update un utilisateur spécifique par son ID avec edit
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const [result] = await tables.users.update({ id, ...user });

    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
      res.json(result);
    }
  } catch (err) {
    res.sendStatus(500);
    next(err);
  }
};

// A: ajoute un utilisateur avec add
const add = async (req, res, next) => {
  const users = req.body;
  try {
    const insertId = await tables.users.create(users);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

//  D: supprime un utilisateur spécifique par son ID avec destroy
const destroy = async (req, res, next) => {
  try {
    const [result] = await tables.users.delete(req.params.id);
    if (result.affectedRows) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
