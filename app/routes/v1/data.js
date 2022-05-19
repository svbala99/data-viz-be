// library imports
const express = require("express");

// build the express router
const router = express.Router();

// map the /api/v1/data route to be handled by corresponding controllers
const dataController = require("../../controllers");
router.get("/", dataController.findAll);

// exports
module.exports = router;
