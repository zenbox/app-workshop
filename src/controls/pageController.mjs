/** PageController
 * @package Webapplication
 * @module Webapplication
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-09-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

import { initDb } from "../models/database.mjs";
import User from "../models/User.mjs";

const user = new User();

class PageController {
    constructor() {

    }

    initDb() {
        this.db = initDb();
    }

    async handleUserList() {
        try {
            const users = await user.fetchUser(this.db);
            return users;
        } catch (error) {
            console.error("Error handling user list:", error);
            throw error;
        }
    }
}

export default PageController;
