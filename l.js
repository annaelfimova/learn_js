// let p = document.querySelectorAll('p');
// let span = document.querySelector('span');
// let div = document.querySelector('d1');
// for(let elem of p) {
//     elem.addEventListener('click', ()=> {
//         elem.style.color='green';
//     })

// }
// let button = document.querySelector('#button');
// console.log(button);

// let elem1 = document.querySelector('#elem1');
// console.log(elem1);
// let elem2 = document.querySelector('#elem2');
// console.log(elem2);
// let elem3 = document.querySelector('#elem3');
// console.log(elem3);
// let el = document.querySelector('#block p');
// console.log(el);
// let el1 = document.querySelector('.block p');
// console.log(el1);
// let t = document.querySelector('.www');
// console.log(t);

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function() {
// 	console.log('1');
// });

// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', function() {
// 	console.log('2');
// });

// let button3 = document.querySelector('#button3');
// button3.addEventListener('click', function() {
// 	console.log('3');
// });


// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', func1);

// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', func2);
// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// // }
// function func() {
// 	console.log('message');
// }

// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('click', func);

// let elem2 = document.querySelector('#elem2');
// elem2.addEventListener('click', func);
// let elem3 = document.querySelector('#elem3');
// elem3.addEventListener('click', func);
// let elem4 = document.querySelector('#elem4');
// elem4.addEventListener('click', func);
// let elem5 = document.querySelector('#elem5');
// elem5.addEventListener('click', func);

// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);

// let button = document.querySelector('#button');
// button.addEventListener('dblclick', function() {
// 	console.log('1');
// });

// let button = document.querySelector('#button');
// button.addEventListener('mouseover', function() {
// 	console.log('1');
// });

// let button = document.querySelector('#button');
// button.addEventListener('mouseout', function() {
// 	console.log('1');
// });

// let button = document.querySelector('#button');
// button.addEventListener('mouseover', function() {
// 	console.log('1');
// });
// button.addEventListener('mouseout', function() {
// 	console.log('2');
// });

// button.addEventListener('click', function() {
//     console.log(elem.textContent);
// });

// button.addEventListener('click', function() {
//     elem.textContent = '!!!';
// });

// button.addEventListener('click', function() {
//     let a = Number(elem1.textContent);
//     let b = Number(elem2.textContent);
//     console.log(a + b);
// });

//346.4
// let button = document.querySelector('#button');
// let d = document.querySelector('#d');
// button.addEventListener('click', function() {
//     let a = Number(elem1.textContent);
//     let b = Number(elem2.textContent);
//     let c = Number(elem3.textContent);
//     d.textContent = (a + b + c);
// });

// let button = document.querySelector('#button');

// let p = document.querySelector('#elem');

// button.addEventListener('click', function() {
//     let a = Number(elem.textContent);
//     elem.textContent = (a + 1);
// });

// let button = document.querySelector('#button');

// let p = document.querySelector('#elem');

// button.addEventListener('click', function() {
//     let a = elem.textContent;
//     elem.textContent = (a + "!");
// });

// let button = document.querySelector('#button');
// let p = document.querySelector('#elem');
// button.addEventListener('click', function() {
//     console.log(p.innerHTML);
// });

// let button = document.querySelector('#button');
// let p = document.querySelector('#elem');
// button.addEventListener('click', function() {
//     p.innerHTML = "<b>ff</b>";
// });

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     console.log(elem.type);
// });

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     elem.type = 'submit';
// });

//348.3
// let link = document.querySelector('a');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');

// button.addEventListener('click', function() {
//     p.innerHTML = link.href;
// });

//348.4
// let link = document.querySelector('a');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');

// button.addEventListener('click', function() {
//     link.textContent +=  '(' + link.href + ')';
// });

//348.5
// let link = document.querySelector('img');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');

// button.addEventListener('click', function() {
//     p.innerHTML = link.src;
// });

//348.6
// let link = document.querySelector('img');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');

// button.addEventListener('click', function() {
//     link.width = 300;
// });

//348.7
// let link = document.querySelector('img');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');

// button.addEventListener('click', function() {
//     link.width = +link.width * 2;
// });

//348.8
// let link = document.querySelector('img');
// let link2 = document.querySelector('img');

// let button = document.querySelector('#button1');
// let button2 = document.querySelector('#button');

// button.addEventListener('click', function() {
//     link2.src = "Без имени-5.png"; 
// });
// button2.addEventListener('click', function() {
//     link.src = "Frame 1.jpg"; 
// });

//349
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     elem.value = 'new text';
// });

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let p = document.querySelector('p')
// button.addEventListener('click', function() {
//     p.innerHTML = elem.value;
// });

//3
// let elem = document.querySelector('#elem');
// let elem2 = document.querySelector('#elem2');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//    elem2.value = Number(elem.value) **2;
// });

//4
// let elem = document.querySelector('#elem');
// let elem2 = document.querySelector('#elem2');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     let a = elem.value;
//     elem.value = elem2.value; 
//     elem2.value = a; 
// });

//5
// let button = document.querySelector('#button');
// let d = document.querySelector('p');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// button.addEventListener('click', function() {
//     d.textContent = (Number(elem1.value) + Number(elem2.value) + Number(elem3.value) + Number(elem4.value) + Number(elem5.value)) / 5;
// });

//350
// let button = document.querySelector('#button');
// let d = document.querySelector('p');
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = 1;
// });
// elem.addEventListener('blur', function() {
// 	elem.value = 2;
// });

// let button = document.querySelector('#button');
// let d = document.querySelector('p');
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function() {
// 	d.textContent = Number(elem.value ) **2;
// });

//3
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = '';
// });

//351
// let button = document.querySelector('#button');
// let elem  = document.querySelector('#elem');
// button.addEventListener('click', function() {
//         elem.textContent = elem.className;
//     });

//2
// let button = document.querySelector('#button');
// let elem  = document.querySelector('#elem');
// button.addEventListener('click', function() {
//        elem.className = 'fff';
//        elem.textContent = elem.className;
//     });

//3
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function() {
//   console.log(elem.className.split(''));
// });

//352
// console.log(document.querySelector('#image').src);

//353
// let img = document.querySelector('#image');
// console.log(img.src);
// console.log(img.width);
// console.log(img.height);

//354
//1
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
//     this.value = 1;
// })
// elem.addEventListener('blur', function() {
//     this.value = 2;
// })

//2
// let button = document.querySelector('#button');
// button.addEventListener('click', function (){
//     this.value++;
// })

//355
// let p = document.querySelectorAll("p");
// for (let elem of p) {
//     elem.addEventListener('click', function() {
//         this.textContent += '!';
//     });
// }

//2
// let elem = document.querySelectorAll(".elem");
// for (let elem1 of elem) {
//     elem1.addEventListener('blur', function() {
//         this.value = this.value ** 2;
//     });
// }

//356
// let elems = document.querySelectorAll('p');
// let button = document.querySelector('#button');
// for (let elem of elems) {
//     button.addEventListener('click', function() {
//         elem.textContent = 'text';
//     });
// }

//2
// let elems = document.querySelectorAll('p');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     for (let i=0;i<elems.length; i++) {
//         elems[i].textContent = elems[i].textContent + (i+1);
//     }
// })

//3
// let elem = document.querySelectorAll('.elem');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');
// let sum = 0;

// for (let el of elem) {
//     button.addEventListener('click', function() {
//         sum += Number(el.value);
//         p.textContent = sum;
//     });
// }

//357
// function func() {
// 	this.value = Number(this.value) + 1;
// }
// let elem = document.querySelectorAll('.elem');
// for (let el of elem) {
//     el.addEventListener('blur', func);
// }

//2
// let p = document.querySelectorAll("p");
// for (let elem of p) {
//     elem.addEventListener('click', function() {
//         this.textContent = Number(this.textContent) ** 2;
//     });
// }

//358
// let divs = document.querySelectorAll('div');
// for (let div of divs) {
// 	div.addEventListener('click', function() {
//         this.textContent++;
//     });
// }

//359
// let link = document.querySelector('a');
// let button = document.querySelector('#button')
// button.addEventListener('click', func);

// function func() {
// 	link.innerHTML = link.innerHTML + '(' + link.href + ')';
// 	this.removeEventListener('click', func);
// }

//2
// let button = document.querySelector('#button')
// button.addEventListener('click', func);

// function func() {
//     if (button.value < 10) {
//         button.value = Number(button.value) + 1;
//     } else {
//         this.removeEventListener('click', func);
//     }
// }

//360
// let p = document.querySelectorAll('p');
// for (let elem of p) {
// 	elem.addEventListener('click', func);
// }
// function func() {
// 	this.textContent = this.textContent + '!';
// 	this.removeEventListener('click', func);
// }

//361
// let li = document.querySelectorAll('li');
// for (let elem of li) {
// 	elem.addEventListener('click', function(){
//         this.textContent = Number(this.textContent) + 1;
//     });
// }

//2
// let li = document.querySelectorAll('li');
// for (let elem of li) {
// 	elem.addEventListener('click', function func(){
//         this.textContent = Number(this.textContent) + 1;
//         this.removeEventListener('click', func);
//     });
// }

//3
// let li = document.querySelectorAll('li');
// for (let elem of li) {
// 	elem.addEventListener('click', function func(){
//         if (this.textContent < 10) {
//             this.textContent = Number(this.textContent) + 1;
//         } else {
//             this.removeEventListener('click', func);
//         }
//     });
// }

//362
// let sum = 0;
// let sum2 = 0;
// let elems = document.querySelectorAll('li');
// for (let elem of elems) {
//     let text = elem.textContent;
//     for (let i = 0; i < text.length; i++) {
//         sum += Number(text[i]);
//     }
//     if (sum % 9 == 6) {
//         sum2 += Number(elem.textContent);
//         console.log(elem.textContent); 
//     };
//     sum = 0;
// }
// console.log(sum2);

//363.1 
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//     elem.textContent += '!';
// };

//363.2
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = Number(this.textContent) + 1;
// 	});
// }

//363.3
// let button = document.querySelector('button');
// let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// });

//363.4
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	let sum = 0;
	
// 	for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
	
// 	console.log(sum);
// });

//363.5
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function ()  {
// 		this.textContent += '!';
// 	});
// }

//363.6
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// 	}
// });

//363.7
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let sum = 0;

// for (let elem of elems) {
// 	sum += Number(elem.textContent);
	
// 	button.addEventListener('click', function() {
// 		console.log(sum);
// 	});
// }

//363.8
// let button = document.querySelector('button');
//     let elems  = document.querySelectorAll('input');
//     let sum = 0;
// button.addEventListener('click', function() {
//         for (let elem of elems) {
//             sum += Number(elem.value);
//         }
//         console.log(sum);
// });

//363.9
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
// 	inp3.value = Number(inp1.value) + Number(inp2.value);
// });

//363.10
// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// btn.addEventListener('click', function() {
// 	res.textContent = Number(inp1.value) + Number(inp2.value);
// });

//363.11
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// button.addEventListener('click',function() {
// 	for (let input of inputs) {
// 		if (input.value === input.dataset.text) {
// 			input.classList.add('right');
// 		} else {
// 			input.classList.add('wrong');
// 		}
// 	}
// });

//363.12
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// let texts = [
// 	'text1',
// 	'text2',
// 	'text3',
// ];

// button.addEventListener('click',function() {
// 	for (let i = 0; i < inputs.length; i++) {
//         let input = inputs[i];
//         let text = texts[i];
// 		if (input.value === text) {
// 			input.classList.add('right')
// 		} else {
// 			input.classList.add('wrong')
// 		}
// 	}
// });

// 363.13
// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;

// btn.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		sum += Number(input.value);
// 	}
	
// 	console.log(sum);
// });

//363.14
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');


// btn.addEventListener('click', function() {
//     let sum  = Number(inp1.value) + Number(inp2.value);
// 	inp3.value = sum;
// });

//363.15
// let inp = document.querySelector('#inp');

// inp.addEventListener('blur', function() {
//     let number = +inp.value;
//     let digits = number.toString().split('');
// 	let sum = 0;
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	console.log(sum);
// });

