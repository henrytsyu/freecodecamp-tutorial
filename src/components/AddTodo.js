import { useRef } from "react";

const AddTodo = ({ setTodos }) => {

  const inputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const text = e.target.elements.addTodo.value;
    const todo = {
      id: Math.random(),
      text,
      done: false
    };
    setTodos((todos) => {
      return todos.concat(todo);
    });
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodo;
