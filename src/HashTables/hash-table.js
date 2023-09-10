/**
 * Хэш-таблица должна реализовывать:
 * - [x] выделение определённого колличества памяти для хранения данных
 *   - [] в том случае если свободное место в таблице закончилось - увеличить выделение памяти в два раза
 *   - [] в том случае если колличество элементов в таблице меньше более чем в два раза выделенной памяти, уменьшить память
 * - [] таблица должна имплеминтировать 4 главных функции
 *    - [x] get => получение данных по ключу
 *    - [x] set - сохранение данных ключ-значение
 *    - [] keys - получение всех ключей в таблице
 *    - [] values - получение всех значений в таблице
 *    - [] delete - удаление значения по ключу
 */

class HashTable {
	// ########################################################
	// CONSTRUCTOR
	// ########################################################
	constructor(size) {
		this.hashTable = new Array(size);
	}

	// ########################################################
	// PUBLIC FUNCTIONS
	// ########################################################

	/**
	 * Добавляет значение в начало массива
	 * @param {string} key принимает ключ по которому сохраняет значение
	 * @param {string | number | null | undefined | BigInt | array} value значение для сохранения
	 * @returns {number} длина массива
	 */
	set(key, value) {
		const address = this._hash(key);

		if (!this.hashTable[address]) {
			this.hashTable[address] = [];
		}

		this.hashTable[address].push([key, value]);
		return this.hashTable;
	}

	/**
	 *
	 * @param {string} key принимает ключ для получения данных
	 */
	get(key) {
		const address = this._hash(key);
		const data = this.hashTable[address];

		if (!data) return undefined;

		for (let i = 0; i < data.length; i++) {
			if (data[i][0] === key) return data[i][1];
		}
	}

	// ########################################################
	// PRIVATE FUNCTIONS
	// ########################################################

	/**
	 * По строке-ключу выдать (вычислить) индекс в массиве, куда надо сохранить значение.
	 * @param {string} key
	 * @returns {number} индекс для сохранения значения
	 */
	_hash(key) {
		let hash = 0;

		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}

		return hash % this.hashTable.length;
	}
}

module.exports = { HashTable };
