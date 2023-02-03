import './App.css';
import { useState } from "react";
import {Task} from "./Task"
import React from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  
  return (
    <div className="App">
      <div className="addTask">
        <div>
        <input onChange={handleChange} placeholder="First Name" class="box" /><br/>
        <input onChange={handleChange} placeholder="Last Name" class="box" /><br/>
        <input onChange={handleChange} placeholder="Age" class="box" /><br/>
        <input onChange={handleChange} placeholder="Gender" class="box" /><br/>
        <input onChange={handleChange} placeholder="Height" class="box" />
        <div>
        <button onClick={addTask}> Add! </button>
        </div>
        </div>  
      </div>
      
      <div className="list">
        {todoList.map((task) => {
           return <Task taskName={task.taskName} id={task.id} 
           deleteTask={deleteTask} />;
      })}
      </div>
    </div>
  );
}

export default App;