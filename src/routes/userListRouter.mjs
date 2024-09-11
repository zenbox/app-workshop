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

import PageController from "../controls/pageController.mjs";
const pageController = new PageController();
pageController.initDb();

const userListRouter = express.Router();

// Router - Middleware
const onGetUserList = async (request, response) => {
    try {
        const users = await pageController.handleUserList();

        console.log("USERS: ", users);

        response.render("user-list", {
            title: "Registrierte Benutzer",
            message: "Die Liste aller registrierten Benutzer!",
            users: users,
        });
    } catch (error) {
        console.error("Error fetching user list:", error);
        response.status(500).send("Internal Server Error");
    }
};

// Dynamische Route nach "/login"
userListRouter.get("/", onGetUserList); // GET-Request: Dokumentenabruf

export default userListRouter;
