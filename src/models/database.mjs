/** SQLite Databse Initialisation
 *
 * @package Webapplication
 * @module Model
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-09-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

import sqlite3 from "sqlite3";

const initDb = async () => {

    const db = new sqlite3.Database("./src/models/database.db");

    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    ) 
    `);

    return db;
};

export { initDb };
