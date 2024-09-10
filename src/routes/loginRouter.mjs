/** Login Router
 *
 * @package Webapplication
 * @module Webservice
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-09-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

// Import modules
import path from "path";
import express from "express";
import bodyParser from "body-parser";

import Auth from "../controls/authController.mjs";
const auth = new Auth();

const loginRouter = express.Router();

// Router - Middleware
const onGetLogin = (request, response) => {
    // Template-Name "./src/views/login.ejs" und Daten
    response.render("login", {
        title: "Login",
        message: "Please login!",
    });
};

const onPostLogin = (request, response) => {
    // Daten aus dem Request-Body
    const username = request.body.username;
    const password = request.body.password;

    auth.handleLogin(username, password);

    // Template-Name "./src/views/login.ejs" und Daten
    response.render("login", {
        title: "Login",
        message: "POST Request!",
    });
};

// Dynamische Route nach "/login"
loginRouter.get("/", onGetLogin); // GET-Request: Dokumentenabruf
loginRouter.post("/", onPostLogin); // POST-Request: Datenübermittlung

export default loginRouter;
