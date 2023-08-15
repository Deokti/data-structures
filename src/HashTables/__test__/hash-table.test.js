const { HashTable } = require("../hash-table");

describe("CustomHashTable", function () {
	let table;

	beforeEach(function () {
		table = new HashTable(10);
	});

	it("Should create a table with limited memory", function () {
		expect(table.hashTable.length).toStrictEqual(10);
	});

	it("Should return undefined if there is no data on the key", function () {
		const getValueByKey = table.get("admin");
		expect(getValueByKey).toStrictEqual(undefined);
	});

	it("Should save the key-value to the table and get the saved result", function () {
		table.set("admin", 1334133);
		table.set("admin2", 99999);

		const getValueByKey = table.get("admin2");
		expect(getValueByKey).toStrictEqual(99999);
	});
});
