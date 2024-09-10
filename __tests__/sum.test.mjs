import { sum } from "./../src/utils/functions.mjs";

// Test Suite
describe("sum", () => {
    // Test Case
    test("adds 1 + 2 to equal 3", () => {
        // Arrange
        const a = 1;
        const b = 2;
        const expected = 3; // Assertion!

        // Act
        const result = sum(a, b);

        // Assert
        expect(result).toBe(expected);
    });

    test("adds 1.1 + 1.9 to equal 3", () => {
        // Arrange
        const a = 0.1;
        const b = 2.9;
        const expected = 3; // Assertion!

        // Act
        const result = sum(a, b);

        // Assert
        expect(result).toBe(expected);
    });

    test("adds 2 + '3' to equal 5", () => {
        // Arrange
        const a = 2;
        const b = "3";
        const expected = 5; // Assertion!

        // Act
        const result = sum(a, b);

        // Assert
        expect(result).toBe(expected);
    });
});
