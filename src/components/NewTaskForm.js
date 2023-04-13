import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code");

  const renderCategories = categories.map(
    category => <option key={category}>{category}</option>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    onTaskFormSubmit({ details, category });

    // reset to default values
    setDetails("");
    setCategory("Code");
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e) => setDetails(e.target.value)} />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
