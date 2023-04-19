
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

	const dragStartHandler = (e) => {
		e.dataTransfer.setData("text/plain", e.target.id);
		e.target.classList.add("dragging");
	};

	const dragEndHandler = (e) => {
		e.target.classList.remove("dragging");
	};

	const dragOverHandler = (e) => {
		e.preventDefault();
		e.target.classList.add("over");
	};

	const dragLeaveHandler = (e) => {
		e.target.classList.remove("over");
	};

	const dropHandler = (e) => {
		e.preventDefault();
		const droppedElementId = e.dataTransfer.getData("text/plain");
		const droppedElement = document.getElementById(droppedElementId);
		const newOrder = Array.from(e.target.parentNode.children).indexOf(e.target);
		const oldOrder = Array.from(e.target.parentNode.children).indexOf(droppedElement);
		if (newOrder > oldOrder) {
			if (e.target.nextSibling) {
			  e.target.parentNode.insertBefore(droppedElement, e.target.nextSibling);
			} else {
			  e.target.parentNode.appendChild(droppedElement);
			}
		  } else {
			e.target.parentNode.insertBefore(droppedElement, e.target);
		  }
		e.target.classList.remove("over");
	};

	return <>
		<div className="todo" draggable="true" onDragStart={dragStartHandler} onDragEnd={dragEndHandler}>
			<li id={toDo.id} className={`todo-item ${toDo.completed ? "completed" : ""}`}
				onDragOver={dragOverHandler}
				onDragLeave={dragLeaveHandler}
				onDrop={dropHandler}>
				{text}</li>
			<button onClick={completeHandler} className="complete-btn">Завершенные</button>
			<button onClick={deleteHandler} className="trash-btn">Удалить</button>
		</div>
	</>
}

