
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

export default function ToDoList() {
  const [toDos, setToDos] = useState([]);

  function handleAddToDo(newToDo) {
    setToDos([...toDos, newToDo]);
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

  function handleDeleteAll() {
    setToDos([]);
  }

  function handleDrop(draggedIndex, index) {
    if (draggedIndex === index) return;
    const newToDos = [...toDos];
    [newToDos[draggedIndex], newToDos[index]] = [newToDos[index], newToDos[draggedIndex]];
    setToDos(newToDos);
  }

  return <>
    <div className="container">
      <ToDoForm handleAddToDo={handleAddToDo} />
      <ul>
        {toDos.map((toDo, index) => (
          <ToDoItem
            key={index}
            index={index}
            toDo={toDo}
            handleToggleCompleted={handleToggleCompleted}
            handleDelete={handleDelete}
            handleMoveUp={handleMoveUp}
            handleMoveDown={handleMoveDown}
            handleDropItem={handleDrop}  
            newToDos={toDos}
          />
        ))}
      </ul>
      {toDos.length > 0 && (
        <button className="btn-delete-all" onClick={handleDeleteAll}>
          Удалить все
        </button>
      )}
    </div>
  </>;
}