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
// let num = 100;

// console.log(+num.toString(2))
// let string = "42px"
// console.log(+string)//NoN
// console.log(parseInt(string)) //компонент  преобразует строку в число обрезая в текст, возвращает только первое число
// console.log(parseFloat(string)) //вернет дробное значение на первой точке

// let string = "4254";
// console.log(string.length) // показывает кол-во символов Длина строки
// console.log(string[string.length-1])// выводим последний элемент строки
// console.log(string.charAt(10)) // выводим последний элемент строки

// //  for(let char of string) { 
// //     console.log(char)
// //  }
// string[0] = "H"
// console.log(string)
// console.log(string.toUpperCase());// переводит все буквы в верхний регистр
// console.log(string.toLowerCase());// переводит все буквы в нижний регистр
 
// // Задача/   имя должно быть с большой группой
// const name = "наСтЯ";
// function hello (str) {
//  return str [0].toUpperCase() + str.substr(1, str.length - 1).toLowerCase();

// }

// // Метод 1
// // Настя
// console.log(name.substr(1, 2)); // ac  Начало и количество символов

// // Метод 2
// console.log(name.slice(1, 4)); // аст   начало конец, если вместо 1 используем -1 - с конца начинаем

// // Метод 3
// console.log(name.substring(1, 4)); // аст  начало конец

// Задача 4.  дом номер 4 Определить кол-во цифр в введенном числе 
// легкий способ 
// let numnew = prompt ("Введите число");
// console.log(numnew.length)
// правильный способ решение чз вайл
// let numnew = +prompt ("Введите число");
// let i = 0
// while (numnew > 0) {
//     numnew = Math.floor(numnew / 10);
//     console.log(numnew)
//     i++
// }
// alert(`Количество цифр ` &{i})
// ДЗ


// Дом задание на 11.02 
// WHILE, DO WHILE или FOR.
//1.
// function sumChisel(pchislo, vchislo) {
// if (pchislo > vchislo) {
//     console.log("Ошибка: начало диапазона должно быть меньше конца");
//     return
// };
// let sum = 0;
// for (let i = pchislo; i<= vchislo; i++) {
//     sum+=i;
// }
//     return sum;
// };
// const pchislo = 1;
// const vchislo = 5;
// const result = sumChisel(pchislo, vchislo);
// console.log(`${result}`)

// //2.
// function nod(x, y) {
//     let big = Math.max(x, y);
//     let little = Math.min(x, y)
//     while (little > 0) {
//         let ostatok = big % little;
//         big = little;
//         little = ostatok;
//     }
//     return big;
// };

// console.log(`Наибольшмий общий делитель равен ${nod(25, 100)}`); 


// //3.
// let chislo = +prompt("Введите число");
// for (let i= 1; i<= chislo; i++) {
//     if (chislo % i ===0) {
//         console.log(i)

//     }
// };
// console.log(`Делители числа ${chislo}`);


// 4.
// let numnew = prompt ("Введите число");
// console.log(numnew.length)


// // ДЗ на 11.02
// // Функции

// //1.
// function luboeChislo(x, y) {
//     if (x<y) {
//         return -1;
//     }
//     else if (x>y) {
//         return 1;
//     }
//     else {
//         return 0;
//     }
// }
// console.log(luboeChislo(7,9));
// console.log(luboeChislo(15,9));
// console.log(luboeChislo(7,7));


// //2.
// function factorial(x) {
//     if (x===0) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 1; i<=x; i++) {
//         result*=i
//     }
//     return result;
// };
// console.log(factorial(7));


// //3.
// function createChislo() {
//    let x = prompt("Введите первое число");
//    let y = prompt("Введите второе число");
//    let b = prompt("Введите третье число");
//    let pchislo = x + y + b;
//    alert (`Полученное число`+pchislo)
// };



// //4.
// function ploshad(x, y) {
//     if (y!=0) {
//         return x*y
//     };
//     if (y===NaN) {
//         return x*x
//     }
   
// };
// console.log(`${ploshad(50,50)}`)









//  // ДЗ. Обьекты 
//  // 1.
//  let car = {
//    brand: "Opel",
//    model: "Vectra",
//    year: 2025,
//  };
//  console.log("У меня есть", car.brand, car.model, car.year,"года выпуска")

// //2.
// const product = {
//    name: "Футболка",
//    price: 1500,
//    quantity: 10
  
// };

// console.log(totalPrice = product.price * product.quantity)

// //3.
// let rectangle = {
//    width: 8,
//    height: 5,
// };
// rectangle.area = rectangle.width * rectangle.height;
// console.log(rectangle.area)

// //4.
// let item = {
//    price: 50,
//    discount: 20,
// }
// item.finalPrice = item.price - (item.price * item.discount / 100)
// console.log(item)

// //ДЗ Массивы
// //1.

// let queue = ['Иван', 'Мария', 'Петр'];
// queue.push( 'Анна');
// queue.shift();
// queue.unshift("Олег");
// console.log(queue, queue.length);

// //2.
// let callStack = [];
// callStack.unshift('login');
// callStack.unshift('validate');
// callStack.unshift('save');
// callStack.shift();
// callStack.shift();
// console.log(callStack);



// //3.
// let busStop = ['Анна', "Борис"];
// busStop.push( 'Виктор', 'Галина');
// busStop.shift();
// busStop.length = 0;

// console.log(busStop, "Автобус уехал. Пассажиров: 0")

// //4.
// let shoppingList = ['хлеб', 'молоко'];
// shoppingList.push('яйца');
// shoppingList.unshift("масло");
// shoppingList.pop();
// shoppingList.shift();
// console.log(shoppingList);

//1. Написать функцию возведения числа в степень.
// function power(a, b) {
//     if (b === 0) {
//         return 1;
//     }
//     return a* power(a,b-1);
// };
// console.log(power(4,5));

//2. Написать функцию поиска наибольшего общего делителя.
// function nod(a, b) {
//     if (b === 0){
//         return a;
//     }
//     return nod(b, a%b)
// };
// console.log(nod(15,5));

//3. Написатьфункцию для поиска максимальной цифры в числе.

//4. Написать функцию, которая определяет простое ли переданное число.
// function isPrime(a){
//     if (a<=1) {
//         return "Переданное число"
//     };
//     if (a===2) {
//         return "Простое число"
//     };
//     if (a%2===0) {
//         return "Переданное число"
//     };
//     return isPrime(a-2)
// }
// console.log(isPrime(7));

// 5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3.

// function mnChisla(a, bol = 1) {
//     if(a <= 1) return;
//     if (a % bol === 0) {
//         return [bol].concat(mnChisla(a, bol+1));
//     };
//    return mnChisla(a, bol+1);
     
// };
// const number = 18;
// const factors = mnChisla(number);
// console.log(`${factors}`);

//ДЗ на 2.03
//Задание 1
//Создать объект, описывающий автомобиль (производитель,
//модель, год выпуска, средняя скорость), и следующие функции
//для работы с этим объектом.
//1. Функция для вывода на экран информации об автомобиле.
//2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
// const car = {
//     manufacturer: "Toyota",    
//     model: "Camry",            
//     year: 2020,               
//     averageSpeed: 90,        
//     showInfo: function() {
//         return `Автомобиль: ${this.manufacturer} ${this.model}` +
//                `\nГод выпуска: ${this.year}` +
//                `\nСредняя скорость: ${this.averageSpeed} км/ч`;
//     },
//     calculateTravelTime: function(distance) {
//               if (distance <= 0) {
//             return "Расстояние должно быть положительным числом";
//         }
//         const baseTime = distance / this.averageSpeed;
        
        
//         const hours = Math.floor(baseTime);
//         const minutes = (baseTime - hours) * 60;
//         let totalTime = hours * 60 + minutes;
        
        
//         for (let i = 4; i <= totalTime; i += 4) {
//             totalTime += 60;
//         }
        
//         return {
//             totalHours: Math.floor(totalTime / 60),
//             totalMinutes: totalTime % 60
//         };
//     }
// };
// console.log(car.showInfo());
// const travelTime = car.calculateTravelTime(300);
// console.log(`Время в пути: ${travelTime.totalHours} часов ${travelTime.totalMinutes} минут`);

//Задание 2
//Создать объект, хранящий в себе отдельно числитель и зна-
//менатель дроби, и следующие функции для работы с этим объ-
//ектом.
//1. Функция сложения 2-х объектов-дробей.
//2. Функция вычитания 2-х объектов-дробей.
//3. Функция умножения 2-х объектов-дробей.
//4. Функция деления 2-х объектов-дробей.
//5. Функция сокращения объекта-дроби.

// 1. Функция сложения 2-х объектов-дробей */
// function addition(fractA, fractB) {
//     return reduction({
//         num: (fractA.num * fractB.denom) + (fractB.num * fractA.denom),
//         denom: fractA.denom * fractB.denom
//     });
// };

// // 2. Функция вычитания 2-х объектов-дробей */
// function subtraction(fractA, fractB) {
//     return reduction({
//         num: (fractA.num * fractB.denom) - (fractB.num * fractA.denom),
//         denom: fractA.denom * fractB.denom
//     });
// };

// // 3. Функция умножения 2-х объектов-дробей */
// function multiplication(fractA, fractB) {
//     return reduction({
//         num: fractA.num * fractB.num,
//         denom: fractA.denom * fractB.denom
//     });
// };

// // 4. Функция деления 2-х объектов-дробей */
// function division(fractA, fractB) {
//     return reduction({
//         num: fractA.num * fractB.denom,
//         denom: fractA.denom * fractB.num
//     });
// };

// //5. Функция сокращения объекта-дроби */
// function reduction(fact) {
//     let resOne;
//     let resTwo;
//     for (let i = 1; i < fact.num + fact.denom; ++i) {
//         if (fact.num % i == 0 && fact.denom % i == 0) {
//             resOne = fact.num / i;
//             resTwo = fact.denom / i;
//         } else if (fact.num == fact.denom) {
//             resOne = 1;
//             resTwo = 1;
//         }
//     }
//     return {
//         num: resOne,
//         denom: resTwo
//     }
// };
//     let fractOne = { num: 3, denom: 6 };
//     let fractTwo = { num: 2, denom: 5 };
//     console.log(addition(fractOne, fractTwo));
//     console.log(subtraction(fractOne, fractTwo));
//     console.log(multiplication(fractOne, fractTwo));
//     console.log(division(fractOne, fractTwo));

//Задание 3
//Создать объект, описывающий время (часы, минуты, секун-
//ды), и следующие функции для работы с этим объектом.
//1. Функция вывода времени на экран.
//. Функция изменения времени на переданное количество
//секунд.
//3. Функция изменения времени на переданное количество
//минут.
//4. Функция изменения времени на переданное количество
//часов.

// const time = {
//     init: function(hours, minutes, seconds) {
//         this.hours = hours;
//         this.minutes = minutes;
//         this.seconds = seconds;
//     },    
//     showTime: function() {
//         return `${this.hours}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}`;
//     },
//      addSeconds: function(seconds) {
//             this.seconds += seconds;
//          if (this.seconds >= 60) {
//             this.seconds -= 60;
//             this.minutes++;
//         }
//         if (this.minutes >= 60) {
//             this.minutes -= 60;
//             this.hours++;
//         }
//         if (this.hours >= 24) {
//             this.hours = 0;
//         }
//     },
//     addMinutes: function(minutes) {
//         this.minutes += minutes;
//         if (this.minutes >= 60) {
//             this.minutes -= 60;
//             this.hours++;
//         }
//         if (this.hours >= 24) {
//             this.hours = 0;
//         }
//     },
//     addHours: function(hours) {
//             this.hours += hours;
//         if (this.hours >= 24) {
//             this.hours = 0;
//             this.minutes = 0;
//             this.seconds = 0;
//         }
//     }
// };

// time.init(12, 0, 0);
// console.log(time.showTime());
// time.addSeconds(360);
// console.log(time.showTime());
// time.addMinutes(15);
// console.log(time.showTime());
// time.addHours(2);
// console.log(time.showTime());
function invert[x] {
  if(x>0) return -x ;
  if (x<=0) return x;
  
}
console.log(invert[1, 2, 3, 4, 5]);
console.log(invert(1, -2, 3, -4, 5));
console.log(invert(0));