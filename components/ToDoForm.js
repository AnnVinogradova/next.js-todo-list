import { useState } from "react";

export default function ToDoForm({ handleAddToDo }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!text) return;
    const newToDo = { text, completed: false };
    handleAddToDo(newToDo);
    setText("");
  }

  return <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
</>;
}