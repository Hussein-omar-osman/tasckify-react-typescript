import React from 'react';
import './styles.css';

const InputField = () => {
  return (
    <form className='input'>
      <input type='text' placeholder='Enter a Task' className='input__box' />
      <button type='button' className='input_submit'>
        GO
      </button>
    </form>
  );
};

export default InputField;
