# Хэш-таблицы

Хэш-таблица — это неупорядоченная структура данных, которая реализует ассоциативный массив, то есть абстрактный тип данных, позволяющий хранить пары вида _ключ-значение_ и поддерживающий операции добавления, поиска и удаления.

> **Упорядоченная структура** данных — это та, в которой порядок вставки *запоминается*. 
> **Неупорядоченная структура** данных — это та, в которой порядок вставки не имеет значения.


## Почему `HASH-таблица`

В отличие от другой структуры данных, `Array`, где *индекс* для сохранения элемента вычисляется автоматически, `Хэш-таблица` работает иначе. 

В `Хэш-таблице`, перед такими действиями, как *вставка*, *удаление*, *получение* и т.д. начинается с вычесления `Hash`-функции. Она преобразует входные данные, в случае **Хэш-таблицы**, это `key`, в индекс (целое число) в массиве, где сохранится *значение*. 

Одно из ограничений *массивов*, которое можно обойти в `Хэш-таблице` — индексы должны быть целыми числами. Обходится оно тем, что `Hash`-функция может преобразовывать любые входные данные в целое число. 

*Упомянуть коллизии*

## Сравнение **O(n)** `HASH-таблица` с `Array (Массивами)`

Так как `HASH-таблицы` и `Array (Массивы)` одни из наиболее широко используемых структур данных, имеет смысл сравнить их *сложность*, чтобы определить, когда использовать `HASH-таблицы` объективно, а когда можно обойтись и `Array (Массивами)`.

### `HASH-таблица`

| Название | Описание                          | Сложность             |
| -------- | --------------------------------- | --------------------- |
| search   | поиск                             | O(1)                  |
| insert   | вставка                           | O(1)                  |
| lookup   | получение по индексу              | O(1)                  |
| delete   | удаление из массива               | O(1)                  |

### `Array (Массив)`

| Название | Описание                          | Сложность             |
| -------- | --------------------------------- | --------------------- |
| search   | поиск                             | O(n)                  |
| lookup   | получение по индексу              | O(1)                  |
| push     | вставка в конец массива           | O(1), иногда O(n)\*\* |
| insert   | вставка в начало/середину массива | O(n)                  |
| delete   | удаление из массива               | O(n)                  |

И хотя `HASH-таблицы` выигрывают во всех проверках сложности, с практической точки зрения `HASH-таблицы` имеют недостатки, и важно знать о них.

*Заполнить до конца*
