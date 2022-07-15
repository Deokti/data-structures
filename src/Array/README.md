# Массивы

Массив — это структура данных, которая хранит набор значений одного и того же типа _(в идеальном мире)_.

## Хранение в памяти

Массив хранится как одно целое в памяти компьютера, начиная с **0-го** индеса. Когда мы пытаемся получить значение, мы получаем не само значение, а адрес в памяти, по которому хранится значение. Из-за этого массивы потребляют достаточное количество памяти при создании.

Так как заранее неизвестно _(если не указать размер)_ сколько памяти потребуется для массива, он изначально занимает несколько слотов в памяти _(и впоследствии может расширяться)_. Это ответ: _"Почему мы можем получить значение по индексу?"_, — потому что изначально неизвестно какой адрес занимает массив и его значения.

## Методы взаимодействия и их сложность

| Название | Описание                          | Сложность |
| -------- | --------------------------------- | --------- |
| lookup   | получение по индексу              | O(1)      |
| push     | вставка в конец массива           | O(1)      |
| insert   | вставка в начало/середину массива | O(n)      |
| delete   | удаление из массива               | O(n)      |

Возможно, стоит пояснить, почему же вставка в начало списка является `O(n)`.

Массивы хранятся в _постоянной памяти_, то есть когда массив объявляется, программа рассматривает блок памяти, в котором хранится массив не как отдельные ячейки _(как, например, в `LinkedList`)_, а как одно целое. Мы можем получить элемент по индексу, который начинается с **0**.

Соответственно, при добавлении нового элемент в начало массива, прежние индексы уже не актуальны, а значит, их нужно сдвинуть на `+ 1`. И такая операция должна произойти для всех элементов, находящихся в массиве. А их может быть сотни, тысячи или миллионы.

## Использование (в JavaScript)

Существует несколько возможных способов объявить массив.

```javascript
const arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr_2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

В основном используется `arr_1` синтаксис.

В скобках задаётся инициализируемое _(базовое)_ значение. Их можно получить по индексу.

```javascript
const arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr[2]; // 3;
```

Однако несмотря на доминирование первого синтаксиса, второй нельзя забывать, особенно при написании алгоритмов при работе с массивами. Его преимущество в том, что при инициализации массива можно задать изначальный занимаемый размер в памяти.

```javascript
const arr = new Array(10);

console.log(arr); // (10) [пусто * 10]
```

Проблема при использовании такого подхода состоит в том, что записывать значение с помощью `push` не является возможным до тех пор, как пустые значения не закончится. В противном случае при использовании `push` данные добавятся после пустых значений.

```javascript
const arr = new Array(10);
arr.push(2);

console.log(arr); // (11) [пусто * 10, 2];
```

При объявлении во втором синтаксисе запись идет по индексу.

```javascript
const arr = new Array(10);
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

console.log(arr); // (10) [1, 2, 3 пусто × 7]
```

В качестве примера в `/index.js` напишем функцию `map`, подобную методу массива, используя различные оптимизации.
По пути `/compair.map.functions.js` содержатся три реализации `map` и сравнение их по скорости работы.

### Ссылки

[Массивы (Developer Mozilla)](https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Arrays)
[Массивы (Learn JavasSript)](https://learn.javascript.ru/array)
[JS Basic Data Structures: Arrays & Objects](https://github.com/freeCodeCamp/CurriculumExpansion/issues/90)
[Arrays, Linked Lists, and Big O Notation](https://medium.com/@mckenziefiege/arrays-linked-lists-and-big-o-notation-486727b6259b)
[Лекция 5: Массивы (ОСТОРОЖНО: длинная статья)](https://sve.openscience.academy/files/04657e410e45ccd4ef2464f258b46288.pdf)