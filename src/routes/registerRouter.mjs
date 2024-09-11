/** Register Router
 *
 * @package Webapplication
 * @module Webservice
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-09-010
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

// Import modules
import path from "path";
// - - - - -
import express from "express";
import bodyParser from "body-parser";
// - - - - -

import Auth from "../controls/authController.mjs";
const auth = new Auth();
auth.initDb();

const registerRouter = express.Router();

// Router - Middleware
const onGetRegister = (request, response) => {
    // Template-Name "./src/views/register.ejs" und Daten
    response.render("register", {
        title: "Register",
        message: "Please register a new account!",
    });
};

const onPostRegister = (request, response) => {
    // Daten aus dem Request-Body
    const username = request.body.username;
    const password = request.body.password;

    auth.handleRegister(username, password);

    // Nach dem Registrieren, wird der User auf die Login-Seite weitergeleitet
    response.render("login", {
        title: "Login",
        message: "Logge Dich mit deinen neuen Account-Daten ein!",
    });
};

// Dynamische Route nach "/login"
registerRouter.get("/", onGetRegister); // GET-Request: Dokumentenabruf
registerRouter.post("/", onPostRegister); // POST-Request: Datenübermittlung

export default registerRouter;
