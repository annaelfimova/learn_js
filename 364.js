// 1
// let input = document.querySelector('#input')
// let p = document.querySelector('p')
// input.addEventListener('blur', function() {
//     p.textContent = input.value;
// })

//2
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let button = document.querySelector('#button')
// let p = document.querySelector('p')
// button.addEventListener('click', function () {
//     p.textContent= +input1.value + +input2.value
// })

// 3
// let input = document.querySelector('#input')
// let p = document.querySelector('p')
// input.addEventListener('blur', function() {
//     elems = input.value;
//     let sum = 0;
//     for(let elem of elems){
//         sum += +elem;
//     }
//     p.textContent = sum;
// })

// 4
// let input = document.querySelector("#input")
// let p = document.querySelector('p')

// input.addEventListener('blur', function () {
//     let arr = input.value.split(',')
//     let p = arr.reduce((sum, elem) => {
//         return sum += +elem
//     }, 0)
//     input.value = p/arr.length

// })

// 5
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let input3 = document.querySelector('#input3')
// let input4 = document.querySelector('#input4')
// input1.addEventListener('blur', function () {
//     let [surname, name, middlename] = input1.value.split(' ')
//     input2.value = surname;
//     input3.value = name;
//     input4.value = middlename
// })

// 6
// let input = document.querySelector("#input")
// input.addEventListener('blur', () => {
//     let text = input.value;
//     let words = text.split(' ')
//     let res = words.map(function (word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
//     input.value = res;
// });

// 7
// let p = document.querySelector('p');
// let input = document.querySelector('#input');

// input.addEventListener('blur', function () {
//     let text = input.value;
//     let words = text.split(' ')
//     p.textContent = words.length;
// });

// 8
// let input = document.querySelector("#input")
// input.addEventListener('blur', function ()  {
//     let date = input.value;
//     let date1 = date.split('.');
//     let format= date1[2] + '-' + date1[1] + '-' + date1[0];
    
//     input.value = format;
// })

// 9
// let input = document.querySelector("#input")
// let res = document.querySelector("p")
// let button = document.querySelector("#button")
// button.addEventListener('click' , function () {
//     let reverse = input.value.split('').reverse().join('')
//     if (input.value === reverse) {
//         res.textContent = 'true'
//     }
//     else {
//         res.textContent = 'false'
//     }
// })

// 10
// let input = document.querySelector("#input")
// let res = document.querySelector("p")
// input.addEventListener('blur', function () {
//     let arr = input.value.split('')
//     arr.forEach(element => {
//         if (element==='3'){
//             res.textContent = 'true' 
//         }
//         else {
//             res.textContent = 'false'
//         }
//     });
// })

// 11
// let res = document.querySelectorAll('p')
// let button = document.querySelector("#button")
// button.addEventListener('click' , function () {
//     res.forEach((elem, id) => {
//         elem.textContent += id + 1;
//     })
// })

// 12
// let link = document.querySelectorAll('a')
// let button = document.querySelector("#button")
// button.addEventListener('click', function () {
//     link.forEach(elem => 
//         elem.textContent+= '('+ elem.href +')'
//         )
// })

// 13
// let link = document.querySelectorAll('a')
// let button = document.querySelector("#button")
// button.addEventListener('click', function () {
//     link.forEach(elem => {
//         if (elem.href.startsWith('https://')) {
//             elem.textContent += '->';
//         }
//     })
// })

// 14
// let p = document.querySelectorAll('p')
// p.forEach(elem => {
//     elem.addEventListener('click', (elem) => {
//         elem.target.textContent = (+elem.target.textContent)**2
//     })      
// })

// 15
// let input = document.querySelector('#input')
// let p = document.querySelector('p')
// input.addEventListener('blur', () => {
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let [day, month, year] = input.value.split('.')
//     let date = new Date(year, month, day, 0, 0, 0)
//     p.textContent = days[date.getDay()]
// })

// 16
// let input = document.querySelector('#input')
// let minus = document.querySelector('#minus')
// let plus = document.querySelector('#plus')
// minus.addEventListener('click', function() {
//     if (+input.value !== 0) {
//         input.value = +input.value - 1
//     }
// }) 
// plus.addEventListener('click', function() {
//     input.value = +input.value + 1

// }) 

// 17
// let input = document.querySelector('#input')
// let elems = document.querySelectorAll('p')
// elems.forEach(elem => {
//     elem.addEventListener('click', function () {
//         input.value = +input.value + 1
//     })
// })

// 18
// let elems = document.querySelectorAll('div')
// elems.forEach(elem => {
//     let text = elem.textContent;
//     if (text.length > 10) {
//     text = text.slice(0, 10) + '...';
//     elem.textContent = text;
//     }
// })

//19
// let input = document.querySelector('#input')
// let button = document.querySelector('#button')
// button.addEventListener('click', function () {
//     let ren = renString (8);
//     input.value = ren;
// })
// function renString() {
//     let nab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let res = "";
//     for (let i = 0; i < 8; i++) {
//         res += nab.charAt(Math.floor(Math.random()*nab.length)) 
//     }
//     return res;
// }

// 20
// let input = document.querySelector('#input');
// let button = document.querySelector('#button');
// button.addEventListener('click', () => {
//     const text = input.value;
//     const shuffledText = shuffleString(text);
//     input.value = shuffledText;
// });

// function shuffleString(str) {
//     return str.split('').sort(() => Math.random() - 0.5).join('');
// };

// 21
// let input = document.querySelector('#input');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');
// button.addEventListener('click', function () {
//     let far = input.value;
//     let cel = ((far - 32) * 5/9).toFixed(2);
//     p.textContent = cel;
// });

// 22
// let input = document.querySelector('#input')
// let button = document.querySelector('#button')
// let result = document.querySelector('p')
// function factorial(num) {
//     if (num === 0) {
//         return 1;
//     }
//     else {
//         return num * factorial(num - 1);
//     }
// }
// button.addEventListener('click', function () {
//     result.textContent = factorial(+input.value)
// })

// 23
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let input3 = document.querySelector('#input3')
// let button = document.querySelector('#button')
// let result = document.querySelector('p')
// button.addEventListener('click', function () {
//     let a = +input1.value;
//     let b = +input2.value;
//     let c = +input3.value;
//     let d = b**2 - 4*a*c;
//     if (d >= 0) {
//         let x1 = (-b + d**0.5) / (2*a);
//         let x2 = (-b - d**0.5) / (2*a);
//         result.textContent = x1 + '    ' + x2;
//     } else {
//         return false
//     }
// })