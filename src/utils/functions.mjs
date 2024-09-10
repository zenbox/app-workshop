/** Function Collection
 *
 * @package Webapplication
 * @module Funtions
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-09-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

function sum(a, b) {
    if (typeof a === "string") {
        a = parseFloat(a);
    }

    if (typeof b === "string") {
        b = parseFloat(b);
    }

    return a + b;
}

export { sum };
