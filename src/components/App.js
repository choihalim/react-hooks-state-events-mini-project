import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function deleteTask(taskToDelete) {
    setTasks(tasks.filter(task => task.text !== taskToDelete));
  }

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }

  const updatedTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory} />
      <NewTaskForm categories={CATEGORIES.filter(cat => cat !== "All")} onTaskFormSubmit={addTask} />
      <TaskList tasks={updatedTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
