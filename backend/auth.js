//Req dotenv
require("dotenv").config();

// Req modules
const passport = require("passport");
const passpost = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;

//JWT passport strategy
module.exports = (knex) => {
    const strategy = new passportJWT.Strategy(
        {
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            passReqToCallbac: true,
        },
        async (req, payload, done) => {
            const user = await knex("users")
                .where("id", payload.id)
                .first();

                if (user) {
                    return done (null, user);
                } else {
                    return done (new Error("User not found", null))
                }
        }
    );
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        }
    }
}
