//dot env
require("dotenv").config();

// Import Libraries
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// App Setup
const app = express();
app.use(cors());
app.use(express.json()); //to access req.body

//Knex Setup
const knexFile = require("./knexFile").development;
const knex = require("knex")(knexFile);

/** *********************** Middleware **************************** */
const AppRouter = require("./Router/AppRouter")
const DbRouter = require("./Router/DbRouter")

/** *********************** Configure Router **************************** */
//app.use("/api", new AppRouter(express, knex, jwt).router())
app.use("/db", new DbRouter(express, knex, jwt).router())

/** *********************** App Listen  **************************** */
app.listen(process.env.PORT, () => {
    console.log(`running on port ${process.env.PORT}`)
})