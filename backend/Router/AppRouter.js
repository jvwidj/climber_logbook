require("dotenv").config({ path: "../.env" });

class AppRouter {
  constructor(express, knex, jwt, fs) {
    this.express = express;
    this.knex = knex;
    this.jwt = jwt;
    this.fs = fs;
  }

  /** ************** Routes - bind routes ***********************/
  router() {
    let router = this.express.Router();

    router.get("/allsession", this.getAllSession.bind(this));

    router.get("/sessions", this.getUserSession.bind(this));
    router.get("/session/user/:id", this.getFriendSessionByUser.bind(this));
    //router.get("/session/user/:id", this.getSessionByUser.bind(this));
    router.get("/session/:id", this.getSession.bind(this));
    router.post("/sessions", this.postSession.bind(this));
    router.put("/session/:id", this.updateSession.bind(this));
    router.delete("/session/:id", this.deleteSession.bind(this));

    router.get("/climbs", this.getAllSeshClimb.bind(this));
    router.get("/climb/:id", this.getSeshClimb.bind(this));
    router.post("/climb", this.postSessionClimb.bind(this));
    router.put("/climb/:id", this.updateSessionClimb.bind(this));
    router.delete("/climb/:id", this.deleteSessionClimb.bind(this));
    router.delete("/climb/session/:id", this.deleteBySession.bind(this));
    router.get("/climb/session/:id", this.getBySession.bind(this));

    return router;
  }
  /** ************** Verify - Decode JWT ***********************/

  decode(req) {
    let token = req.headers.authorization;

    token = token.replace("Bearer ", ""); // "Bearer " -> Bearer + space
    return this.jwt.verify(token, process.env.JWT_SECRET);
  }

  /** ************** Functions - Sessions ***********************/

  //get all sessions by everyone
  getAllSession(req, res) {
    console.log("Get all sessions");
    return this.knex("session")
      .join("location", "location.id", "session.location_id")
      .select("*")
      .then((data) => {
        res.json(data);
      });
  }

  //getFriendSessionByUser
  getFriendSessionByUser(req, res) {
    let user = this.decode(req);

    return this.knex("friends")
      .join("users", "users.id", "friends.user_b")
      .where({
        user_a: req.params.id,
      })
      .select("friends.id", "user_b", "status", "username")
      .then(async (data) => {
        //res.json(data);
        const friendSession = [];
        for (const user of data) {
          let eachSession = await this.knex("session")
            .join("location", "location.id", "session.location_id")
            .where("user_id", user.user_b)
            .select(
              "session.id",
              "user_id",
              "location_id",
              "location_name",
              "location_description",
              "is_outdoor",
              "description",
              "is_private",
              "date"
            );
          console.log("each sesh", eachSession);
          friendSession.push(...eachSession);
          //res.json(data);
        }
        console.log("friend session ", friendSession);
        res.json(friendSession);
      });
  }

  //get all sesssions by logged in user
  getUserSession(req, res) {
    let user = this.decode(req);
    console.log("Get all sessions by logged in user", user);

    return this.knex("session")
      .join("location", "location.id", "session.location_id")
      .where("user_id", user.id)
      .select(
        "session.id",
        "user_id",
        "location_id",
        "location_name",
        "location_description",
        "is_outdoor",
        "description",
        "is_private",
        "date"
      )
      .then((data) => {
        console.log(data);
        res.json(data);
      });
  }

  //get session by user
  getSessionByUser(req, res) {
    console.log("get session by user");

    return this.knex("session")
      .join("location", "location.id", "session.location_id")
      .where("user_id", req.params.id)
      .select(
        "session.id",
        "user_id",
        "location_id",
        "location_name",
        "location_description",
        "is_outdoor",
        "description",
        "is_private",
        "date"
      )
      .then((data) => {
        //console.log(data);
        res.json(data);
      });
  }

  //get a session
  getSession(req, res) {
    return this.knex("session")
      .where({
        id: req.params.id,
      })
      .then((data) => {
        res.json(data);
      });
  }

  //post new session
  postSession(req, res) {
    return this.knex("session")
      .insert({
        user_id: req.body.user_id,
        date: req.body.date,
        start_time: req.body.start_time,
        description: req.body.description,
        is_private: req.body.is_private,
      })
      .returning("*")
      .then((data) => {
        console.log("added new session");
        res.json(data[0]);
      });
  }

  //update a session
  updateSession(req, res) {
    this.knex("session")
      .where({
        id: req.params.id,
      })
      .update({
        location_id: req.body.location_id,
        date: req.body.date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        description: req.body.description,
        is_private: req.body.is_private,
      })
      .then((data) => {
        console.log("session updated");
        res.json(data);
      });
  }

  //delete a session
  deleteSession(req, res) {
    this.knex("session")
      .where({
        id: req.params.id,
      })
      .del()
      .then(() => {
        console.log("session deleted");
        this.knex("session").then((data) => {
          res.json(data);
        });
      });
  }

  /** ************** Functions - Session Climb ***********************/

  //get a session climb
  getAllSeshClimb(req, res) {
    return this.knex("session_climb")
      .join("climb", "climb.id", "session_climb.climb_id")
      .join("session", "session.id", "session_climb.session_id")
      .join("location", "location.id", "climb.location_id")
      .select(
        "session_climb.id",
        "user_id",
        "session_id",
        "location_name",
        "is_outdoor",
        "route_name",
        "type",
        "grade",
        "completed",
        "attempt"
      )
      .then((data) => {
        res.json(data);
      });
  }

  //get a session climb
  getSeshClimb(req, res) {
    return this.knex("session_climb")
      .join("climb", "climb.id", "session_climb.climb_id")
      .join("session", "session.id", "session_climb.session_id")
      .join("location", "location.id", "climb.location_id")
      .select(
        "session_climb.id",
        "user_id",
        "location_name",
        "is_outdoor",
        "route_name",
        "type",
        "grade",
        "completed",
        "attempt"
      )
      .where({
        "session_climb.id": req.params.id,
      })
      .then((data) => {
        res.json(data);
      });
  }

  //post session climb
  postSessionClimb(req, res) {
    return this.knex("session_climb")
      .insert({
        session_id: req.body.session_id,
        climb_id: req.body.climb_id,
        completed: req.body.completed,
        attempt: req.body.attempt,
      })
      .then(() => {
        console.log("added new session climb");
        this.knex("session_climb").then((data) => {
          res.json(data);
        });
      });
  }

  //update a session
  updateSessionClimb(req, res) {
    this.knex("session_climb")
      .where({
        id: req.params.id,
      })
      .update({
        climb_id: req.body.climb_id,
        completed: req.body.completed,
        attempt: req.body.attempt,
      })
      .then((data) => {
        console.log("session climb updated");
        res.json(data);
      });
  }

  //delete a session climb
  deleteSessionClimb(req, res) {
    this.knex("session_climb")
      .where({
        id: req.params.id,
      })
      .del()
      .then(() => {
        console.log("session climb deleted");
        this.knex("session_climb").then((data) => {
          res.json(data);
        });
      });
  }

  //delete session climb by session_id
  deleteBySession(req, res) {
    console.log("deleting all climb from a session");
    this.knex("session_climb")
      .del()
      .where({
        session_id: req.params.id,
      })
      .then((data) => {
        console.log("all climb deleted from a session");
        res.json(data);
      });
  }

  //get all climb by session_id
  getBySession(req, res) {
    //console.log("getting all climb from a session")
    this.knex("session_climb")
      .where({
        session_id: req.params.id,
      })
      .then(async (data) => {
        let images = this.fs.readdirSync(__dirname + "/uploaded/climb");
        console.log("this imagess", images);
        const selectedClimb = [];
        for (let element of data) {
          let climb = await this.knex("location")
            .join("climb", "location.id", "climb.location_id")
            .join("session_climb", "climb.id", "session_climb.climb_id")
            .where({
              "climb.id": element.climb_id,
            })
            .first();
          selectedClimb.push(climb);
        }
        console.log("getting all climb from a session", selectedClimb);
        res.json(selectedClimb);
      });
  }
}

module.exports = AppRouter;
