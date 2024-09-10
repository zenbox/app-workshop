/** Webservice
 *
 * @desc A simple webservice to demonstrate ...
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

// internal nodejs modules
import path from "path";

// external modules
import express from "express";
import bodyParser from "body-parser";

// own internal modules
import indexRouter from "./src/routes/indexRouter.mjs";
import loginRouter from "./src/routes/loginRouter.mjs";
import registerRouter from "./src/routes/registerRouter.mjs";

// Variables and constants
const app = express(); // Siehe Dokumentation ...

const hostname = "localhost";
const port = 8000;

// Verzeichnis, in dem sämtliche (statischen) Dateien zur Verwendung
// in dynamisch erzuegten HTML - Dokumenten liegen
app.use(express.static(path.resolve("static")));
app.use(bodyParser.json()); // Verarbeiten von JSON-Daten
app.use(bodyParser.urlencoded({ extended: true })); // Verarbeiten von Formulardaten

// ejs - HTML-Templates mit Embedded Javascript!
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

// Dynamische Routen
app.use("/", indexRouter);
app.use("/index.html", indexRouter);

app.use("/login", loginRouter);
app.use("/register", registerRouter);

// Webservice starten
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
