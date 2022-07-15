// Сравниваем скорость работы нескольких неализаций функций map
// https://measurethat.net/Benchmarks/Show/19828/0/comparison-of-three-map-functions
// https://goo.su/9f8VCY (perf.js.hyoo.ru)

const VALUES_ARRAY = 10000;
const ITERATIONS_ARRAY = 1_000_000;

const testArr = new Array(VALUES_ARRAY).fill(42);
const multiply = (num) => num * 2;

// Данная функция писалась с index.js c разбором
function map(arr, callback) {
	const _length = arr.length;

	const result = new Array(_length);

	for (let i = 0; i < _length; i++) {
		result[i] = callback(arr[i], i, arr);
	}

	return result;
}

// Самая обычная реализация map без каких-либо дополнений
function arrayWithNoLength(arr, callback) {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i], i, arr));
	}

	return result;
}

// Метод массива, который в основном используется
function mapHowArrayMethod(arr, callback) {
	return arr.map(callback);
}

function speedTest() {
	console.time("Function MAP");
	for (let i = 0; i < ITERATIONS_ARRAY; i++) {
		map(testArr, multiply);
	}
	console.timeEnd("Function MAP");

	console.time("Function ARRAY_WITH_NO_LENGTH");
	for (let i = 0; i < ITERATIONS_ARRAY; i++) {
		arrayWithNoLength(testArr, multiply);
	}
	console.timeEnd("Function ARRAY_WITH_NO_LENGTH");

	console.time("Function MAP_HOW_ARRAY_METHOD");
	for (let i = 0; i < ITERATIONS_ARRAY; i++) {
		mapHowArrayMethod(testArr, multiply);
	}
	console.timeEnd("Function MAP_HOW_ARRAY_METHOD");
}

speedTest();