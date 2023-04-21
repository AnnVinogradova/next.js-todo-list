
export default function ToDoItem({
  index,
  toDo,
  handleToggleCompleted,
  handleDelete,
  handleMoveUp,
  handleMoveDown,
  handleDropItem, 
 
}) {
  function handleDragStart(event) {
    event.dataTransfer.setData("index", index);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    const draggedIndex = event.dataTransfer.getData("index");
    handleDropItem(draggedIndex, index); 
  }

  return <>
    <li draggable onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop}>
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
    </li>
</>;
}
