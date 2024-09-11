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
import session from "express-session";
import bodyParser from "body-parser";

// own internal modules
// Router für eingehende Requests
import indexRouter from "./src/routes/indexRouter.mjs";
import loginRouter from "./src/routes/loginRouter.mjs";
import registerRouter from "./src/routes/registerRouter.mjs";
import userListRouter from "./src/routes/userListRouter.mjs";

// Ausgehende Requests

// Variables and constants
const app = express(); // Siehe Dokumentation ...

const hostname = "localhost";
const port = 8000;

// Session - Middleware
app.use(
    session({
        secret: "your_secret_key",
        resave: false,
        saveUninitialized: false,
    })
);

// Verzeichnis, in dem sämtliche (statischen) Dateien zur Verwendung
// in dynamisch erzuegten HTML - Dokumenten liegen
app.use(express.static(path.resolve("static")));
app.use(bodyParser.json()); // Verarbeiten von JSON-Daten
app.use(bodyParser.urlencoded({ extended: true })); // Verarbeiten von Formulardaten

// ejs - HTML-Templates mit Embedded Javascript!
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));

// Dynamische Routen für eingehende Requests
app.use("/", indexRouter);
app.use("/index.html", indexRouter);
app.use("/userlist", userListRouter);

app.use("/login", loginRouter);
app.use("/register", registerRouter);

// // Ausgehende Requests formulieren
// // AXIOS?
// const request = new XMLHttpRequest();
// const data = {
//     username: "Michael",
//     password: "1234",
// };
// // Step 1: Open a new connection, using the POST method
// request.open("POST", "http://archerhost:8000/", true);
// // Step 2: Set the request header
// request.send(data);
// // - - - - - - - - - -
// // Step 3: Define what happens on successful data submission
// request.onload = () => {
//     console.log(request.responseText);
// };

// // Alternativ: Fetch-API
// const sendRequest = function () {
//     console.log("Request started");
//     let data = {
//         username: "Michael",
//         password: "1234",
//     };
//     fetch("http://localhost:8002/text", {
//         method: "GET",
//         // body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "text/html",
//         },
//     })
//         .then((response) => {
//             console.log(response.status);
//             console.log(response.text());
//         })
//         .then((text) => console.log("text: ", text))
//         .catch((error) => console.error(error));
// };

// setTimeout(sendRequest, 5000);

// Webservice starten
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
