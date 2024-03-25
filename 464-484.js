//464
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
// 	p.addEventListener('click', function(){
//         p.textContent += '!';
//     })
// 	parent.appendChild(p);
// }

//465 
// let elem = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let elems of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elems;
// 	li.addEventListener('click', function(){
//         console.log(li.textContent);
//     })
//     li.addEventListener('click', function(){
//         if (!li.textContent.includes('!')) {
//             li.textContent += '!';
//         }
//     })
// 	elem.appendChild(li);
// }

//466
// let table = document.querySelector('#table');
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//2, 3
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         td.textContent = 'x';
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//4
// let table = document.querySelector('#table');
// let width = document.querySelector('#width')
// let height = document.querySelector('#height');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//     let w = width.value;
//     let h = height.value;
//     for (let i = 0; i < h; i++) {
//         let tr = document.createElement('tr');
//         for (let i = 0; i < w; i++) {
//             let td = document.createElement('td');
//             td.textContent = 'x';
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// })

//467
// let table = document.querySelector('#table');
// let k = 1; 
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = k; 
// 		k++;	
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//2
// let table = document.querySelector('#table');
// let k = 2; 
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');	
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = k; 
// 		k += 2;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

//468
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//2
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem ** 2;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

//469
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');

// for (let em of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = em.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = em.age;
// 	tr.appendChild(td2);
//     td2.addEventListener('click', function(){
//         td2.textContent = +td2.textContent + 1;
//     })
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = em.salary;
// 	tr.appendChild(td3);
//     td3.addEventListener('click', function(){
//         td3.textContent = Math.round(+td3.textContent * 1.1);
//     })

// 	table.appendChild(tr);
// }

//470
// let table = document.querySelector('#table');
// let btn = document.querySelector('#btn');
// let tr = document.createElement('tr');

// btn.addEventListener('click', function(){

//     for (let i = 1; i <= 3; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
    
// })
// table.appendChild(tr);

//2
// let table = document.querySelector('#table');
// let btn = document.querySelector('#btn');
// let tr = document.createElement('tr');
// let trs = document.querySelectorAll('#table tr');

// btn.addEventListener('click', function(){

//     for (let i = 1; i <= 3; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     for (let tr of trs) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
    
// })
// table.appendChild(tr);

//471
// let table = document.querySelector('#table');
// let tds = document.querySelectorAll('#table td');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     for (let td of tds) {
//         td.textContent = +td.textContent * 2 ;
//     }
// })

// 472
// let parent = document.querySelector('#parent');
// let btn = document.querySelector('#button');
// btn.addEventListener('click', function(){
//     let li = document.createElement('li');
//     li.textContent = 'bghjb';
//     parent.appendChild(li);
    
// })
// parent.addEventListener('click', function(event){
//     if(event.target.tagName == 'LI'){
//         event.target.remove();
//     }
// })

//473
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');

// remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault(); 
// });

//474
// let elems = document.querySelectorAll('#parent li');

// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }

//2
// let tr = document.createElement('tr');
// let elems = document.querySelectorAll('#table tr');

// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }

//475
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.value = elem.textContent; 
// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });

//2
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove(); 
// 	});
	
// 	elem.parentElement.appendChild(input);
// });

//476
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	elem.textContent = '';
// 	elem.appendChild(input);
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func); 
// 	});
	
// 	elem.removeEventListener('click', func);
// });

//477
// let elems = document.querySelectorAll('#parent li');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }

// 2
// let elems = document.querySelectorAll('#table tr td');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }

// 478
// let elems = document.querySelectorAll('#parent span');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
// 		elem.textContent = '';
// 		elem.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
// 		elem.removeEventListener('click', func);
// 	});
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'удалить';
// 	elem.appendChild(remove);
//     remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }

//2
// let elems = document.querySelectorAll('#parent p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
//         let span = document.createElement('span');
//         span.textContent = elem.textContent;
//         elem.textContent = '';
//         elem.appendChild(span);

// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
// 		elem.textContent = '';
// 		elem.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
// 		elem.removeEventListener('click', func);
// 	});
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'удалить';
// 	elem.appendChild(remove);
//     remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});

// }

//479
//1, 2
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//     let span = document.createElement('span');
//     elem.appendChild(span);
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'зачеркнуть';
//     remove.addEventListener('click', function(event) {
//         elem.classList.toggle('an');
//         remove.remove();
//         event.preventDefault();
//     });
//     elem.appendChild(remove);
// }

//3, 4
// let tr = document.createElement('tr');
// let elems = document.querySelectorAll('#table tr');

// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.classList.toggle('r');
// 		event.preventDefault();
// 	});
// }

// 480
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function() {
// 	elem.classList.toggle('hidden');
// });

//481
// let buttons = document.querySelectorAll('button');

// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }

//2
// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');

// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }

//3
// let buttons = document.querySelectorAll('button');

// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }

//482
// let li = document.querySelectorAll('#parent li');

// for (let l of li) {
// 	l.addEventListener('click', function() {
// 		this.classList.toggle('active');
// 	});
// }

//483
// let tds = document.querySelectorAll('#table td');

// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}
		
// 		this.classList.toggle(color);
// 	});
// }

//484
// let arr = [1, 2, 'rdd'];
// let parent = document.querySelector('#parent');
// for (let elem of arr){
//     let li = document.createElement('li');
//     li.textContent = elem;
//     parent.appendChild(li);

//     li.addEventListener('click', function func(){
//         let input = document.createElement('input');
//         input.value = elem;
//         li.textContent = '';
//         li.appendChild(input);
//         input.addEventListener('blur', function() {
//             li.textContent = this.value;
//             li.addEventListener('click', func);
//         });
//         li.removeEventListener('click', func);   
//     })

//     let remove = document.createElement('a');
//     remove.textContent = 'удалить';
//     remove.href = '';
//     remove.addEventListener('click', function(event){
//         event.preventDefault();
//         parent.removeChild(li);
//     })
//     li.appendChild(remove);

//     let re = document.createElement('a');
//     re.href = '';
//     re.textContent = 'зачеркнуть';
//     re.addEventListener('click', function(event) {
//         li.classList.toggle('an');
//         event.preventDefault();
//     });
//     li.appendChild(re);
    
// }

//6 - 9
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.getElementById('table');

// for (let em of employees) {
// 	let tr = document.createElement('tr');
	

// 	let td1 = document.createElement('td');
// 	td1.textContent = em.name;
// 	tr.appendChild(td1);
//     td1.addEventListener('click', func);

	
// 	let td2 = document.createElement('td');
// 	td2.textContent = em.age;
// 	tr.appendChild(td2);
//     td2.addEventListener('click', func);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = em.salary;
// 	tr.appendChild(td3);
//     td3.addEventListener('click', func)
// 	table.appendChild(tr);

//     function func(){
//         let input = document.createElement('input');
//         input.value = this;
//         this.textContent = '';
//         this.appendChild(input);
//         let self = this;
//         input.addEventListener('blur', function() {
//             this.textContent = self.value;
//             this.addEventListener('click', func);
//         });
//             this.removeEventListener('click', func);   
//     }

//     let remove = document.createElement('a');
//     	remove.href = '';
//     	remove.textContent = 'удалить';
//     	table.appendChild(remove);
//         remove.addEventListener('click', function(event) {
//     		tr.remove();
//             this.remove();
//     		event.preventDefault();
//     	});
    
// }

// let name = document.getElementById('name');
// let age = document.getElementById('age');
// let salary = document.getElementById('salary');
// let add = document.getElementById('add');

// add.addEventListener('click', function() {
//     let obj = {
//         name: name.value,
//         age: age.value,
//         salary: salary.value
//     };

//     employees.push(obj);
//     let tr = document.createElement('tr');
//     for (let key in obj) {
//         let td = document.createElement('td');
//         td.textContent = obj[key];
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);

//     name.value = '';
//     age.value = '';
//     salary.value = '';

//     let remove = document.createElement('a');
//     	remove.href = '';
//     	remove.textContent = 'удалить';
//     	table.appendChild(remove);
//         remove.addEventListener('click', function(event) {
//     		tr.remove();
//             this.remove();
//     		event.preventDefault();
//     	});
// });

//10 - 13
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let parent = document.querySelector('#parent');

// employees.forEach(function(employee) {
//     let li = document.createElement('li');
//     li.textContent = employee.name + ' ' + employee.age + ' ' + employee.salary;
//     parent.appendChild(li);

//     li.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = li.textContent;
        
//         li.textContent = '';
//         li.appendChild(input);
        
//         input.addEventListener('blur', function() {
//             li.textContent = this.value;
//             li.addEventListener('click', func); 
//         });
        
//         li.removeEventListener('click', func);
//     });

//     let remove = document.createElement('a');
//         	remove.href = '';
//         	remove.textContent = 'удалить';
//         	li.appendChild(remove);
//             remove.addEventListener('click', function(event) {
//         		li.remove();
//         		event.preventDefault();
//         	});
    
// })

// let name = document.getElementById('name');
// let age = document.getElementById('age');
// let salary = document.getElementById('salary');
// let add = document.getElementById('add');
// add.addEventListener('click', function() {
//     let obj = {
//         name: name.value,
//         age: age.value,
//         salary: salary.value
//     };
//     employees.push(obj);
//     let li = document.createElement('li');
//     li.textContent = name.value + ' ' + age.value + ' ' + salary.value;
//     parent.appendChild(li); 
//     name.value = '';
//     age.value = '';
//     salary.value = '';
// })

