
/////////////////// 15 /////////////////////// 
// let field   = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];
// field.addEventListener('keydown', function(event){
//     if (event.key == 'Enter'){
//         if (cities.length > 0) {
//             let lastCity = cities[cities.length - 1];
//             if (field.value[0].toLowerCase() !== lastCity[lastCity.length - 1].toLowerCase()) {
//                 message.textContent = 'город должен начинаться на последнюю букву предыдущего '  + lastCity;
//                 return;
//             }
//             if (cities.includes(field.value.toLowerCase())) {
//                 message.innerHTML = 'этот город уже был' + '<br>' + 'предыдущий город: ' + lastCity;
//                 return;
//             }
//         }
//         cities.push(field.value.toLowerCase());//
//         message.textContent = 'предыдущий город: ' + field.value;
//         field.value = '';
//     }
// })

/////////////////// 18 ///////////////////////
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');

// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
		
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
//         task.addEventListener('dblclick', function() {
//             let text = this.textContent;
//             this.textContent = '';
                
//             let edit = document.createElement('input');
//             edit.value = text;
//             this.appendChild(edit);
                        
//             let self = this;
//             edit.addEventListener('keypress', function(event) {
//                 if (event.key == 'Enter') {
//                     self.textContent = this.value;
//                 }
//             });
//         });
// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.classList.add('remove');
// 		remove.textContent = 'удалить';
//         remove.addEventListener('click', function() {
//             li.remove();
//         });
// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.classList.add('mark');
// 		mark.textContent = 'сделано';
//         mark.addEventListener('click', function() {
//             li.classList.toggle('done');
//         });
// 		li.appendChild(mark);
		
// 		list.appendChild(li);
		
// 		this.value = '';
// 	}
// });

/////////////////// 24 ///////////////////////
// let name   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');

// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
// 	allowEdit(createCell(tr, name.value, 'name'));
//     allowEdit(createCell(tr, price.value, 'price'));
//     allowEdit(createCell(tr, amount.value, 'amount'));
// 	createCell(tr, price.value * amount.value, 'cost');
//     createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
//         tr.remove();
//         recountTotal();
//     });
// 	table.appendChild(tr);
// 	recountTotal(); 
// });


// function createCell(tr, value, name) {

// 	td = document.createElement('td');
// 	td.textContent = value;
// 	td.classList.add(name);
// 	tr.appendChild(td);
//     return td;
// }


// function recountTotal() {
// 	let costs = table.querySelectorAll('.cost');
	
// 	if (costs) {
//         let sum = 0;
//         for (let cost of costs) {
//             sum += +cost.textContent;
//         }
        
//         total.textContent = sum;
// 	}
// }

// function allowEdit(td) {
//     td.addEventListener('dblclick', function() {
//         let text = td.textContent
//         td.textContent = '';
        
//         let input = document.createElement('input');
//         input.value = text;
//         input.focus();
//         td.appendChild(input);
        
//         input.addEventListener('keydown', function(event) {
//             if (event.key == 'Enter') {
//                 td.textContent = this.value;
                
//                 if (td.classList.contains('price') || td.classList.contains('amount')) {
//                     let tr = td.parentElement;
//                     let price = tr.querySelector('.price');
//                     let amount = tr.querySelector('.amount');
//                     let cost = tr.querySelector('.cost');
                    
//                     cost.textContent = price.textContent * amount.textContent;
//                     recountTotal();
//                 }
//             }
//         });
//     });
// }