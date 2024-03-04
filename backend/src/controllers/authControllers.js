const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const tables = require("../tables");

// R: Read (login) a specific user by email
const read = async (req, res) => {
  try {
    const user = await tables.users.readByEmail(req.body.email);
    const { _id: userId } = user;

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.hashed_password
    );
    if (!validPassword) return res.status(400).send("Invalid password");

    const token = jwt.sign(
      { _id: userId, name: user.name },
      process.env.TOKEN_SECRET
    );
    res.cookie("authToken", token);

    return res.json({ message: "Logged in!" }); // Add a return statement here
  } catch (err) {
    return console.error;
  }
};

// D: Delete (logout) a specific user by clearing the auth token
const destroy = (req, res) => {
  res.clearCookie("authToken");
  res.send("Logged out!");
};

module.exports = {
  read,
  destroy,
};
