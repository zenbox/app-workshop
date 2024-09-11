/** Sum Tests
 *
 * @package Webapplication
 * @module Tests
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2024-09-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2024 Michael Reichart, Cologne
 */

import { add } from "./../src/utils/functions.mjs";
import { Sum } from "./../src/utils/functions.mjs";

// Test Suite
describe("add", () => {
    // Test Case für Integer
    test("adds 1 + 2 to equal 3", () => {
        // Arrange
        const a = 1;
        const b = 2;
        const expected = 3; // Assertion!

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(expected);
    });

    // Test Case für Fließkommazahlen
    test("adds 0.1 + 0.9 to equal 1", () => {
        // Arrange
        const a = 0.1;
        const b = 0.9;
        const expected = 1; // Assertion!

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(expected);
    });

    // Test Case für Fließkommazahlen
    test("adds 2 + 0.9 to equal 2.9", () => {
        // Arrange
        const a = 2;
        const b = 0.9;
        const expected = 2.9; // Assertion!

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(expected);
    });

    // Test Case für Strings
    test("adds '1' + '2' to equal 3", () => {
        // Arrange
        const a = "1";
        const b = "2";
        const expected = 3; // Assertion!

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(expected);
    });
});

describe("Sum", () => {
    test("adds 1 + 2 to equal 3", () => {
        // Arrange
        const a = 1;
        const b = 2;
        const sum = new Sum(a, b);
        const expected = 3; // Assertion!

        // Act
        const result = sum.add(a, b);

        // Assert
        expect(result).toBe(expected);
    });
});

// Code Coverage?
// npm run test:coverage
// Testabdeckung: 100% -> alle Funktionen sind genügend unit-getestet"
// Realisitisch eher 70% bis 80% Testabdeckung
