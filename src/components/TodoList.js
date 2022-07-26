const TodoList = ({ todos, setTodos }) => {

  const toggler = (todo) => {
    const updated = todos.map(t => (
      t.id === todo.id ? { ...t, done: !t.done} : t
    ));
    setTodos(updated);
  };

  const rmItem = (todo) => {
    if (window.confirm("Do you want to delete this?")) {
      setTodos((prev) => (
        prev.filter(t => t.id !== todo.id)
      ));  
    }
  };

  if (!todos.length) {
    return (
      <p>No todos left!</p>
    )
  }
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} onDoubleClick={() => toggler(todo)}>
          <div style={{
            display: "inline",
            textDecoration: (todo.done ? 'line-through' : ''),
            paddingRight: 50
          }}>{todo.text}</div>
          <button style={{ display: "inline"}} onClick={() => rmItem(todo)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;