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
        scores: 90,
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
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
// console.log(user===copyUser)//- что должно быть в консоли?
// console.log(user.friends===copyUser.friends)//- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
// let deepCopyUser = JSON.parse(JSON.stringify(user))    //читер
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
// console.log(user===deepCopyUser) //- что должно быть в консоли?
// console.log(user.friends===deepCopyUser.friends) //- что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
// console.log(students === copyStudents) //- что должно быть в консоли?
// console.log(students[0].age === copyStudents[0].age) //- что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(el => ({...el}));

//Проверка:
// console.log(students === deepCopyStudents) //- что должно быть в консоли?
// console.log(students[0] === deepCopyStudents[0]) //- что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents.sort((a, b) => a.name <= b.name ? -1 : 1)];
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter(el => el.scores >= 100);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
// let newDeepCopyStudents = topStudents.concat(deepCopyStudents);
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(el => !el.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(el => el.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = students.map(el => el.name).join(' ');
console.log(nameWithSpace)
let namesWithComma = students.map(el => el.name).join(',');   // === join()
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(el => {
    delete el.isMarried
    return {...el, isStudent:true}
});
console.log('9', students)
console.log('9', trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(el => el.name === "Nick" ? {...el, isMarried: true} : el);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(el => el.name === "Ann");
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
let bestStudent = students.reduce((acc, el) => el.scores > acc.scores ? el : acc);

// - *не испльзуя методы массивов и Math.max()*
let bestStudent2 = students[0]

for (let i = 0; i < students.length; i++) {
    if(students[i].scores > bestStudent2.scores){
        bestStudent2 = students[i]
    }
}
// let bestStudent1;
// let counter = 0
// for (let i = 0; i < students.length - 1; i++) {
//     if (students[i].scores > counter) {
//         counter = students[i].scores
//         bestStudent1 = students[i]
//     }
// }

console.log(bestStudent)
console.log(bestStudent2)

//13. Найдите сумму баллов всех студентов (reduce)
const sum = students.reduce((acc, s) => acc + s.scores, 0)
console.log(sum)
// И поднимаем руку!!!!

let scoresSum;
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    return students.map(el => ({...el, friends: students.map(n => n.name).filter(m => m !== el.name)}))
}
console.log(addFriends(students));









