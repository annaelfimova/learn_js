// 485
// function setText(selector, text) {
//     let elem = document.querySelector(selector); 
//     elem.textContent = text; 
// }
// setText('p', 'text1'); 

// 2
// function setAttr(selector, attName, attVal){
//     let elem = document.querySelector(selector); 
//     elem.setAttribute(attName, attVal);
// }
// setAttr('p', 'id', 'highlight');

//486
// function appendText(selector, text) { 
//     let elems = document.querySelectorAll(selector); 
//     for (let elem of elems) {
//         elem.textContent += text;
//     }
// }
// appendText('.elem1', 'nbnhjkbkbn');

//487
// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let elem of elems) {
// 		func(elem);
// 	}
// }

// let add = function (elem) {
//     elem.textContent += '!'; 
// };

// forEach('.elem', add); 

//488
// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let i = 0; i < elems.length; i++) {
// 		func(elems[i], i);
// 	}
// }

// let func = function (elems, i) {
//     elems.textContent = i + elems.textContent; 
// };

// forEach('.elem', func);

//489
// let elem1 = document.getElementById('elem1');
// function appendText(elem, text){
//     elem.textContent += text;
// }
// appendText(elem1, '!');

// 2
// let elem1 = document.querySelectorAll('.elem');
// function appendText(elem, text){
//     elem.textContent += text;
// }
// for(let el of elem1) {
//     appendText(el, '!');
// }

//3
// let inp = document.querySelector('#inp');
// function setValue(elem, text){
//     elem.value = text;
// }
// setValue(inp, 'jfffffffff');

//490
// let p = document.querySelectorAll('.elem');
// function appendText(elems, text){
//     for(let el of elems){
//         el.textContent += text;
//     }
// }
// appendText(p, 'fgnnnnnnnn');

//2
// let elem = document.querySelector('#elem');
// function appendElem(elems, text){
//     let li = document.createElement('li');
//     li.textContent = text;
//     elems.appendChild(li);
// }

// appendElem(elem, 'hhhhh');

//3
// let arr = [1, 2, 'jffj'];
// for (let el of arr){
//     appendElem(elem, el);
// }

//491
// let elem = document.querySelector('#elem');

// function createTable(rows, cols, parent) {
// 	let table = document.createElement('table');
	
// 	for (let i=0; i < rows; i++) {
//         let tr = document.createElement('tr');

// 		for (let i=0; i<cols; i++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);	
//             td.textContent = 't';
// 		}
//         table.appendChild(tr);
// 	}
	
// 	parent.appendChild(table);
// }

// createTable(2, 10, elem)

//492
// let elem = document.querySelector('#elem');
// function createTable(rows, cols) {
// 	let table = document.createElement('table');
	
// 	for (let i=0; i < rows; i++) {
//         let tr = document.createElement('tr');

// 		for (let i=0; i<cols; i++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);	
//             td.textContent = 't';
// 		}
//         table.appendChild(tr);
// 	}
//     return table;
// }

// let tab = createTable(3, 4);
// tab.style.color = 'red';

// elem.appendChild(tab);

//2
// let elem = document.querySelector('#elem');
// let tab = createTable(3, 4);
// elem.appendChild(tab);

//493
// let div = document.querySelector('#elem');
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// function createTableByArr(arr){
//     let table = document.createElement('table');
	
// 	for (let el of arr) {
//         let tr = document.createElement('tr');

// 		for (let e of el) {
//             let td = document.createElement('td');
//             td.textContent = e;
//             tr.appendChild(td);	
// 		}
//         table.appendChild(tr);
// 	}
//     return table;
// }
// let table = createTableByArr(arr);
// div.appendChild(table);

//497
;(function(button, selector1, selector2, selector3) {
	let el1 = document.querySelector(selector1);
	let el2 = document.querySelector(selector2);
    let el3 = document.querySelector(selector3);
    let btn = document.querySelector(button);
    let sum = 0;
	
	btn.addEventListener('click', function() {
        sum = +el1.value + +el2.value + +el3.value;
        console.log(sum);

	});
})('#btn', '#el1', '#el2', '#el3');

//501
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
//     window.str1 = str1;

// 	function func1() {
// 		alert('функция модуля');
// 	}
//     window.func1 = func1;
// 	function func2() {
// 		alert('функция модуля');
// 	}
//     window.func2 = func2;

// 	function func3() {
// 		alert('функция модуля');
// 	}
// })();
// func1();
// func2();
// str1;

//502
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
	
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
// 	function func4() {
// 		alert('функция модуля');
// 	}
// 	function func5() {
// 		alert('функция модуля');
// 	}
//     window.module = {func1, func2, func3, func4, func5, str1, str2};

// })();
// module.func1();

//503
// ;( function(){
//     function avg1(arr) {
//         return sum(arr, 1) / arr.length;
//     }

//     function avg2(arr) {
//         return sum(arr, 2) / arr.length;
//     }

//     function avg3(arr) {
//         return sum(arr, 3) / arr.length;
//     }

//     // вспомогательная функция
//     function sum(arr, pow) {
//         let res = 0;
        
//         for (let elem of arr) {
//             res += elem ** pow;
//         }
        
//         return res;
//     }   
//     window.math = {avg1, avg2, avg3};
// })();
