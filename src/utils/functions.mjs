/** Function Collection
 *
 * @package Webapplication
 * @module Functions
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-09-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

/* @desc Muss sämtliche Zahlen addieren können.
         Bei falschen Wertetypen soll die Funktion versuchen, die Addition trotzdem zu durchzuführen.
         Sollte das nicht möglich sein, wird ein Fehler geworfen.
*/
function add(a, b) {

    // Prüfen, ob die Parameter Zahlen sind
    if (typeof a === "string") a = parseFloat(a);
    if (typeof b === "string") b = parseFloat(b);

    return a + b;
}

 class Sum {

    constructor(a, b) {
        this.a = a;
        this.b = b;

        this.a = this.isStringThenConvertToNumber(a);
    }

    isStringThenConvertToNumber(value) {
        if (typeof value === "string") {
            return parseFloat(value);
        }
        return value;
    }

    add(a, b) {
        return this.a + this.b;
    }

}

export { Sum, add };


/*
    let fn = (event) => {console.log("click")}

    document.querySelector("button").addEventListener("click", (event) => { fn(event) });



*/