/** User Class
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
import bcrypt from "bcrypt";

class User {
    constructor() {
        this.db = null;
    }

    async initDb() {
        this.db = new sqlite3.Database("./src/models/database.db");
    }

    /**
     * @desc    Create a new user
     * @param   {string} username - The username of the user
     * @param   {string} password - The password of the user
     * @returns {object} - The created user
     * @throws  {Error}
     */
    async createUser(username, password) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const result = await this.db.run(
                "INSERT INTO users (username, password) VALUES (?, ?)",
                [username, hashedPassword]
            );
            return { id: result.lastID, username, password: hashedPassword };
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }

    /**
     * @desc    Find a user by username
     * @param   {string} username - The username of the user
     * @returns {object|null} - The found user or null if not found
     * @throws  {Error}
     */
    async findUserByName(username) {
        try {
            const user = await this.db.get(
                "SELECT * FROM users WHERE username = ?",
                [username]
            );
            return user;
        } catch (error) {
            console.error("Error finding user:", error);
            throw error;
        }
    }

    /**
     * @desc    Verify the password
     * @param   {string} password - The password to verify
     * @param   {object} user - The user object containing the hashed password
     * @returns {boolean} - True if the password is correct, false otherwise
     * @throws  {Error}
     */
    async verifyPassword(password, user) {
        try {
            return await bcrypt.compare(password, user.password);
        } catch (error) {
            console.error("Error verifying password:", error);
            throw error;
        }
    }

    /**
     * @desc    Fetch all users
     * @returns {array} - An array of all users
     * @throws  {Error}
     */
    async fetchAllUser() {
        try {
            const users = await this.db.all("SELECT * FROM users");
            return users;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }
}

export default User;

// class User {
//     constructor() {}

//     /**
//      * @desc    Create a new user
//      *
//      * @param   {object} db - Databse handler object
//      * @param   {string} username
//      * @param   {string} password
//      *
//      * @returns {boolean}
//      */
//     createUser(db, username, password) {
//         // Einfügen des Users in die Datenbank
//         db.run("INSERT INTO users (username, password) VALUES (?, ?)", [
//             username,
//             password,
//         ]);

//         return true;
//     }

//     /**
//      * @desc    Find a user by username
//      *
//      * @param   {type} desc
//      * @returns {void}
//      */
//     findUserByUsername() {
//         return db.get("SELECT * FROM users WHERE username = ?", [username]);
//     }

//     /**
//      * @desc    Verify the password
//      *
//      * @param   {type} desc
//      * @returns {void}
//      */
//     verifyPassword() {
//         return bcrypt.compare(password, user.password);
//     }

//     /**
//      * @desc    Fetch all users
//      * @param   {object} db - Databse handler object
//      * @returns {array}
//      * @throws  {Error}
//      */
//     async fetchUser(db) {
//         try {
//             const resultset = await db.all("SELECT * FROM users");
//             return resultset;
//         } catch (error) {
//             console.error("Error fetching users:", error);
//             throw error;
//         }
//     }
// }

// export default User;
