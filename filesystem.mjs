/** File System
 *
 * @package Webapplication
 * @module Data
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-09-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

import { error } from "console";
import fs from "fs";
import path from "path";

// Datei lesen
const file = path.join("./static/assets/data/", "data.csv");

fs.readFile(file, "utf-8", (error, buffer) => {
    // if (error) throw error;

    console.log(buffer); // Eigentlich Hex-formatierter Buffer
    console.log(buffer.toString()); // Konvertierung in String

    let csv = buffer.toString();
    let lines = csv.split("\n");
    const keys = [];
    const data = [];

    // CSV nach Array konvertieren
    lines.forEach((line, index) => {
        if (index === 0) {
            // Erste Zeile als Feldnamen auslesen
            keys.push(line.split(","));
        } else {
            // die anderen Zeilen als Daten auslesen
            data.push(line.split(","));
        }
    });

    console.log(keys);
    console.log(data);
});

// Datei schreiben
const writeFile = () => {
    // file handle mit append-Flag (a, w)
    fs.open("./static/assets/data/log.txt", "a", (error, fileHandle) => {
        if (error) throw error;

        let date = new Date().toLocaleString();
        let message = "lorem ipsum dolor sit ...";

        let line = `${date}: ${message}\n`;

        let buffer = Buffer.from(line);

        // Schreiben der Daten auf den Datenträger
        fs.write(fileHandle, buffer, 0, buffer.length, null, (error) => {
            if (error) throw error;

            console.log("Daten geschrieben");

            // Schließen des Filehandles
            fs.close(fileHandle, (error) => {
                if (error) throw error;
                console.log("File geschlossen");
            });
        });
    });
};

setInterval(writeFile, 10000);

// Beobachten von Dateien
fs.watch("./static/assets/data/log.txt", (event, filename) => {
    console.log("- - -\n", event, filename, "\n- - -");
});

// Beobachten von Verzeichnissen
fs.watch("./static/", (event, filename) => {
    console.log("- - -\n", event, filename, "\n- - -");
});

/*
const fn = function () {
    let sum;

    try {
        sum = add(3, 4);
        return sum;
    } catch (error) {
        // Protokollierung!
        return error.status;
    }
};

const outerFn = function () {
    let result;

    try {
        result = fn();
        if (result === 7) {
            return result;
        } else {
            throw("Fehler in fn");
        }
    } catch (error) {
        throw("Fehler in outerFn");
    }
};
*/
