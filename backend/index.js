//dot env
require("dotenv").config();

// Import Libraries
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const auth = require("./auth")

// App Setup
const app = express();
app.use(cors());
app.use(express.json()); //to access req.body

//Knex Setup
const knexFile = require("./knexFile").development;
const knex = require("knex")(knexFile);

//Auth setup
auth(knex).initialize();

/** *********************** Middleware **************************** */
const AppRouter = require("./Router/AppRouter")
const DbRouter = require("./Router/DbRouter");
const AuthRouter = require("./Router/AuthRouter")

/** ************** Verify - Decode JWT ***********************/

function decode(req){
    let token = req.headers.authorization;

    token = token.replace("Bearer ", ""); // "Bearer " -> Bearer + space
    return this.jwt.verify(token, process.env.JWT_SECRET)

}

/** *********************** Configure Router **************************** */
app.use("/api", new AppRouter(express, knex, jwt).router())
app.use("/db", new DbRouter(express, knex, jwt).router());
app.use("/auth", new AuthRouter(express, knex, jwt, decode).router());

/** *********************** App Listen  **************************** */
app.listen(process.env.PORT, () => {
    console.log(`running on port ${process.env.PORT}`)
})