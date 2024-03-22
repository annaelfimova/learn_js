//365
// let elem = document.querySelector('#elem')
// let value = elem.getAttribute('value');

//2
// let elem = document.querySelector('#elem')
// let value = elem.getAttribute('class');

//366
// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'text');

//2
// let elem = document.querySelector('#elem');
// elem.setAttribute('class', 'valid')

//367
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value')

// 368
// let elem = document.querySelector('#elem');
// elem.hasAttribute('value')

//369
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
//     elem.textContent = elem.textContent + elem.dataset.text;
// })

//2
// let elem = document.querySelectorAll('div');
// for (let elems of elem) {
//     elems.addEventListener('click', function(){
//         elems.textContent = elems.textContent + elems.dataset.num;
//     })
// }

//3
// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');

// let res = 0;
// button.addEventListener('click', function () {
//     res ++; 
// })
// button1.addEventListener('click', function () {
//     button1.value = res;
// })

//4
// let elem = document.querySelector('#elem');
// let length = +elem.dataset.length;
// elem.addEventListener('blur', function () {
//     if (elem.value.length > length) {
//         elem.value = 'false';
//     } else {
//         elem.value; 
//     }
// })

//5
// let elem = document.querySelector('#elem');
// let min = +elem.dataset.min;
// let max = +elem.dataset.max;

// elem.addEventListener('blur', function () {
//     if (elem.value.length < min || elem.value.length > max) {
//         elem.value = 'false';
//     } else {
//         elem.value; 
//     }
// })

//370
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function (){
//     elem.textContent = elem.textContent + +elem.dataset.productPrice * +elem.dataset.productAmount;
// })

//371
// let elem = document.querySelectorAll('p');
// elem.forEach (function (el, ind) {
//     el.setAttribute('data-num', ind + 1); 
// })

//372
// let elem = document.querySelector('#elem');
// let length = elem.classList.length;
// console.log(length);

//2
// let elem = document.querySelector('#elem');
// let classNames = elem.classList;
// for (let className of classNames) {
//     console.log(className);
// }

//373
// let elem = document.querySelector('#elem');
// elem.classList.add('xxx');

//374
// let elem = document.querySelector('#elem');
// elem.classList.remove('www');
// elem.classList.remove('zzz');

//375
// let elem = document.querySelector('#elem');
// let contains = elem.classList.contains('ggg');
// console.log(contains);

//376
// let elem = document.querySelector('#elem');
// elem.classList.toggle('www');

//377
// let div = document.querySelector('div');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     div.style.width = '300px';
//     div.style.height = '100px';
//     div.style.border = 'solid 1px red'
// })

//378
// let div = document.querySelector('div');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     div.style.fontSize = '20px';
//     div.style.borderTop = 'solid 5px green';
//     div.style.backgroundColor = 'gray'
// })

//379
// let elem = document.querySelector('ul');
// let li = document.querySelectorAll('li');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
//     li.forEach(function (li) {
//         li.style.float = 'left'
//     })
// })

//380
// let p = document.querySelector('#p');
// let b1 = document.querySelector('#b1');
// let b2 = document.querySelector('#b2');
// let b3 = document.querySelector('#b3');

// b1.addEventListener('click', function (){
//     p.classList.add('line');
// })
// b2.addEventListener('click', function (){
//     p.classList.add('bold');
// })
// b3.addEventListener('click', function (){
//     p.classList.add('colored');
// })

//381
// let p = document.querySelector('p');
// let b1 = document.querySelector('#b1');
// let b2 = document.querySelector('#b2');
// let b3 = document.querySelector('#b3');

// b1.addEventListener('click', function (){
//     p.classList.toggle('line');
// })
// b2.addEventListener('click', function (){
//     p.classList.toggle('bold');
// })
// b3.addEventListener('click', function (){
//     p.classList.toggle('colored');
// })

// 383
// let elem = document.querySelector('#elem');
// let text = elem.firstElementChild.style.color = 'red';

//2
// let elem = document.querySelector('#elem');
// let text = elem.lastElementChild.style.color = 'red';

// 3
// let ele = document.querySelector('#elem');
// let elem = ele.children;
// for (let el of elem) {
//     el.textContent = el.textContent + '!';
// }

//384
// let elem = document.querySelector('#elem');
// let per = elem.parentElement.style.border = 'solid 3px red';

//385
// let elem = document.querySelector('#elem');
// let parent = elem.closest('div');

//2
// let elem = document.querySelector('#elem');
// let parent = elem.closest('.www');

//386
// let elem = document.querySelector('#elem');
// let sos = elem.previousElementSibling.textContent;
// if (sos) {
//     sos1.textContent += "!";
// }

// 2
// let elem = document.querySelector('#elem');
// let sos = elem.nextElementSibling.textContent;
// if (sos) {
//     sos.textContent += "!";
// }

//3
// let elem = document.querySelector('#elem');
// let sos = elem.nextElementSibling;
// let sos1 = sos.nextElementSibling;
// if (sos1) {
//     sos1.textContent += "!";
// }

//4
// let elem = document.querySelector('#elem');
// let up = elem.previousElementSibling;
// let next = elem.nextElementSibling;
// if (up) {
//     let a = up.textContent;
//     up.textContent = next.textContent;
//     next.textContent = a;
// }

//387
// let elem = document.getElementById('elem');
// elem.textContent = 'fjvnjkvf';

//388
// let text = document.getElementsByTagName('li');
// for (let el of text) {
//     el.style.color = 'red';
// }

//389
// let elem = document.getElementsByClassName('www');
// for (let el of elem) {
//     el.style.color = 'red';
// }

//390
// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelectorAll('.www');
// let elems2 = parent.querySelectorAll('.ggg');

//391
// let elem = document.querySelector('#elem');
// console.log(elem.lastChild);        
// console.log(elem.lastElementChild); 

//2
// let elem = document.querySelector('#elem');
// console.log(elem.nextSibling);        
// console.log(elem.nextElementSibling); 

//3
// let elem = document.querySelector('#elem');
// console.log(elem.previousSibling);        
// console.log(elem.previousElementSibling); 

//392
// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
// 	console.log(node);
// }

//393
// let elem = document.querySelector('#elem');
// let nodes = elem.childNodes;

// for (let node of nodes) {
// 	console.log(node.nodeName);
// }

//394
// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
//     if ( node.nodeType == 1 || node.nodeType == 3){
//         console.log(node.nodeName);
//     }
// }

//395
// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
//     console.log(node.textContent);
// }

//2
// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
//     if ( node.nodeType == 8 || node.nodeType == 3){
//         console.log(node.textContent);
//     }
// }

//3
// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
//     if ( node.nodeType == 1 || node.nodeType == 3){
//         console.log(node.textContent);
//     }
// }

//4
// let elem = document.querySelector('#elem');
// for (let node of elem.childNodes) {
//     node.textContent += node.nodeType;
// }

//396
// let text = document.querySelector('textarea');
// let p = document.querySelector('p');
// text.addEventListener('blur', function(){
//     p.textContent = text.value;
// })

//397
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function(){
//     elem.disabled = true;
// })

//2
// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#button1');
// let btn2 = document.querySelector('#button2');
// btn1.addEventListener('click', function(){
//     elem.disabled = true;
// })
// btn2.addEventListener('click', function(){
//     elem.disabled = false;
// })

//3
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function(){
//     if(elem.disabled){
//         console.log('block');
//     } else {
//         console.log('open');
//     }
// })

//398
// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#button1');
// let btn2 = document.querySelector('#button2');
// btn1.addEventListener('click', function(){
//     elem.checked = true;
// })
// btn2.addEventListener('click', function(){
//     elem.checked = false;
// })

//2
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function(){
//     if(elem.checked){
//         p.textContent = 'привет';
//     } else {
//         p.textContent = 'пока';
//     }
// })

//399
// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	if (elem.checked) {
// 		elem.checked = false;
// 	} else {
// 		elem.checked = true;
// 	}
// });

//400
// let radio = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');
// button.addEventListener('click', function(){
//     for(let radios of radio) {
//         if(radios.checked) {
//             p.textContent = radios.value;
//         }
//     }
// })

//401
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('change', function(){
//     p.textContent = elem.value;
// })

//2
// let elem = document.querySelector('#elem');
// elem.addEventListener('change', function(){
//     if(elem.checked){
//         console.log('checked');
//     } else {
//         console.log('no');
//     }
// })

//4
// let elem = document.querySelector('#elem');
// elem.addEventListener('change', function(){
//     let length = elem.value.length;
//     if (length<5){
//         elem.style.border = 'solid 3px green';
//     } else {
//         elem.style.border = 'solid 3px red';
//     }
// })

//402
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('input', function(){
//     let length = elem.value.length;
//     if (length>5){
//         p.textContent = 'input > 5';
//     } 
// })

//2
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('input', function(){

//     let length = 5 - elem.value.length;
//     p.textContent = 'осталось ' + length + ' символа';
//     if (length<0){
//         let sum = elem.value.length - 5;
//         p.textContent = 'привышение допустимых символов на ' + sum;
//     }
// })

//403
// let elem = document.querySelector('#elem');
// let elem2 = document.querySelector('#elem2');
// elem.addEventListener('input', function(){
//     if (elem.value.length == 2) {
//         elem2.focus();
//     } 
// })
// elem2.addEventListener('input', function(){
//     if (elem2.value.length == 2) {
//         elem2.blur();
//     }
// })

//404
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');

// textarea.addEventListener('blur', function() {
// 	div.textContent = textarea.value;
// });

//2
// let checkbox = document.querySelector('input');
// let button = document.querySelector('button');
// let div = document.querySelector('div');

// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		div.textContent = '111';
// 	} else {
// 		div.textContent = '222';
// 	}
// });

//3
// let checkbox = document.querySelector('input[type="checkbox"]');
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// });

// 405
// let select = document.querySelector('select');
// let btn = document.querySelector('input');
// let p = document.querySelector('p');
// btn.addEventListener('click', function(){
// 	p.textContent = select.value;
// });

//2
// let select = document.querySelector('select');
// let p = document.querySelector('p');
// select.addEventListener('change', function(){
//     let op = +select.value;
//     if (op % 4 == 0 || op % 400 == 0){
//         p.textContent = 'високосный';
//     } else {
//         p.textContent = 'не високосный';
//     }
    
// });

//406
// let elem = document.querySelector('#select');
// elem.addEventListener('change', function(){
//     if (elem.value >5) {
//         console.log('выходной');   
//     } else {
//         console.log('рабочий');
//     }
// })

//407
// let m = new Date().getMonth();
// let elem = document.querySelector('#select');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     select.value = m + 1;
// })

//408
// let elem = document.querySelector('#select');
// let inp = document.querySelector('#btn');
// inp.addEventListener('blur', function(){
//     elem.selectedIndex = inp.value - 1;
// })

//2
// let m = new Date().getDay();
// let elem = document.querySelector('#select');
// let btn = document.querySelector('#btn');
// select.value = m;

//410 
// let select = document.querySelector('#select');
// for (let option of select) {
// 	option.textContent = option.textContent + ' ' + option.value;
// }

//411
// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
//     for (let option of select) {
//         if (option.selected) {
//             option.textContent += '!';
//         } else {
//             option.textContent += '?';
//         }
//     }
// })

//412
// let select = document.querySelector('#select');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     let options = select.options;
//     options[options.length - 1].selected = true;
    
// })

//413
// let select = document.querySelector('#select');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     console.log(select[select.selectedIndex].innerHTML);
// })

//2
// let select = document.querySelector('#select');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     select[select.selectedIndex].innerHTML += '!';
// })

//414
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	console.log(event); 
// });

//415
// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

//416
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
// 	if (event.type == 'click'){
//         elem.style.color = 'green';
//     } 

//     else {
//         elem.style.color = 'red';
//     } 
// }

//417
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event){
//     if (event.target.tagName == 'LI') {
//         event.target.textContent += '!'; 
//     } else {
//         console.log('gkjfh');
//     }
// })

//418
//1, 2
// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
// 	console.log(event.key);
//     console.log(event.code);
// });

//5
// let elem = document.querySelector('input');
// let p = document.querySelector('p');
// elem.addEventListener('keypress', function(event) {
//     if (event.code == 'Enter'){
//         p.textContent = this.value;
//         this.value = '';
//     }
// });

//419
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event){
//     if (event.altKey){
//         this.style.color = 'red';
//     }

// })

//2
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event){
//     if(event.ctrlKey){
//         event.target.textContent += '1';
//     }
//     if(event.shiftKey){
//         event.target.textContent += '2';
//     }
// })

//420
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
//     event.preventDefault();
//     event.target.textContent += elem.href;
// });

//2
// let elem = document.querySelector('#elem');
// let a = document.querySelector('#a');
// let b = document.querySelector('#b');
// let p = document.querySelector('p')
// elem.addEventListener('click', function(event) {
//     event.preventDefault();
//     p.textContent = +a.value + +b.value;
// });

//421
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', function() {
// 	alert('1');
// });
// elem2.addEventListener('click', function() {
// 	alert('2');
// });
// elem3.addEventListener('click', function() {
// 	alert('3');
// });

//422
// let div = document.querySelector('div');
// div.addEventListener('click', function(event){
//     console.log(event.target);
// })

//2
// let div = document.querySelector('div');
// div.addEventListener('click', function(event){
//     if (event.target.tagName == 'LI'){
//         event.target.textContent += '!';
//     }
//     if (event.target.tagName == 'UL'){
//         console.log('клик по ul');
//     }
    
// })

//426
// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
// button.addEventListener('click', function(event) {
// 	block.classList.add('active'); 
//     event.stopPropagation();
// });
// parent.addEventListener('click', function(event) {
// 	block.classList.remove('active');
//     event.stopPropagation();
// });

//429
// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// list.addEventListener('click', function(event) {
// 	event.target.textContent = event.target.textContent + '!';
// });
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
// 	list.appendChild(item);
// });

//430
// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
	
// 	if (li) {
// 		li.textContent = li.textContent + '!';
// 	}
// });

//435
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
//     let self = this;
// 	alert( square() );
// 	function square() {
// 		return self.value * self.value;
// 	}
// }

//436
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	alert( square(this) );
// 	function square(param) {
// 		return param.value * param.value;
// 	}
// }

//437
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	let square = () => {
// 		return this.value * this.value;
// 	}
//     alert( square() );
// }

//438
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// function func() {
// 	console.log(this.value);
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

//439, 440
// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }

// func.call(elem, 'Smit', 'John'); 
// func.apply(elem, ['Smit', 'John']); 

//441
// let elem = document.getElementById('elem');
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func = func.bind(elem);
// func('John', 'Smit'); 
// func('Eric', 'Luis'); 

//442
// setInterval(function() {
// 	console.log('!');
// }, 3000);

//443
// let i = 100;
// setInterval(() => console.log(--i), 1000);

//444
// let i = 10;
// let timerId = setInterval(function(){
//     console.log(--i);
//     if (i==0){
//         clearInterval(timerId);
//     }
// }, 1000)

//445
// let start = document.querySelector('#start');
// start.addEventListener('click', function() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);
// });

//446
// let start = document.querySelector('#start');
// start.addEventListener('click', function func() {
// 	let i = 100;
// 	setInterval(function () {
// 		console.log(--i);
// 	}, 1000);
//     this.removeEventListener('click', func); // отвязываем обработчик

// });

//447
// let timerId;
// let i = 100;
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop')
// start.addEventListener('click', function func() {
// 	timerId = setInterval(function () {
// 		console.log(--i);
//         if (i == 0){
//             clearInterval(timerId);
//         }
// 	}, 1000);

// });

// stop.addEventListener('click', function (){
//     clearInterval(timerId);
// })

//2, 3, 4, 5
// let timerId;
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// 6
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId; 
// start.addEventListener('click', function func() {
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
//     this.removeEventListener('click', func);
// });

// stop.addEventListener('click', function fun() {
// 	clearInterval(timerId);
//     this.addEventListener('click', fun);
// });

//448
//2
// let elem = document.querySelector('#elem');
// setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// }, 1000);

//3
// let elem = document.querySelector('#elem');
// let timer = setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
//     if (elem.value == 0){
//         clearInterval(timer);
//     }
// }, 1000);

//449
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
//     let self = this;
// 	setInterval(function() {
// 		self.value = Number(elem.value) + 1;
// 	}, 1000);
// });

//450
// let elem = document.querySelector('#btn');
// let p = document.querySelector('p');
// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		p.textContent = Number(p.textContent) + 1;
// 	}, 1000);
// });

//2
// let elem = document.querySelector('#btn');
// let p = document.querySelector('p');
// let timer;
// elem.addEventListener('click', function() {
// 	timer = setInterval(function() {
// 		p.textContent = Number(p.textContent) - 1;
//         if (p.textContent == 0){
//             clearInterval(timer);
//         }
// 	}, 1000);
// });

//3
// let elem = document.querySelector('#elem');
// let timer =	setInterval(function() {
// 	elem.value = Number(elem.value) ** 2;        
// }, 1000);

//4
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// let timer;
// elem.addEventListener('blur', function(){
//     p.textContent = Number(elem.value); 
//     timer = setInterval(function() {
//         p.textContent = p.textContent - 1;
//         if (p.textContent == 0){
//             clearInterval(timer);
//         }   
//     }, 1000);
// })

//5
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// let btn = document.querySelector('#btn');
// let timer;
// btn.addEventListener('click', function(){
//     p.textContent = Number(elem.value); 
//     timer = setInterval(function() {
//         p.textContent = p.textContent - 1;
//         if (p.textContent == 0){
//             clearInterval(timer);
//         }   
//     }, 1000);
// })

//6
// let i = 1;
// let p = document.querySelector('p');
// let btn = document.querySelector('#btn');
// let btn2 = document.querySelector('#btn2');
// let timer;
// btn.addEventListener('click', function(){
//     timer = setInterval(function() {
//         p.textContent = i++;
//     }, 1000);
// })
// btn2.addEventListener('click', function(){
//     clearInterval(timer);
// })

//7
// let p = document.querySelector('p');
// let timer;
// let isRed = true;
// setInterval(function() {
//     if (isRed){
//         p.style.color = 'green';
//     } else {
//         p.style.color = 'red';
//     }
//     isRed = !isRed;
// }, 1000);

//8
// let p = document.querySelector('p');
// setInterval(function() {
//     let now = new Date();
//     let hours = now.getHours();
//     let min = now.getMinutes();
//     let sec = now.getSeconds();
//     p.textContent = hours + ':' + min + ':' + sec ;

// }, 1000);

//451
// let elem = document.querySelector('p');
// 	setTimeout(function() {
//     elem.textContent = 'jgjgjg'
// }, 10000);

//452
// let i = -1;
// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);
// 		timer(); 
// 	}, 1000);
// }
// timer();

//453
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// li.textContent = 'item';
// elem.appendChild(li);

//2
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function(){
//     li.textContent = 'item';
//     elem.appendChild(li);
// })

//454
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     li.textContent = 'item';
//     elem.appendChild(li);
// })

// li.addEventListener('click', function(){
//     li.textContent += '!';
// })

//455
// let parent = document.querySelector('#parent');

// for (let i = 1; i <= 10; i++) {
// 	let li = document.createElement('li');
// 	li.textContent = i;
	
// 	parent.appendChild(li);
// }

//456
// let parent = document.querySelector('#parent');
// let p = document.querySelector('p');
// for (let i = 1; i <= 5; i++) {
// 	let inp = document.createElement('input');
// 	inp.addEventListener('blur', function() {
// 		p.textContent += this.value; 
// 	});	
// 	parent.appendChild(inp);
// }

//457
// let elems = document.querySelectorAll('li');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		elem.remove();
// 	});
// }

//458
// let parent = document.querySelector('#elem');

// let start = document.createElement('li');
// start.textContent = 'start';

// let finish = document.createElement('li');
// finish.textContent = 'finish';

// parent.prepend(start);
// parent.append(finish);

//459
// let elem = document.querySelector('#elem');
// let parent = document.querySelector('#parent');
// let li = document.createElement('li');
// li.textContent = 'new';
// li.addEventListener('click', function(){
//     li.textContent += '!';
// })
// parent.insertBefore(li, elem)

//460
// let p = document.createElement('p');
// p.textContent = '!!!';

// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeBegin', p)
// elem.insertAdjacentElement('afterEnd', p)
// elem.insertAdjacentElement('afterBegin', p)
// elem.insertAdjacentElement('beforeEnd', p)

//461
// let elem = document.querySelector('#elem');
// elem.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');

//462
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//     let clon = elem.cloneNode(true);
//     elem.appendChild(clon);
// })

//463
// let elem = document.querySelector('#elem');
// console.log(elem.matches('div.www'));

//2
// let elem = document.querySelector('#elem');
// console.log(elem.matches('p'));

//3
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let contains = elem1.contains(elem2);
// console.log(contains);
