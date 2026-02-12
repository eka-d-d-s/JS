<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
// console.log("Привет мир");
// let x = "Привет мир!!!";
// console.log(x)
// let valuePromt = promt("введите число", 50);
// alert(valuePromt)
// console.log(+valuePromt+50)
// valuePromt = +promt("Введите ваше число")
// alert(valuePromt**2)

// x = +prompt("введите ваше 1 число");
// y = +prompt("введите ваше 2 число");
// let average = (x+y)/2;
// alert(average);
// x = +prompt("введите длину стороны квадрата");
// let s = x**2
// alert("Площадь квадрата равна" + s)
// let name = prompt("Введите имя")
// alert("Привет" + name)


// Домашнее задание на 5.02
//1
// let imia = prompt("Введите имя");
// alert("Привет " + imia + " !");
//2
// let god = +prompt("Введите ваш год рождения");
// const godUmolch = 2025;
// alert (godUmolch - god);
//3
// x = +prompt("Введите длину квадрата");
// let p = x * 4;
// alert(p);
//4
// x = +prompt("Введите радиус окружности");
// let s = x**2 * 3.14;
// alert (s);
//библиотека Math
// let num = 10.7
// console.log(Math.round(num));// до ближайшего
// console.log(Math.floor(num));//до нижнего
// console.log(Math.ceil(num)); // до верхнего
// console.log(Math.trunc(num)); // отбрасывает дробь

// console.log(Math.random());
// console.log(Math.random() * 10);



// библиотека Math


// let num = 10.912345;

// console.log(Math.round(num)); // до ближайшего
// console.log(Math.floor(num)); // До нижнего
// console.log(Math.ceil(num)); // До верхнего
// console.log(Math.trunc(num)); // отбасывает дробь
// console.log(num.toFixed(2)); //

// console.log(Math.random()) // рандом от 0 до 0.999999
// от 0 до 9
// console.log(Math.floor(Math.random() * 10))

// console.log(Math.PI); // Число Pi
// console.log(Math.E); // Число EEEE

// console.log(Math.min(1, 5, 3)); // минимальное значение 
// console.log(Math.max(1, 5, 3)); // максимальное значение

// const minValue = (x, y) => {
//     return Math.min (x, y);
// }
// console.log(minValue(10, 5))

// Домашнее задание на 9.02

// let x = +prompt ("Введите свой возраст");
// if (x <= 11)  {
//     alert ("Вы ребенок!")
// } else if (x>=12 && x<18) {
//     alert ("Вы подросток!")
// } else if (x>=18 && x<60) {
//     alert ("Вы взрослый!")
// } else if (x>=60) {
//     alert ("Вы пенсионер!")
// }

// let y = +prompt ("Введите число от 0 до 9");
// if (y===0)  {
//     alert (" ) ")
// }  else if (y===2) {
//     alert (" @ ")
// } else if (y===3) {
//     alert (" # ")
// } else if (y===4) {
//     alert ("$")
// } else if (y===5) {
//     alert ("%")
// } else if (y===6) {
//     alert ("^")
// } else if (y===7) {
//     alert ("&")
// } else if (y===8) {
//     alert (" * ")
// } else if (y===9) {
//     alert ("(")
// }  



// let m = prompt("Введите трехзначное число");
// m === ("z"+"c"+"r")
// if ("z"==="c" || "c"==="r"  || "z"==="r") {
//     alert ("В числе есть одинаковые цифры");
// } else {
//     alert ("В числе нет одинаковых цифр");
// }


// let godV = +prompt("Введите год");
// if (godV % 400 === 0 || godV % 4 === 0 && godV%100 !== 0) {
//     alert ("Високосный год");
// } else {
//     alert ("Невисокосный год");
// }

// задание 4


// let chisla = (a, b) => {
//     if (a < b) {
//         return -1
//     }
//     if (a>b) {
//         return 1
//     }
//     if (a===b) {
//         return 0
//     }
// }
// console.log(chisla(6,4))

let num = 100;

console.log(+num.toString(2))
let string = "42px"
console.log(+string)//NoN
console.log(parseInt(string)) //компонент  преобразует строку в число обрезая в текст, возвращает только первое число
console.log(parseFloat(string)) //вернет дробное значение на первой точке

let string = "4254";
console.log(string.length) // показывает кол-во символов Длина строки
console.log(string[string.length-1])// выводим последний элемент строки
console.log(string.charAt(10)) // выводим последний элемент строки

//  for(let char of string) { 
//     console.log(char)
//  }
string[0] = "H"
console.log(string)
console.log(string.toUpperCase());// переводит все буквы в верхний регистр
console.log(string.toLowerCase());// переводит все буквы в нижний регистр
 
// Задача/   имя должно быть с большой группой
const name = "наСтЯ";
function hello (str) {
 return str [0].toUpperCase() + str.substr(1, str.length - 1).toLowerCase();

}

// Метод 1
// Настя
console.log(name.substr(1, 2)); // ac  Начало и количество символов

// Метод 2
console.log(name.slice(1, 4)); // аст   начало конец, если вместо 1 используем -1 - с конца начинаем

// Метод 3
console.log(name.substring(1, 4)); // аст  начало конец

// Задача 4.  дом номер 4 Определить кол-во цифр в введенном числе 
// легкий способ 
// let numnew = prompt ("Введите число");
// console.log(numnew.length)
// правильный способ решение чз вайл
let numnew = +prompt ("Введите число");
let i = 0
while (numnew > 0) {
    numnew = Math.floor(numnew / 10);
    console.log(numnew)
    i++
}
alert(`Количество цифр ` &{i})

// Задача 3.  rjkbxtcndj j,ob[ ltkbntktq]
let numNew= +prompt("Введите число");
let counter = 0;
for (let i = 1; i<= numNew; i++) {

    if (numNew % i === 0) {
        counter++
    }
}
alert(`Количество делителей &{counter}`)

let x = +prompt("Введите число");
let i = 0;
while (i < x) {
    console.log ("Hello" + i);
    i++
}

// Задача. Создать функцию, который возвращает массив целых чисел 
// от n до 1, где n>0
const reverseSeq = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(n - i)
    }
    return arr;

};
console.log(reverseSeq(5))
console.log(reverseSeq(-5))

// Задача . Напишите функцию вывести строку s столько раз сколько указал в n
 // 6, "I" => "IIIIII"
 // 1 ВАРИАНТ РЕШЕНИЯ 
function repeatStr (n, s) {
    let str = "";
    for (let i= 0; i < n; i++) {
        str = str + s
    }
    return str;

}
console.log(repeatStr(2, "Na"))

//2 ВАРИАНТ РЕШГЕНИЯ  repeat(n) -дублирует строку n раз
function repeatStr (n, s) {
     return s.repeat(n)
}
console.log(repeatStr(2, "Na"))

// 3 ВАРИАНТ РЕШЕНИЯ
function repeatStr (n, s) => s.repeat (n)
console.log(repeatStr(2, "Na"))