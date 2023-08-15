const { CustomArray } = require("../array");

const DEFAULT_VALUES = {
	0: 1,
	1: 2,
	2: 3,
	3: 4,
	4: 5,
};

describe("CustomArray", function () {
	let array;

	beforeEach(function () {
		array = new CustomArray(1, 2, 3, 4, 5);
	});

	it("Should return the initialized value", function () {
		expect(array.data).toStrictEqual(DEFAULT_VALUES);
	});

	it("Should add one element in of the array", function () {
		array.push(6);
		expect(array.data).toStrictEqual({
			...DEFAULT_VALUES,
			5: 6,
		});
	});

	it("Should add several element in of the array", function () {
		array.push(6, 7, 8, 9, 10);
		expect(array.data).toStrictEqual({
			...DEFAULT_VALUES,
			5: 6,
			6: 7,
			7: 8,
			8: 9,
			9: 10,
		});
	});

	it("Should delete the last element in the array", function () {
		array.pop();
		expect(array.data).toStrictEqual({
			0: 1,
			1: 2,
			2: 3,
			3: 4,
		});
	});

	it("Must delete the element at the 2 index (number 3)", function () {
		array.delete(2);
		expect(array.data).toStrictEqual({
			0: 1,
			1: 2,
			2: 4,
			3: 5,
		});
	});
});
