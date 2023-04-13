import React from "react";

function Task({category, text, onDeleteTask}) {

  function deleteBtnClicked() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteBtnClicked} className="delete">X</button>
    </div>
  );
}

export default Task;
