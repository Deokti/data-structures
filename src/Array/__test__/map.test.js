const { _map } = require("../_map");

const arr = [1, 2, 3, 4, 5];
const multiply = (num) => num * 2;

describe("MAP FUNCTION", function () {
	it("The map function should multiply the numbers and return an array", function () {
		const result = _map(arr, multiply);
		expect(result).toStrictEqual([2, 4, 6, 8, 10]);
	});
});
