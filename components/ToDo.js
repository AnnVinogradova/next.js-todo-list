import React from "react";

export default function ToDo({ text, toDo, toDos, setToDos }) {
	const deleteHandler = () => {
		setToDos(toDos.filter((el) => el.id !== toDo.id));
	};

	const completeHandler = () => {
		setToDos(toDos.map((item) => {
			if (item.id === toDo.id) {
				return {
					...item, completed: !item.completed
				}
			}
			return item;
		}))
	}
	return <>
		<div className="todo">
			<li className={`todo-item ${toDo.completed ? "completed" : ""}`}>{text}</li>
			<button onClick={completeHandler} className="complete-btn">Завершенные</button>
			<button onClick={deleteHandler} className="trash-btn">Удалить</button>
		</div>
	</>
}

