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
import bcrypt from "bcrypt";

class User {
    constructor() {}

    /**
     * @desc    Create a new user
     *
     * @param   {object} db - Databse handler object
     * @param   {string} username
     * @param   {string} password
     *
     * @returns {boolean}
     */
    createUser(db, username, password) {
        // Einfügen des Users in die Datenbank
        db.run("INSERT INTO users (username, password) VALUES (?, ?)", [
            username,
            password,
        ]);

        return true;
    }

    /**
     * @desc    Find a user by username
     *
     * @param   {type} desc
     * @returns {void}
     */
    findUserByUsername() {
        return db.get("SELECT * FROM users WHERE username = ?", [username]);
    }

    /**
     * @desc    Verify the password
     *
     * @param   {type} desc
     * @returns {void}
     */
    verifyPassword() {
        return bcrypt.compare(password, user.password);
    }

    /**
     * @desc    Fetch all users
     * @param   {object} db - Databse handler object
     * @returns {array}
     * @throws  {Error}
     */
    async fetchUser(db) {
        try {
            const resultset = await db.all("SELECT * FROM users");
            return resultset;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }
}

export default User;
