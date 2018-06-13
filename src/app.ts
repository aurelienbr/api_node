import express from "express";
import compression from "compression"; // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import logger from "./util/logger";
import lusca from "lusca";
import dotenv from "dotenv";
import mongo from "connect-mongo";
import flash from "express-flash";
import path from "path";
import mongoose from "mongoose";
import passport from "passport";
import expressValidator from "express-validator";
import bluebird from "bluebird";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// Controllers (route handlers)
import * as userController from "./controllers/user";
import * as contactController from "./controllers/contact";
import * as coordController from "./controllers/coords";
import * as internshipController from "./controllers/internships";
import * as educationController from "./controllers/educations";
import mail from "./controllers/mail";

// API keys and Passport configuration
import * as passportConfig from "./config/passport";

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
(<any>mongoose).Promise = bluebird;
mongoose
  .connect(mongoUrl, { useMongoClient: true })
  .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
  })
  .catch(err => {
    console.log(
      "MongoDB connection error. Please make sure MongoDB is running. " + err
    );
    // process.exit();
  });

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

/**
 * Primary app routes.
 */
app.get("/login", userController.getLogin);
app.post("/login", userController.postLogin);

app.get("/coords", coordController.getCoords);
app.get("/coord/:id", coordController.getCoord);
app.post("/coord", coordController.createCoord);
app.delete("/coord/:id", coordController.deleteCoord);

app.get("/internships", internshipController.getInternships);
app.get("/internship/:id", internshipController.getInternship);
app.post("/internship", internshipController.createInternship);
app.delete("/internship/:id", internshipController.deleteInternship);

app.get("/educations", educationController.getEducations);
app.get("/education/:id", educationController.getEducation);
app.post("/education", educationController.createEducation);
app.delete("/education/:id", educationController.deleteEducation);

app.post("/mail", mail);
/**
 * API examples routes.
 */

/**
 * OAuth authentication routes. (Sign in)
 */

export default app;
