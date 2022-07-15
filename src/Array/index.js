/**
 * ЗАДАЧА
 * Написать функцию, которая принимает:
 * - Массив с любой структурой данных
 * - Функцию обратного вызова, которая вызывается на каждой итерации и возвращает
 * 		- Элеммент
 * 		- Текущий индекс
 * 		- Весь массив
 * - При написании использовать оптимизации
 */

function map(arr, callback) {
	// Когда цикл начинается, он считывает длину массива на каждой итерации.
	// Этим действием выносим число в отдельный блок памяти.
	// Сказывается ли это на производительноности - это вопрос.
	const _length = arr.length;

	// Так как колличество элементов в массиве не изменится,
	// при объявлении массива ограничиваем выделение памяти.
	const result = new Array(_length);

	for (let i = 0; i < _length; i++) {
		result[i] = callback(arr[i], i, arr);
	}

	return result;
}

module.exports = { map };