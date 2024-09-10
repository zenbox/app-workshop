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
    findUserByUsername() {}

    /**
     * @desc    Verify the password
     *
     * @param   {type} desc
     * @returns {void}
     */
    verifyPassword() {}

    async fetchUser(db) {
        const resultset = await db.all("SELECT * FROM users");

        console.log("RESULT: ");
        console.dir(resultset);

        return resultset;
    }
}

export default User;
