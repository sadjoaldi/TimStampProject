const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/usersControllers");
const workplaceControllers = require("./controllers/workplaceControllers");
const agendaControllers = require("./controllers/agendaControllers");
const authControllers = require("./controllers/authControllers");

// users routes
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", userControllers.add);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

// login route
router.post("/login", authControllers.read);

// workplaces routes
router.get("/workplace", workplaceControllers.browse);
router.get("/workplace/:id", workplaceControllers.read);
router.post("/workplace", workplaceControllers.add);
router.put("/workplace/:id", workplaceControllers.edit);
router.delete("/workplace/:id", workplaceControllers.destroy);

// agenda routes
router.get("/agenda", agendaControllers.browse);
router.get("/agenda/:id", agendaControllers.read);
router.post("/agenda", agendaControllers.add);
router.put("/agenda/:id", agendaControllers.edit);
router.delete("/agenda/:id", agendaControllers.destroy);

module.exports = router;
