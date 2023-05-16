import Calculator from "./Calculator";

describe("Calculator", () => {

    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it.each([
        [1, 2, 3],
        [2, 1, 3],
        [2, 3, 5],
        [6, 2, 8],
    ])("should add %i and %i to equal %i", (a, b, expected) => {
        expect(calculator.add(a, b)).toBe(expected);
    });

    it.each([
        [2, 1, 1],
        [3, 2, 1],
        [5, 3, 2],
        [8, 2, 6],
    ])("should subtract %i and %i to equal %i", (a, b, expected) => {
        expect(calculator.subtract(a, b)).toBe(expected);
    });

    it.each([
        [2, 3, 6],
        [3, 2, 6],
        [5, 3, 15],
        [8, 2, 16],
    ])("should multiply %i and %i to equal %i", (a, b, expected) => {
        expect(calculator.multiply(a, b)).toBe(expected);
    });

    it.each([
        [6, 2, 3],
        [3, 2, 1.5],
        [5, 3, 1.6666666666666667],
        [8, 2, 4],
    ])("should divide %i and %i to equal %i", (a, b, expected) => {
        expect(calculator.divide(a, b)).toBe(expected);
    });

});