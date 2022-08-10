require("dotenv").config({ path: "../../.env" });

class SocialRouter {
  constructor(express, knex, jwt) {
    this.express = express;
    this.knex = knex;
    this.jwt = jwt;
  }

  /** ************** Routes - bind routes ***********************/
  router() {
    let router = this.express.Router();

    router.get("/connections", this.getAllConnections.bind(this));
    router.get("/:id", this.getUserConnection.bind(this));
    router.post("/", this.addConnection.bind(this));
    router.delete("/:id", this.removeConnection.bind(this));

    return router;
  }

  /** ************** Verify - Decode JWT ***********************/

  decode(req) {
    let token = req.headers.authorization;

    token = token.replace("Bearer ", ""); // "Bearer " -> Bearer + space
    return this.jwt.verify(token, process.env.JWT_SECRET);
  }

  /** ************** Functions - Sessions ***********************/

  getAllConnections(req, res) {
    console.log("get all connections");
    return this.knex("friends").then((data) => {
      res.json(data);
    });
  }

  getUserConnection(req, res) {
    let user = this.decode(req);
    console.log(`Get all user's friends`);

    return this.knex("friends")
      .select("*")
      .then(() => {
        return this.knex("friends")
          .join("users", "users.id", "friends.user_b")
          .where({
            user_a: req.params.id,
          })
          .select("friends.id", "user_b", "status", "username")
          .then((data) => {
            res.json(data);
          });
      });
  }

  addConnection(req, res) {
    let user = this.decode(req);
    console.log("add a friend");

    return this.knex("friends")
      .insert({
        user_a: user.id,
        user_b: req.body.person_id,
        status: 2,
      })
      .then(() => {
        this.knex("friends")
          .where({
            user_a: user.id,
          })
          .then((data) => {
            res.json(data);
          });
      });
  }

  removeConnection(req, res) {
    console.log("remove connection");
    this.knex("friends")
      .where({
        id: req.params.id,
      })
      .del()
      .then(() => {
        console.log("friend removed");
      });
  }
}

module.exports = SocialRouter;
