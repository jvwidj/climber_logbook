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


        return router;
    }

    //get all sesssions
    getAllSession(req, res) {
        console.log('Get all sessions')
        return this.knex("session")
            .select("*")
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
            .then(() => {
                console.log("added new session")
                this.knex("session")
                    .then((data) => {
                        res.json(data)
                    })
            })

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

}

module.exports = AppRouter;