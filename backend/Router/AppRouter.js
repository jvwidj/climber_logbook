require("dotenv").config({path:"../.env"})

class AppRouter {
    constructor(express, knex, jwt) {
        this.express = express;
        this.knex = knex;
        this.jwt = jwt;
    }

    /** ************** Routes - bind routes ***********************/
    router() {
        let router = this.express.Router();

        router.get("/sessions", this.getAllSession.bind(this));
        router.get("/session/:id", this.getSession.bind(this))
        router.post("/sessions", this.postSession.bind(this))
        router.put("/session/:id", this.updateSession.bind(this));
        router.delete("/session/:id", this.deleteSession.bind(this))

        router.get("/climbs", this.getAllSeshClimb.bind(this))
        router.get("/climb/:id", this.getSeshClimb.bind(this))
        router.post("/climb", this.postSessionClimb.bind(this))
        router.put("/climb/:id", this.updateSessionClimb.bind(this));
        router.delete("/climb/:id", this.deleteSessionClimb.bind(this))


        return router;
    }
/** ************** Verify - Decode JWT ***********************/

    decode(req){
        let token = req.headers.authorization;

        token = token.replace("Bearer ", ""); // "Bearer " -> Bearer + space
        return this.jwt.verify(token, process.env.JWT_SECRET)

    }
    
/** ************** Functions - Sessions ***********************/

    //get all sesssions
    getAllSession(req, res) {
        console.log('Get all sessions')
        let user = this.decode(req)

        return this.knex("session")
            .select("*")
            .where("user_id", user.id)
            .then((data) => {
                res.json(data)
            })
    }

    //get a session
    getSession(req, res){
        return this.knex("session")
            .where({
                id:req.params.id
            })
            .then((data) =>{
                res.json(data)
            })
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
                console.log("added new session")
                res.json(data[0])
            }
            )

    }

    //update a session
    updateSession(req, res){
        this.knex("session")
        .where({
            id:req.params.id
        })
        .update({
            date: req.body.date,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            description: req.body.description,
            is_private: req.body.is_private,
        })
        .then((data) => {
            console.log("session updated")
            res.json(data)
        })
    }

    //delete a session
    deleteSession(req, res) {
        this.knex("session")
        .where({
            id:req.params.id
        })
        .del()
        .then(() => {
            console.log("session deleted")
            this.knex("session")
            .then((data) => {
                res.json(data)
            })
        })
    }

/** ************** Functions - Session Climb ***********************/

    //get a session climb
    getAllSeshClimb(req, res) {
        return this.knex("session_climb")
            .join('climb', 'climb.id', 'session_climb.climb_id')
            .join('session', 'session.id', 'session_climb.session_id')
            .join('location', 'location.id', 'climb.location_id')
            .select(
                'session_climb.id',
                'user_id',
                'location_name',
                'route_name',
                'type',
                'grade',
                'completed',
                'attempt'
            )
            .then((data) => {
                res.json(data)
            })
    }
    
    //get a session climb
    getSeshClimb(req, res) {
        return this.knex("session_climb")
            .join('climb', 'climb.id', 'session_climb.climb_id')
            .join('session', 'session.id', 'session_climb.session_id')
            .join('location', 'location.id', 'climb.location_id')
            .select(
                'session_climb.id',
                'user_id',
                'location_name',
                'route_name',
                'type',
                'grade',
                'completed',
                'attempt'
            )
            .where({
                'session_climb.id':req.params.id
            })
            .then((data) => {
                res.json(data)
            })
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
                console.log("added new session climb")
                this.knex("session_climb")
                    .then((data) => {
                        res.json(data)
                    })
            })

    }

    //update a session
    updateSessionClimb(req, res){
        this.knex("session_climb")
        .where({
            id:req.params.id
        })
        .update({
            climb_id: req.body.climb_id,
            completed: req.body.completed,
            attempt: req.body.attempt,
        })
        .then((data) => {
            console.log("session climb updated")
            res.json(data)
        })
    }

    //delete a session climb
    deleteSessionClimb(req, res) {
        this.knex("session_climb")
        .where({
            id:req.params.id
        })
        .del()
        .then(() => {
            console.log("session climb deleted")
            this.knex("session_climb")
            .then((data) => {
                res.json(data)
            })
        })
    }

}

module.exports = AppRouter;