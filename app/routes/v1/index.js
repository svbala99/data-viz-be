// library imports
const express = require("express");

// build the router for express app
const router = express.Router();

// map the router that handles a particular route
const dataRouter = require("./data");
router.use("/data", dataRouter);

// exports
module.exports = router;
