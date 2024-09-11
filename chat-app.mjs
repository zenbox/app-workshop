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

import http from 'http';
import express from 'express';
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const host = "localhost";
const port = 8001;

app.use(express.static('static'));

app.get('/', (request, response) => { 
    response.sendFile('./static/index.html');
});

io.on("connection", (socket) => { 

    // Socket Funktionalität!

});

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
