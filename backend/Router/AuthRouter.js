//Req dotenv
require("dotenv").config();

class AuthRouter {
  constructor(express, knex, jwt, decode) {
    this.express = express;
    this.knex = knex;
    this.jwt = jwt;
    this.decode = decode;
  }

  /** ************** bind routes ***********************/
  router() {
    let router = this.express.Router();

    //
    router.get("/all", this.getAllUser.bind(this));
    //Get a friend
    //router.get("/:id", this.getUser.bind(this));
    //Get user
    router.get("/users", this.getAuth.bind(this));

    //update user information
    router.put("/user/:id", this.updateUser.bind(this));

    //delete account
    router.delete("/user/:id", this.deleteUser.bind(this));

    //LOGIN
    router.post("/login", this.authLogin.bind(this));

    //SIGNUP
    router.post("/signup", this.authSignup.bind(this));

    return router;
  }

  /** ************** AUTH function ***********************/

  //get all user
  getAllUser(req, res) {
    let user = this.decode(req);
    return this.knex("users")
      .select("id", "username")
      .whereNot("id", user.id)
      .then((data) => {
        res.json(data);
      });
  }

  /* getUser(req, res) {
    return this.knex("users")
      .where("id", req.params.id)
      .then((data) => {
        res.json(data);
      });
  } */

  //get auth user user
  getAuth(req, res) {
    let user = this.decode(req);

    return this.knex("users")
      .where("id", user.id)
      .then((data) => {
        res.json(data);
      });
  }

  //update user information
  updateUser(req, res) {
    console.log("updating user information");
    return this.knex("users")
      .where({
        id: req.params.id,
      })
      .update({
        email: req.body.email,
        password: req.body.password,
        fname: req.body.fname,
        lname: req.body.lname,
      })
      .then((data) => {
        console.log("user information is updated");
        res.json(data);
      });
  }

  //delete user
  deleteUser(req, res) {
    return this.knex("users")
      .where({
        id: req.params.id,
      })
      .del()
      .then((data) => {
        console.log("account deleted");
        res.json(data);
      });
  }

  //Login - post
  authLogin(req, res) {
    if (req.body.username && req.body.password) {
      const username = req.body.username;
      const password = req.body.password;

      this.knex("users")
        .where({
          username,
          password,
        })
        .first()
        .then((query) => {
          if (query) {
            const payload = {
              id: query.id,
              username: query.username,
              email: query.email,
            };
            const token = this.jwt.sign(payload, process.env.JWT_SECRET);
            res.json({ token });
          } else {
            res.sendStatus(401);
          }
        });
    } else {
      res.sendStatus(401);
    }
  }

  //Signup

  authSignup(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const fname = req.body.fname;
    const lname = req.body.lname;

    this.knex("users")
      .where({
        username: username,
      })
      .first()
      .then((data) => {
        if (!data) {
          console.log("registering new account");
          return this.knex("users")
            .insert({
              username: username,
              email: email,
              password: password,
              fname: fname,
              lname: lname,
            })
            .then((data) => {
              res.json(data);
              console.log("new user registered");
            });
        } else {
          res.sendStatus(401);
        }
      });
  }
}

module.exports = AuthRouter;
