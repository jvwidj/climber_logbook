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

        router.get("/card", this.getCard.bind(this));
        router.post("/card", this.postCard.bind(this))
        router.put("/card/:id", this.updateCard.bind(this));
        router.delete("/card/:id", this.deleteCard.bind(this))


        return router;
    }

    //getCard
    getCard(req, res) {
        console.log('Get all Card')
        return this.knex("climbing_log")
            .select("*")
            .then((data) => {
                res.json(data)
            })
    }

    //post card
    postCard(req, res) {
        return this.knex("climbing_log")
            .insert({
                user_id: req.body.user_id,
                attempts: req.body.attempts,
                notes: req.body.notes,
            })
            .then(() => {
                console.log("added new log")
                this.knex("climbing_log")
                    .then((data) => {
                        res.json(data)
                    })
            })

    }

    //update log
    updateCard(req, res){
        this.knex("climbing_log")
        .where({
            id:req.params.id
        })
        .update({
            attempts: req.body.attempts,
            notes: req.body.notes
        })
        .then((data) => {
            console.log("log updated")
            res.json(data)
        })
    }

    //delete log
    deleteCard(req, res) {
        this.knex("climbing_log")
        .where({
            id:req.params.id
        })
        .del()
        .then(() => {
            console.log("item deleted")
            this.knex("climbing_log")
            .then((data) => {
                res.json(data)
            })
        })
    }

}

module.exports = AppRouter;