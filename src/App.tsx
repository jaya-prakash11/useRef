import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');

  let TextRef = useRef(null);
  const onButtonClick = () => {
    console.log(TextRef.current.value);
    setName(TextRef.current.value);
    TextRef.current.value = '';
    TextRef.current.focus();

  };

  return (
    <div>
      {name}
      <input ref={TextRef} type="text" placeholder="Enter someTHing"></input>
      <button onClick={onButtonClick}>Click</button>
    </div>
  );
}
