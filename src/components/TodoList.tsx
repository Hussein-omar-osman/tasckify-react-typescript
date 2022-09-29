import React from 'react';
import { Action, Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  disPatch: React.Dispatch<Action>;
}

const TodoList = ({ todos, disPatch }: Props) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          todos={todos}
          disPatch={disPatch}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
