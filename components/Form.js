import React from "react";

export default function Form() {

	const [ToDos, setToDos] = React.useState([]),
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
		</>
	)
}

