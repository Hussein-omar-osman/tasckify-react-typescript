import React from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className='input'>
      <input
        type='text'
        placeholder='Enter a Task'
        className='input__box'
        name='todo'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type='button' className='input_submit'>
        GO
      </button>
    </form>
  );
};

export default InputField;
