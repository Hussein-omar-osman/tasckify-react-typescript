import React, { useEffect, useRef, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Action, Todo } from '../model';

interface Props {
  todo: Todo;
  todos: Todo[];
  disPatch: React.Dispatch<Action>;
}

const SingleTodo = ({ todo, todos, disPatch }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    disPatch({ type: 'done', payLoad: id });
  };

  const handleDelete = (id: number) => {
    disPatch({ type: 'remove', payLoad: id });
  };

  const handleSubmitEdit = (e: { preventDefault: () => void }, id: number) => {
    e.preventDefault();
    disPatch({ type: 'edit', payLoad: { id: id, edit: editTodo } });
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className={`todos__single`}
      onSubmit={(e) => handleSubmitEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className='todos__single--text'
        />
      ) : todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}
      <div>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
