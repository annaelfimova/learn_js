
/////////////////// 30 ///////////////////////

//1
// let el1 = document.querySelector('#el1');
// el1.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         let value1 = el1.value;
//         if (value1 == el1.dataset.right) {
//             el1.classList.add('right');
//         } else {
//             el1.classList.add('wrong');
//         }
//     }
// });

// let el2 = document.querySelector('#el2');
// el2.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         let value2 = el2.value;
//         if (value2 == el2.dataset.right) {
//             el2.classList.add('right');
//         } else {
//             el2.classList.add('wrong');
//         }
//     }
// });

// let el3 = document.querySelector('#el3');
// el3.addEventListener('keyup', function(event) {
//     if (event.key === 'Enter') {
//         let value3 = el3.value;
//         if (value3 == el3.dataset.right) {
//             el3.classList.add('right');
//         } else {
//             el3.classList.add('wrong');
//         }
//     }
// });

//2
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//     let v1 = el1.value;
//     if (v1 == '1'){
//         el1.classList.add('right');
//     } else {
//         el1.classList.add('wrong');
//     }

//     let v2 = el2.value;
//     if (v2 == '2'){
//         el2.classList.add('right');
//     } else {
//         el2.classList.add('wrong');
//     }

//     let v3 = el3.value;
//     if (v3 == '3'){
//         el3.classList.add('right');
//     } else {
//         el3.classList.add('wrong');
//     }
// })

// 31

// let answers = [
// 	'1',
// 	'2',
// 	'3',
// ];

// let el1 = document.querySelector('#el1');
// let el2 = document.querySelector('#el2');
// let el3 = document.querySelector('#el3');

// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//     if (el1.value == answers[0]){
//         el1.classList.add('right');
//     } else {
//         el1.classList.add('wrong');
//     }

//     if (el2.value == answers[1]){
//         el2.classList.add('right');
//     } else {
//         el2.classList.add('wrong');
//     }

//     if (el3.value == answers[2]){
//         el3.classList.add('right');
//     } else {
//         el3.classList.add('wrong');
//     }
// })

/////////////////// 32 /////////////////////// 
// let answers = [
// 	'ответ 1',
// 	'ответ 2',
// 	'ответ 3',
// ];

// let questions = [
// 	'вопрос 1?',
// 	'вопрос 2?',
// 	'вопрос 3?'
// ];

// let div = document.querySelector('#test');

// for (let i = 0; i < questions.length; i++) {
//   let div1 = document.createElement('div');
  
//   let text = document.createElement('p');
//   text.textContent = questions[i];
//   div1.appendChild(text);
  
//   let input = document.createElement('input');
//   input.setAttribute('type', 'text');
//   input.setAttribute('data-index', i);
//   div1.appendChild(input);
  
//   div.appendChild(div1);
// }

// let btn = document.querySelector('#button');

// let inputs = document.querySelectorAll('input');
// button.addEventListener('click', () =>{
//     for (let i = 0; i < answers.length; i++) {
//         if (inputs[i].value.toLowerCase() === answers[i].toLowerCase()) {
//             inputs[i].classList.remove('wrong');
//             inputs[i].classList.add('right');
//         } else {
//             inputs[i].classList.remove('right');
//             inputs[i].classList.add('wrong');
//         }
//     }
// });


/////////////////// 33 /////////////////////// 
//1
// let questions = {
//     'Вопрос 1?': 'ответ 1',
//     'Вопрос 2?': 'ответ 2',
//     'Вопрос 3?': 'ответ 3',
// };
  
// let div = document.querySelector('#test');
  
// for (let question in questions) {
//     let div1 = document.createElement('div');
    
//     let text = document.createElement('p');
//     text.textContent = question;
//     div1.appendChild(text);
    
//     let input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('data-index', question);
//     div1.appendChild(input);
    
//     div.appendChild(div1);
// }
  
// let btn = document.querySelector('#button');
// let inputs = document.querySelectorAll('input');
// let answers = Object.values(questions);
  
// btn.addEventListener('click', () => {
//     for (let i = 0; i < answers.length; i++) {
//         if (inputs[i].value.toLowerCase() === answers[i].toLowerCase()) {
//             inputs[i].classList.remove('wrong');
//             inputs[i].classList.add('right');
//         } else {
//             inputs[i].classList.remove('right');
//             inputs[i].classList.add('wrong');
//         }
//     }
// });

//2
// let questions = [
//     {
//       text: 'вопрос 1?',
//       right: 'ответ 1',
//     },
//     {
//       text: 'вопрос 2?',
//       right: 'ответ 2',
//     },
//     {
//       text: 'вопрос 3?',
//       right: 'ответ 3',
//     },
// ];
  
// let div = document.querySelector('#test');
  
// questions.forEach((question, index) => { 
//     let div1 = document.createElement('div');
    
//     let p = document.createElement('p');
//     p.textContent = question.text; 
//     div1.appendChild(p);
    
//     let input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('data-index', index);
//     div1.appendChild(input);
    
//     div.appendChild(div1);
// });
  
// let btn = document.querySelector('#button');
// let inputs = document.querySelectorAll('input');
// let answers = questions.map(question => question.right); 
  
// btn.addEventListener('click', () => {
//     inputs.forEach((input, i) => {
//         if (input.value.toLowerCase() === answers[i].toLowerCase()) {
//             input.classList.remove('wrong');
//             input.classList.add('right');
//         } else {
//             input.classList.remove('right');
//             input.classList.add('wrong');
//         }
//     });
// });
  
/////////////////// 34 ///////////////////////
// let divs = document.querySelectorAll('#test div');
// divs.forEach(div => {
//     div.addEventListener('change', () => {
//         let radios = div.querySelectorAll('input[type=radio]');
//         radios.forEach(radio => {
//             if (radio.checked) {
//                 if (radio.hasAttribute('data-right')) {
//                     radio.parentNode.classList.add('right');
//                 } else {
//                     radio.parentNode.classList.add('wrong');
//                 }
//             } else {
//                 radio.parentNode.classList.remove('right');
//                 radio.parentNode.classList.remove('wrong');
//             }
//         });
//     });
// });

//2
// let divs = document.querySelectorAll('#test div');
// let btn = document.querySelector('#btn');
// divs.forEach(div => {
// btn.addEventListener('click', () => {
//     let radios = div.querySelectorAll('input[type=radio]');
//         radios.forEach(radio => {
//             if (radio.checked) {
//                 if (radio.hasAttribute('data-right')) {
//                     radio.parentNode.classList.add('right');
//                 } else {
//                     radio.parentNode.classList.add('wrong');
//                 }
//             } else {
//                 radio.parentNode.classList.remove('right');
//                 radio.parentNode.classList.remove('wrong');
//             }
//         });
//     });
// });

/////////////////// 35 ///////////////////////
// let answers = [0, 1, 2];

// let divs = document.querySelectorAll('#test div');
// let btn = document.querySelector('#btn');
// divs.forEach((div, index) => {
//     btn.addEventListener('click', () => {
//         let radios = div.querySelectorAll('input[type=radio]');
//         radios.forEach((radio, radioIndex) => {
//             if (radio.checked) {
//                 if (radioIndex === answers[index]) {
//                     radio.parentNode.classList.add('right');
//                 } else {
//                     radio.parentNode.classList.add('wrong');
//                 }
//             } else {
//                 radio.parentNode.classList.remove('right');
//                 radio.parentNode.classList.remove('wrong');
//             }
//         });
//     });
// });

/////////////////// 37 ///////////////////////
// let div = document.getElementById('slider');
// let texts = ['text1', 'text2', 'text3'];
// let index = 0;
// let timerId = setInterval(function(){
//     div.textContent = texts[index];
//     index = (index + 1) % texts.length;
// }, 1000);

/////////////////// 38 ///////////////////////
// let left = document.getElementById('left');
// let right = document.getElementById('right');
// let div = document.getElementById('slider');
// let texts = ['text1', 'text2', 'text3'];
// let i = 0; 

// left.addEventListener('click', function(event) {
//     event.preventDefault();
//     i = (i - 1 + texts.length) % texts.length;
//     div.textContent = texts[i];
// });
// right.addEventListener('click', function(event) {
//     event.preventDefault();
//     i = (i + 1) % texts.length;
//     div.textContent = texts[i];
// });

//2
// let left = document.getElementById('left');
// let right = document.getElementById('right');
// let div = document.getElementById('slider');
// let texts = ['text1', 'text2', 'text3'];
// let i = 0; 

// left.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (i > 0) {
//         i--;
//         div.textContent = texts[i];
//     }
// });

// right.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (i < texts.length - 1) {
//         i++;
//         div.textContent = texts[i];
//     }
// });

/////////////////// 39 ///////////////////////
// let elem = document.getElementById('slider');
// let texts = ['1.jpg', '2.jpg', '3.jpg'];
// let index = 0;

// let timerId = setInterval (function(){
//     elem.src = texts[index];
//     index = (index + 1) % texts.length;
// }, 1000)

//2
// let left = document.getElementById('left');
// let right = document.getElementById('right');
// let elem = document.getElementById('slider');
// let texts = ['1.jpg', '2.jpg', '3.jpg'];
// let index = 0;

// let timerId = setInterval (function(){
//     elem.src = texts[index];
//     index = (index + 1) % texts.length;
// }, 1000)


// left.addEventListener('click', function(event) {
//     event.preventDefault();
//     index = (index - 1 + texts.length) % texts.length;
//     elem.src = texts[index];
// });
// right.addEventListener('click', function(event) {
//     event.preventDefault();
//     index = (index + 1) % texts.length;
//     elem.src = texts[index];
// });

/////////////////// 40 ///////////////////////
// let images = document.querySelectorAll('#slider img');
// let index = 0;
// function show(index) {
//     for (let i = 0; i < images.length; i++) {
//         images[i].style.display = 'none';
//     }
//     images[index].style.display = 'block';
// }
// function next() {
//     index = (index + 1) % images.length;
//     show(index);
// }
// show(index);
// let timerId = setInterval(next, 1000);

/////////////////// 41 ///////////////////////
// let cells = document.querySelectorAll('#field td');
// function start(cells) {
// 	let i = 0;
	
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function step() {
// 			this.textContent = ['X', 'O'][i % 2];
//             this.removeEventListener('click', step);

// 			if (isVictory(cells)) {
// 				alert('Победил игрок ' + this.textContent); 
// 			} else if (i == 8) {
// 				alert('Ничья');
// 			}
// 			i++;
// 		});
// 	}
// }
// start(cells);
// function isVictory(cells) {
// 	let combs = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];

// 	for (let comb of combs) {
// 		if (
// 			cells[comb[0]].textContent == cells[comb[1]].textContent &&
// 			cells[comb[1]].textContent == cells[comb[2]].textContent &&
// 			cells[comb[0]].textContent != ''
// 		) {
// 			return true;
// 		}
// 	}
	
// 	return false;
// }

/////////////////// 47-51 /////////////////////// 
// let table = document.getElementById('field');
// let rows = 3;
// let cols = 3;
// let colors = ['red', 'green', 'blue'];
// let click = 0;
// let p = document.getElementById('p');

// for (let i = 0; i < rows; i++) {
// 	let tr = document.createElement('tr');
// 	for (let j = 0; j < cols; j++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 		td.className = randomColor();
// 		td.addEventListener('click', function () {
// 			changeColor(this);
// 			click++;
// 			p.textContent = 'Количество кликов: ' + click;
// 		})

// 	}
// 	table.appendChild(tr);
// }
// function randomColor() {
// 	return colors[Math.floor(Math.random() * colors.length)];
// }


// function changeColor(td) {
// 	let currentColor = td.className;
// 	let nextColor = getNextColor(currentColor);
// 	td.className = nextColor;
// 	checkWin();

// }

// function getNextColor(currentColor) {
// 	let currentIndex = colors.indexOf(currentColor);
// 	return colors[(currentIndex + 1) % colors.length];
// }

// function checkWin() {
// 	let cells = document.querySelectorAll('td');
// 	let firsClassName = cells[0].className;
// 	if (Array.from(cells).every(cell => cell.className === firsClassName)) {
// 		alert('Поздравляем! Вы победили!');
// 	}
// }

