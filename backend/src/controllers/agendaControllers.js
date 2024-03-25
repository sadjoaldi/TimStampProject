const tables = require("../tables");

//  BREAD: Browse Read Edit Add Delete

//  B: recupère tous les utilisateurs avec browse readAll
const browse = async (req, res, next) => {
  try {
    const agend = await tables.agenda.readAll();

    res.json(agend);
  } catch (err) {
    next(err);
  }
};

// R: recupère un utilisateur spécifique par son ID avec read
const read = async (req, res, next) => {
  try {
    const genda = await tables.agenda.read(req.params.id);

    if (genda == null) {
      res.sendStatus(404);
    } else {
      res.json(genda);
    }
  } catch (err) {
    next(err);
  }
};

//  E: update un utilisateur spécifique par son ID avec edit
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const calend = req.body;
    const [result] = await tables.agenda.update({ id, ...calend });

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
  const cagenda = req.body;
  try {
    const insertId = await tables.agenda.create(cagenda);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

//  D: supprime un utilisateur spécifique par son ID avec destroy
const destroy = async (req, res, next) => {
  try {
    const [result] = await tables.agenda.delete(req.params.id);
    if (result.affectedRows) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ message: "Couldn't delete the user" });
    next();
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
