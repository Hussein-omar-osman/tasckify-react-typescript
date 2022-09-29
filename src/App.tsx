import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  // console.log(todo);
  // console.log(todos);

  const handleAdd = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (todo) {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), todo: todo, isDone: false },
      ]);
      setTodo('');
    }
  };

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
