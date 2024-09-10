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

// Import modules
import path from "path"; // internal nodejs module
import express from "express"; // external module
import bodyParser from "body-parser"; // external module

import indexRouter from "./src/routes/indexRouter.mjs"; // own internal module
import loginRouter from "./src/routes/loginRouter.mjs"; // own internal module

// Variables and constants
const app = express(); // Siehe Dokumentation ...

const hostname = "localhost";
const port = 8000;

// Verzeichnis, in dem sämtliche (statischen) Dateien zur Verwendung
// in dynamisch erzuegten HTML - Dokumenten liegen
app.use(express.static(path.resolve("static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ejs - HTML-Templates mit Embedded Javascript!
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

// Dynamische Routen
app.use("/", indexRouter);
app.use("/index.html", indexRouter);
app.use("/firlefanz", indexRouter);

app.use("/login", loginRouter);

// Webservice starten
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
