import React, { useReducer, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Action, Todo } from './model';

const TodoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        { id: Date.now(), todo: action.payLoad, isDone: false },
      ];
    case 'remove':
      return state.filter((todo) => todo.id !== action.payLoad);
    case 'done':
      return state.map((todo) =>
        todo.id === action.payLoad ? { ...todo, isDone: !todo.isDone } : todo
      );
    case 'edit':
      return state.map((todo) =>
        todo.id === action.payLoad.id
          ? { ...todo, todo: action.payLoad.edit }
          : todo
      );

    default:
      return state;
  }
};

function App() {
  const [todo, setTodo] = useState<string>('');
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [state, disPatch] = useReducer(TodoReducer, []);

  const handleAdd = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (todo) {
      disPatch({ type: 'add', payLoad: todo });
      setTodo('');
    }
  };

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={state} disPatch={disPatch} />
    </div>
  );
}

export default App;
