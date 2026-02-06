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

//Домашнее задание на 9.02

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

const z = "a"
const c = "a"
const r = "a"



let m = prompt("Введите трехзначное число")
m = z, c, r
if (z===c || c===r  || z===r) {
    alert ("В числе есть одинаковые цифры")
} else {
    alert ("В числе нет одинаковых цифр")
}