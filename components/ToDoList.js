import { useState } from "react";
export default function ToDoList() {
	const [toDos, setToDos] = useState([]);
    

  function handleAddToDo(event) {
    event.preventDefault();
    const text = event.target.elements.todo.value;
    const newToDo = { text, completed: false, isChecked: false };
    setToDos([...toDos, newToDo]);
    event.target.reset();
  }

  function handleToggleCompleted(index) {
    const newToDos = [...toDos];
    newToDos[index].completed = !newToDos[index].completed;
    setToDos(newToDos);
  }

  function handleDelete(index) {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  }

  function handleMoveUp(index) {
    if (index === 0) return;
    const newToDos = [...toDos];
    [newToDos[index - 1], newToDos[index]] = [newToDos[index], newToDos[index - 1]];
    setToDos(newToDos);
  }

  function handleMoveDown(index) {
    if (index === toDos.length - 1) return;
    const newToDos = [...toDos];
    [newToDos[index], newToDos[index + 1]] = [newToDos[index + 1], newToDos[index]];
    setToDos(newToDos);
  }

  function handleDragStart(event, index) {
    event.dataTransfer.setData("index", index);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event, index) {
    const draggedIndex = event.dataTransfer.getData("index");
    if (draggedIndex === index) return;
    const newToDos = [...toDos];
    [newToDos[draggedIndex], newToDos[index]] = [newToDos[index], newToDos[draggedIndex]];
    setToDos(newToDos);
  }


  function handleDeleteAll() {
    setToDos([]);
  }


  return (
    <div className="container">
      <h1>To Do List</h1>
      <form onSubmit={handleAddToDo}>
        <input type="text" name="todo" placeholder="Add a new task..." />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index} draggable onDragStart={(event) => handleDragStart(event, index)} onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, index)}>
            <input type="checkbox" checked={toDo.completed} onChange={() => handleToggleCompleted(index)} />
            <label>{toDo.text}</label>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
            <button className="move-up-btn" onClick={() => handleMoveUp(index)}>
              Move Up
            </button>
            <button className="move-down-btn" onClick={() => handleMoveDown(index)}>
              Move Down
            </button>
            {toDo.isChecked && <span> (selected)</span>}
          </li>
        ))}
      </ul>
      {toDos.length > 0 && <button className="btn-delete-all" onClick={handleDeleteAll}>Удалить все</button>}
    </div>
  );
}