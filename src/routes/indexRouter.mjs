/** Page Router
 *
 * @desc ES Module
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

import path from "path";
import express from "express";

const indexRouter = express.Router();

// Router - Middleware
// Funktion, die Inhalte und Daten mit einem Template verküpft
// und an den Client zurückliefert
const onGetIndex = (request, response) => {
    response.render("index", {
        title: "Webapplication",
        message: "Hello World!",
    });
};

// Dynamische Route nach "/" oder nach "index.html"
indexRouter.get("/", onGetIndex);

export default indexRouter;
