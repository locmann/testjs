function findMissing(array) {
  if (array.length === 0) {
    return 'Пустой массив'
  }
  // сортируем массив по возрастанию для удобной итерации по нему
  array.sort((a, b) => a - b)

  // сохраняем первый элемент
  let tmp = array[0]

  for (let i = 1; i < array.length; i++) {
    // так как последовательность должна отличаться на 1, то мы сравниваем предыдущий элемент с текущим минус один
    if (array[i] - 1 !== tmp) {
      return array[i] - 1
    }
    tmp = array[i]
  }
  return 'Нет пропущенных значений'
}

function testFindMissing() {
  // обычный случай
  console.log(findMissing([5, 0, 1, 3, 2])); // 4

  console.log(findMissing([7, 9, 10, 11, 12])); // 8

  // пропуска нет
  console.log(findMissing([1, 2, 3, 4, 5])); // Нет пропущенных значений

  // пропуск в середине
  console.log(findMissing([0, 1, 2, 4, 5])); // 3

  // массив из 1 элемента
  console.log(findMissing([0])); // Нет пропущенных значений

  // пустой массив
  console.log(findMissing([])); // Пустой массив

  // пропущено два значения
  console.log(findMissing([7, 9, 10, 11, 13])); // 8
}

testFindMissing()