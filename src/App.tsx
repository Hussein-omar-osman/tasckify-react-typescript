import React from 'react';
import logo from './logo.svg';
import './App.css';

type Person = {
  name: string;
  age: number | boolean;
};

interface General {
  name: string;
  age: number;
}

interface Male extends General {
  gender: 'Male';
  sports: string[];
}

const person: Person = {
  name: 'hussein',
  age: true,
};

let hussein: Male = {
  name: 'hussein',
  age: 22,
  gender: 'Male',
  sports: ['vfvfd'],
};

console.log(person.age);
console.log(person.name);
console.log(hussein.age);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
