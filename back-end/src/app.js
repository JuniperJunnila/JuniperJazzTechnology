const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const bp = require("body-parser");
const morgan = require("morgan");

const errorHandler = require("./errors/errorHandler.js");
const notFound = require("./errors/notFound.js");

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
