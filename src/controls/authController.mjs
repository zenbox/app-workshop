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

class Auth {
    async initDb() {
        this.db = await initDb();
    }

    handleLogin(username, password) {
        console.log("Authentification: ", username, password);
    }
}

export default Auth;

/* Funktionaler Ansatz:
 const handleLogin = (username, password) => { ... };
 const handleLogout = () => { ... };

 export { handleLogin, handleLogout };
 */
