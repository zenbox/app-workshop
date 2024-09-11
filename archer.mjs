/** Web- and Socket Service for Chat-App
 *
 * @package Webapplication
 * @module Chat
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-09-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

import http from "http";
import express from "express";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const host = "localhost";
const port = 8002;

app.use(express.static("static"));

app.get("/text", (request, response) => {
    console.log("New request received");
    response.header("Content-Type", "text/html");
    response.write("Hallo Welt");
    response.end();
});

io.on("connection", (socket) => {
    console.log("New connection established");

    socket.on("disconnect", () => {
        console.log("Connection closed");
    });

    socket.on("chat message", (message) => {
        console.log("New message received: ", message);

        // Nachricht an alle Clients ausliefern
        socket.emit("chat message", message);
        socket.broadcast.emit("chat message", message);
        // io.emit("chat message", message);
    });
});

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
