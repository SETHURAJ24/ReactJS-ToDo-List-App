import React, { useState } from 'react';
import Header from './Header';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import FilterBar from './FilterBar';
import Clock from './Clock';  
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = () => {
    if (filter === 'Completed') {
      return tasks.filter(task => task.completed);
    }
    if (filter === 'Incomplete') {
      return tasks.filter(task => !task.completed);
    }
    return tasks;
  };

  return (
    <div className="app">
      <Header />
      <Clock /> {}
      <TaskInput addTask={addTask} />
      <FilterBar setFilter={setFilter} />
      <TaskList 
        tasks={filteredTasks()} 
        toggleTaskCompletion={toggleTaskCompletion} 
        deleteTask={deleteTask} 
      />
    </div>
  );
};

export default App;
