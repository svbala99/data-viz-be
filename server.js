// library imports
const express = require("express");
const bodyParser = require("body-parser");

// user imports
const v1 = require("./app/routes/v1");

// build the app with express js
const app = express();

// add the body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

// set the route and the handler that serves that route
app.use("/api/v1", v1);

// set the default port for the app
const PORT = process.env.PORT || 9000;

// Put a console to check / route works
app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
