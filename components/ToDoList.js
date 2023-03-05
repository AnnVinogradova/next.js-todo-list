import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ toDos, setToDos, filteredToDos }) {

	return <>
		<div className="todo-container">
			<ul className="todo-list">
				{filteredToDos.map((toDo) => (
					<ToDo setToDos={setToDos}
						toDos={toDos}
						text={toDo.text}
						toDo={toDo}
						key={toDo.id} />
				))}
			</ul>

		</div>
	</>
}


