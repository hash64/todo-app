"use strict"

const addTodo = () => {
	todoText.value = document.getElementById('add-todo').value;

	let text, checkbox, br, level, wrapAll;
	wrapAll = document.createElement("id");
	wrapAll.setAttribute("id", id + '-wrapAll');
	wrapAll.setAttribute("class", "animated fadeInDown");


	checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = id;
	checkbox.checked = false;
	id++
	br = document.createElement('br');
	level = document.createElement('level');
	level.for = checkbox.id;
	text = document.createTextNode(todoText.value);
	level.appendChild(text);

	wrapAll.appendChild(checkbox);
	wrapAll.appendChild(level);
	wrapAll.appendChild(br);
	yetTodoList.appendChild(wrapAll);
	todoText.value = '';
	
}


let todoText = document.getElementById('add-todo');
let yetTodoList = document.getElementById('yet-todo-list'), id = 1;
let completedTodoList = document.getElementById('completed-todo-list')

todoText.addEventListener('keypress', (e) => {
	if (e.which === 13) {
		if (todoText.value != "") {
			addTodo();
		}
	}
});


document.addEventListener("click", (e) => {
	if (e.target.tagName == 'INPUT' && e.target.type == 'checkbox') {
		let id = document.getElementById(e.target.id);
		let removeElem = document.getElementById(e.target.id + '-wrapAll');
		removeElem.style.display = 'none';	
		completedTodoList.appendChild(removeElem);
		removeElem.style.display = 'block';
		completedTodoList.style.textDecoration = 'line-through';
		if (id.checked == false) {
			yetTodoList.appendChild(removeElem);
		}
	}
});

document.getElementById('add-todo-button').addEventListener('click', () => {
	if (todoText.value != '') {
		addTodo();
	}
})