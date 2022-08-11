//dot env
require("dotenv").config();

// Import Libraries
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const auth = require("./auth");
const fs = require("fs");
//image upload
const fileUpload = require("express-fileupload");

// App Setup
const app = express();
app.use(cors());
app.use(express.json()); //to access req.body
app.use(fileUpload());

//Knex Setup
const knexFile = require("./knexFile").development;
const knex = require("knex")(knexFile);

//Auth setup
auth(knex).initialize();

/** *********************** Middleware **************************** */
const AppRouter = require("./Router/AppRouter");
const DbRouter = require("./Router/DbRouter");
const AuthRouter = require("./Router/AuthRouter");
const SocialRouter = require("./Router/SocialRouter");
const MediaRouter = require("./Router/MediaRouter");

/** ************** Verify - Decode JWT ***********************/

function decode(req) {
  let token = req.headers.authorization;

  token = token.replace("Bearer ", ""); // "Bearer " -> Bearer + space
  return jwt.verify(token, process.env.JWT_SECRET);
}

/** *********************** Configure Router **************************** */
app.use("/api", new AppRouter(express, knex, jwt).router());
app.use("/db", new DbRouter(express, knex, jwt).router());
app.use("/auth", new AuthRouter(express, knex, jwt, decode).router());
app.use("/social", new SocialRouter(express, knex, jwt).router());
app.use("/media", new MediaRouter(express, knex, jwt, fs).router());

/** *********************** App Listen  **************************** */
app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});
