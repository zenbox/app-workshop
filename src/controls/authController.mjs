/** Authentifcation Controller
 *
 * @package Webapplication
 * @module Authentification
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-09-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

import { initDb } from "../models/database.mjs";
import User from "../models/User.mjs";
const user = new User();

class Auth {
    constructor() {}

    initDb() {
        this.db = initDb();
    }

    handleLogin(username, password) {
        console.log("Authentification: ", username, password);
    }

    /**
     * @desc    Register a new user
     * @param   {string} username - The username of the user
     * @param   {string} password - The password of the user
     * @returns {object} - The created user
     * @throws  {Error}
     */
    async handleRegister(username, password) {
        console.log("Register: ", username, password);

        // Überprüfe, ob der Benutzername bereits existiert
        const existingUser = await user.findUserByName(username);
        if (existingUser) {
            console.log("Error: Username already exists");
            return;
        }

        // Erstelle den Benutzer
        const result = await user.createUser(username, password);

        if (result) {
            console.log("User created");
        } else {
            console.log("User not created");
        }

        await this.db.close();
    }
}


export default Auth;

/* Funktionaler Ansatz:
 const handleLogin = (username, password) => { ... };
 const handleLogout = () => { ... };

 export { handleLogin, handleLogout };
 */
