import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add your tasks here" 
        style={{ borderWidth: '3px', borderStyle: 'solid', width: '400px'}}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
