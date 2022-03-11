const names = ['Bob', 'Ted', 'Alex', 'Fred', 'aaa', 'игорь', 'Юра', 100, 2]
// console.log(names)

// console.log(names.sort())          //мутирует // сортирует по unicode
// console.log([...names].sort())


const numbers = [1, -100, 0, 999, 1111, 69, 342, -12]

const compareFunc = (a, b) => {   // для каждой пары чисел
    if (a.toString().toLowerCase() <= b.toString().toLowerCase()) {      //if (a <= b)
        return -1 // любое отрицательное значение, ели менять не надо
    } else {
        return 1   // любое положительное значение, ели менять надо
    }
}

// console.log(numbers.sort(compareFunc))

// console.log(numbers
//     .sort((a, b) => a - b)
//     .reverse())  //  a <= b ? -1 : 1

console.log(names.sort(compareFunc))

console.log(names.sort((a, b) => a.toString().toLowerCase() <= b.toString().toLowerCase() ? -1 : 1));


console.log(names.sort(compareFunc).sort((a, b) => a - b))  //  сортировка и str и  num

const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

console.log([...students].sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1))

console.log([...students].sort((a, b) => a.age <= b.age ? -1 : 1))


// сортировка пузырьком  bubble sort
console.log(numbers)

for (let j = 0; j < numbers.length - 1; j++) {
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            // let temp = numbers[i + 1]
            // numbers[i + 1] = numbers[i]
            // numbers[i] = temp

            [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
        }
    }
}

console.log(numbers)