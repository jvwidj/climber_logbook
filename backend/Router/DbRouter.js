require("dotenv").config({path:"../.env"})

class DbRouter {
    constructor(express, knex, jwt, decode) {
        this.express = express;
        this.knex = knex;
        this.jwt = jwt;
        this.decode = decode;
    }

    /** ************** Routes - bind routes ***********************/
    router() {
        let router = this.express.Router();

        //GET LOCATIONS
        router.get("/locations", this.getAllLocations.bind(this));
        router.get("/location/:id", this.getLocation.bind(this));

        //CREATE NEW LOCATION
        router.post("/locations", this.createLocation.bind(this))

        //UPDATE LOCATION 
        router.put("/location/:id", this.updateLocation.bind(this))

        //DELETE LOCATION
        router.delete("/location/:id", this.deleteLocation.bind(this));

        //GET CLIMBING ROUTES
        router.get("/climbs", this.getAllClimbs.bind(this));
        router.get("/climb/:id", this.getClimb.bind(this));

        //CREATE NEW CLIMB
        router.post("/climbs", this.createClimb.bind(this))

        //UPDATE CLIMB 
        router.put("/climb/:id", this.updateClimb.bind(this))

        //DELETE CLIMB
        router.delete("/climb/:id", this.deleteClimb.bind(this));

        return router;
    }



    /** ************** Functions - Location ***********************/

    // Get all locations
    getAllLocations(req, res) {
        console.log("Get all locations")

        return this.knex("location")
            .then((data) =>{
                res.json(data)
            })
    }

    //Get one location 
    getLocation(req, res) {
        console.log("Get location")
        return this.knex("location")
            .where({
                id: req.params.id
            })
            .then((data) =>{
                res.json(data)
            })
    }

    //Create new location
    createLocation(req, res) {
        return this.knex("location")
            .insert({
                is_outdoor: req.body.is_outdoor,
                location_name: req.body.location_name,
                location_description: req.body.location_description,
            })
            .then(() => {
                console.log("added new location")
                this.knex("location")
                    .then((data) => {
                        res.json(data)
                    })
            })

    }

    //Update location
    updateLocation(req, res){
        console.log("updating data")
        return this.knex("location")
            .where({
                id: req.params.id
            })
            .update({
                is_outdoor: req.body.is_outdoor,
                location_name: req.body.location_name,
                location_description: req.body.location_description,
            })
            .then((data) => {
                console.log("location information is updated")
                res.json(data);
            })
    }

    //Delete location
    deleteLocation(req, res) {
        return this.knex("location")
            .where({
                id:req.params.id
            })
            .del()
            .then(() =>{
                console.log("location deleted")
                this.knex("location")
                .then((data) => {
                    res.json(data)
                })
            })
    }

    /** ************** Functions - Climb ***********************/

    // Get all climbing routes
    getAllClimbs(req, res) {
        console.log("Get all climbing routes")
        return this.knex("location")
            .join('climb', 'climb.location_id', 'location.id')
            .select('*')
            .then((data) =>{
                res.json(data)
            })
    }

    //Get one climbing route 
    getClimb(req, res) {
        console.log("Get climbing route")
        return this.knex("location")
            .join('climb', 'climb.location_id', 'location.id')
            .select(
                'climb.id',
                'route_name',
                'grade',
                'type',
                'description',
                'location_name',
                'is_outdoor'
            )
            .where({
                'climb.id': req.params.id
            })
            .then((data) =>{
                res.json(data)
            })
    }

    //Create new climbing route
    createClimb(req, res) {
        return this.knex("climb")
            .insert({
                route_name: req.body.route_name,
                grade: req.body.grade,
                type: req.body.type,
                description: req.body.description,
                location_id: req.body.location_id
            })
            .returning("id")
            .then((data) => {
                console.log("added new climbing route")
                console.log(data[0].id)
                this.knex("session_climb")
                .insert({
                    session_id: req.body.session_id,
                    climb_id: data[0].id,
                    completed: req.body.completed,
                    attempt: req.body.attempt,
                })
                .then(() =>{
                    console.log("session_climb insert completed")
                })
            })

    }

    //Update climbing route
    updateClimb(req, res){
        console.log("updating climbing data")
        return this.knex("climb")
            .where({
                id: req.params.id
            })
            .update({
                route_name: req.body.route_name,
                grade: req.body.grade,
                type: req.body.type,
                description: req.body.description,
                location_id: req.body.location_id
            })
            .then((data) => {
                console.log("climbing information is updated")
                res.json(data);
            })
    }

    //Delete climbing route
    deleteClimb(req, res) {
        return this.knex("climb")
            .where({
                id:req.params.id
            })
            .del()
            .then(() =>{
                console.log("climbing route deleted")
                this.knex("climb")
                .then((data) => {
                    res.json(data)
                })
            })
    }
}

module.exports = DbRouter;