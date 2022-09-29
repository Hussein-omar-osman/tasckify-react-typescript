import React from 'react';
import { Todo } from '../model';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return <div>TodoList</div>;
};

export default TodoList;
