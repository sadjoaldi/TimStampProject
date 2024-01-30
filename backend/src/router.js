const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/usersControllers");
const workplaceControllers = require("./controllers/workplaceControllers");

// users routes
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", userControllers.add);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

// workplaces routes
router.get("/workplace", workplaceControllers.browse);
router.get("/workplace/:id", workplaceControllers.read);
router.post("/workplace", workplaceControllers.add);
router.put("/workplace/:id", workplaceControllers.edit);
router.delete("/workplace/:id", workplaceControllers.destroy);

module.exports = router;
