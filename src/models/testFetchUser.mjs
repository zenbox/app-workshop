import sqlite3 from "sqlite3";
import User from "./User.mjs";

async function initDb() {
    const db = new sqlite3.Database("./src/models/database.db");
    return db;
}

async function testFetchUser() {
    const db = await initDb();
    const user = new User();

    try {
        const users = await user.fetchUser(db);
        console.log("Fetched users:", users);
    } catch (error) {
        console.error("Error fetching users:", error);
    } finally {
        await db.close();
    }
}

async function listTables() {
    const db = await initDb();
    return new Promise((resolve, reject) => {
        db.all(
            "SELECT name FROM sqlite_master WHERE type='table'",
            (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                    console.log("Tables: ", rows);
                }
            }
        );
    });
}

listTables();
testFetchUser();
