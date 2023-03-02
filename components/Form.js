import React from 'react';
import ToDo from "./ToDo";

export default function Form() {

	const [ToDos, setToDos] = React.useState([{ id: 0, str: "Купить корм" },
	{ id: 1, str: "Погладить мурзянку" }]),
		[text, setText] = React.useState("");



	function addTodo() {
		setToDos([...ToDos, { str: text, id: Date.now() }]);
		setText("");
	}


	function deleteButton() {
		setToDos((old) => old.filter((item) => !item.checked));
	}

	return (

		<>
			<div className="container">
				<input type="text" value={text} placeholder="Введите новую задачу"
					onInput={(evt) => setText(evt.target.value)}
				/>
				<button onClick={addTodo}>Добавить</button>
				<button onClick={deleteButton}>Удалить</button>
			</div>
			<ToDo />
		</>
	)
}

