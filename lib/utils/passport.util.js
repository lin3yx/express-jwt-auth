import fs from "fs";
import path from "path";
import { model } from "mongoose";
import { Strategy, ExtractJwt } from "passport-jwt";
import jsonwebtoken from "jsonwebtoken";

const User = model("User");

const pathToPUBKey = path.join(__dirname, "..", "resources", "id_rsa_pub.pem");
const pathToPRIVKEy = path.join(
  __dirname,
  "..",
  "resources",
  "id_rsa_priv.pem"
);

const PUB_KEY = fs.readFileSync(pathToPUBKey, "utf-8");
const PRIV_KEY = fs.readFileSync(pathToPRIVKEy, "utf-8");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

/**
 * Helper functions
 */
const validPassword = (password, hash, salt) => {
  let hashVerify = crypto.getRandomValues
}  

export default (passport) => {
  passport.use(
    new Strategy(options, (payload, done) => {
      console.log(payload);

      User.findOne({ _id: payload.sub }, (err, user) => {
        if (err) {
          return done(err, false);
        }

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );
};
