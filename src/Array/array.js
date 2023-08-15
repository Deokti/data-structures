/**
 * Массив должен реализовывать:
 * - [x] при инициализации можно передать как одно, так и несколько инициализирующих значений
 * - [x] массив должен имплеминтировать 4 главных функции
 *    - [x] lookup => get - получение значения по индексу
 *    - [x] push - добавление значения/значений в начало массива
 *    - [x] pop - удаление и возвращение последнего значения
 *    - [x] delete - удаление значения по индексу
 */

class CustomArray {
	// ########################################################
	// PRIVATE FUNCTIONS
	// ########################################################
	#pushItem(data) {
		this.data[this.length] = data;
		this.length++;
	}

	#pushItems() {
		const args = arguments[0];

		for (let i = 0; i < args.length; i++) {
			this.#pushItem(args[i]);
		}
	}

	#shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}

		delete this.data[this.length - 1];
		this.length--;
	}

	// ########################################################
	// CONSTRUCTOR
	// ########################################################
	constructor() {
		this.data = {};
		this.length = 0;

		if (arguments.length === 1) {
			this.#pushItem(arguments[0]);
		} else if (arguments.length > 1) {
			this.#pushItems(arguments);
		}
	}

	// ########################################################
	// PUBLIC FUNCTIONS
	// ########################################################

	/**
	 * Возвращает значение по индексу
	 * @param {number | string} index
	 * @returns {value}  значение по индексу
	 */
	get(index) {
		return this.data[index];
	}

	/**
	 * Добавляет значение в начало массива
	 * @param {number | string | object | array | null | undefined | BigInt} data принимает как одно, так и несколько значений
	 * @returns {number} длина массива
	 */
	push(data) {
		if (arguments.length > 1) {
			this.#pushItems(arguments);

			return this.length;
		}

		this.#pushItem(data);

		return this.length;
	}

	/**
	 * Удаляет последнее значение
	 * @returns {*} возвращает удалённое значение
	 */
	pop() {
		const item = this.data[this.length - 1];

		delete this.data[this.length - 1];
		this.length--;

		return item;
	}

	/**
	 * Удаляет значение по индексу
	 * @param {number} index
	 * @returns {*} возвращает удалённый элемент
	 */
	delete(index) {
		if (index > this.length - 1) {
			throw new Error("Индекса не существует");
		}

		const item = this.data[index];

		this.#shiftItems(index);

		return item;
	}
}

module.exports = { CustomArray };
