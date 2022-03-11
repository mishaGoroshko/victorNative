// 1. Найти факториал числа

// const getFactorial = num => {
//     let factorial = 1;
//     while (num > 0){
//         factorial = factorial * num
//         num--
//     }
//     return factorial;
// }

//const getFactorial = num => num === 0 ? 1 : getFactorial(num - 1) * num

const getFactorial = num => new Array(num)
    .fill(undefined)
    .reduce((factorial, val, index) =>
        factorial * (index + 1), 1)

console.log(getFactorial(0))
console.log(getFactorial(3))
console.log(getFactorial(6))

//2.Найти самое длинное слово в предложении

// const getMaxWordLength = (sentence) => {
//     let words = sentence.split(" ");
//     let maxWordLength = 0;
//
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > maxWordLength) {
//             maxWordLength = words[i].length;
//         }
//     }
// }

// const getMaxWordLength = (sentence) => {
//     return sentence
//         .split(" ")
//         .reduce((acc, el) => el.length > acc ? el.length : acc, 0)
// }

const getMaxWordLength = (sent) => Math.max(...sent.split(" ").map(w => w.length))

console.log(getMaxWordLength("The quick brown fox jumped over the lazy dog"))
console.log(getMaxWordLength("Hello!"))


// 3. Дан массив с вложенными в него массивами из чисел.
// Сформировать массив, состоящий из максимальных значений каждого вложенного массива.

const getMaxArrays = (array) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        let maxArray = 0
        for (let j = 0; j < array[i].length; j++) {
            if(array[i][j] > maxArray){
                maxArray = array[i][j]
            }
        }
        result[i] = maxArray
    }
    return result
}
// const getMaxArrays = (array) => {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         result[i] = Math.max(...array[i])
//     }
//     return result
// }

// const getMaxArrays = (array) => {
//     return array.map(arr => Math.max(...arr))
// }

console.log(getMaxArrays([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]))

// 4.Определить, заканчивается ли строка указанной подстрокой
// const checkEnding = (str, target) => {
//     return str.substring(str.length - target.length) === target;
// }

const checkEnding = (str, target) =>  {
    return str.slice(-target.length) === target
}

console.log(checkEnding("Bastian", "n"));

//5.Составьте строку из указанного количества повторов данной подстроки

// const repeatStringNumTimes = (str, num) => {
//     let result = ""
//     if(num > 0){
//         for (let i = 0; i < num; i++) {
//             result += str
//         }
//     }
//     return result
// }

const repeatStringNumTimes = (str, num) => num > 0
    ? str + repeatStringNumTimes(str, num - 1)
    : ''

repeatStringNumTimes("abc", 3); // "abcabcabc"

// 6.Обрезать строку до указанного количества символов и закончит многоточием
const  truncateString = (str, num) => {
   return str.length > num
       ? `${str.slice(0, num)}...`
       : str
}

//7. Самодельный find
function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i]))
            return arr[i]
    }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//8. Функция принимает предложение и возвращает то же предложение, где все слова
//написаны строчными, но начинаются с заглавных букв
function titleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(w => w[0].toUpperCase() + w.slice(1))
        .join(" ");;
}

titleCase("вСем приВет, друзья!"); // "Всем привет, друзья!"

// 9. Очистите массив от всех значений, которые могут быть интерпретированы как false
function bouncer(arr) {

    return arr.filter(el => Boolean(el));
}
//10. Найдите индекс, по которому будет находиться num в массиве arr,
// если массив будет отсортирован по возрастанию
function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= num){
            return i
        }
    }
    return arr.length
}

function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
}

function getIndexToIns(arr, num) {
    return arr
        .concat(num)
        .sort((a, b) => a - b)
        .indexOf(num);
}

console.log(getIndexToIns([40, 60], 50)) //1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // 2.
console.log(getIndexToIns([3, 10, 5], 3) )// 0.
console.log(getIndexToIns([5, 3, 20, 3], 5)) // 2.
console.log(getIndexToIns([2, 5, 10], 15)) // 3.

// 11. Создайте функцию, которая будет очищать массив от всех значений, которые могут быть приведены к false

const falsyFinder = arr => arr.filter(el => !!el)

// 12. Функция принимает параметром массив из двух строк. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра
function mutation(arr) {
    const string = arr[0].toLowerCase()
    const str = arr[1].toLowerCase()
    for (let i = 0; i < second.length; i++){
        if(!string.includes(str[i])){
            return false
      }
    }
    return true
}
  
function mutation(arr) {
    return arr[1]
      .toLowerCase()
      .split("")
      .every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) != -1;
      });
  }
  
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"])) //false

// 13. Функция возвращает массив в котором элементы исходного массива разбиты на вложенные массивы указанной длинны
function chunkArrayInGroups(arr, size) {
    const result = []
    for (let i = 0; i < arr.length; ){
        console.log(i);
      result.push(arr.splice(0, size))
    }
    return result
  }
  
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a, b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)) //[[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)) //[[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)) // [[0, 1, 2], [3, 4, 5], [6]].


// 14. Функция возвращает массив, который представляет собой второй массив и вставленный в него  первый массив начиная с указанного индекса n. При этом первый массив не изменяется.
// function frankenSplice(arr1, arr2, n) {
//     const result = [...arr2]
//     // const result = arr2.slice()
//     arr1.forEach((el, i) => {
//       result.splice(n + i, 0, el)     
//     })
//     return result
//   }

function frankenSplice(arr1, arr2, n) {
    const result = [...arr2];
    result.splice(n, 0, ...arr1);
    return result
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); //[4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1)); // ["a", 1, 2, "b"]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
console.log(frankenSplice([1, 2, 3, 4], [], 0));//[1, 2, 3, 4]