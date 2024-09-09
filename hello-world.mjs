/**
 * Webservice, der "hallo Welt" im Browser ausgibt.
 *
 * @author Michael
 * @version 1.0
 * @since 2024-09-09
 * ...
 */

// Importieren des Moduls http
// const http = require('http'); // old style!

import http from "http";

const host = "localhost";
const port = 8000; // Portnummer höher als 1024

// Erstellen eines HTTP-Servers
const server = http.createServer((request, response) => {
    // HTTP-Statuscode und Header setzen
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");

    // Request body ausgeben
    response.write(request.url + "\n");
    response.end("Hello World\n");
});

// Server starten
server.listen(port, host, () => {
    console.log(`Server läuft unter http://${host}:${port}`);
});
