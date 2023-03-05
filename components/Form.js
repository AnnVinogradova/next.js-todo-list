import React from "react";


export default function Form({ setInputText, toDos, setToDos, inputText,setStatus }) {

	const inputTextHandler = (evt) => {
		setInputText(evt.target.value);
	};

	const submitTodoHandler = (evt) => {
		evt.preventDefault();
		setToDos([...toDos,
		{ text: inputText, completed: false, id: Math.random() * 1000 },
		])
		setInputText("");
	};

	const statusHandler = (evt) => {
		setStatus(evt.target.value);
	}
	return <>
		<form>
			<input onChange={inputTextHandler} value={inputText} type="text" className="todo-input"></input>
			<button onClick={submitTodoHandler} className="todo-button" type="submit">+</button>
			<div className="select">
				<select onChange={statusHandler} name="toDos" className="filter-todo">
					<option value="all">Все задачи</option>
					<option value="completed">Завершенные задачи</option>
					<option value="uncompleted">Не завершённые задачи</option>
				</select>
			</div>
		</form>
	</>
}


