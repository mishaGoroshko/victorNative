const todoListID_1 = 'rg-234234'
const todoListID_2 = 'fd-4562245'

const todoLists = [
    {
        id: todoListID_1,
        title: 'What to  learn',
        filter: 'all',
    },
    {
        id: todoListID_2,
        title: 'What to bye',
        filter: 'all',
    },
]

const tasks = {
    [todoListID_1]: [
        {title: 'HTML', isDone: true},
        {title: 'CSS', isDone: false},
        {title: 'React', isDone: false}
    ],
    [todoListID_2]: [
        {title: 'water', isDone: true},
        {title: 'bread', isDone: false},
        {title: 'salt', isDone: false},
    ]
}
// console.log(tasks['rg-234234'].find(t=>t.title === 'React'))
// console.log(tasks[todoListID_1].find(t => t.title === 'React'))

const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.reduce((sum, n) => sum += n, 0))
// console.log(arr.reduce((max, n) => max > n ? max : n))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
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
        scores: 100
    }
];

console.log(students.reduce((acc, st) => acc + st.scores, 0))

console.log(students.reduce((acc, st) => {
    return `${acc} ${st.name}`
}, ''))

console.log(students.reduce((acc, st) => {   // !st.isMarried ? [...acc, st] : acc
    if (!st.isMarried) {
        acc.push(st)
    }
    return acc
}, []))

console.log(students.reduce((newObj, el) => {
    newObj[el.name] = el.scores
    return newObj
}, {}))

