import React from "react";

function TaskItem({ task, toggleTask }) {
  console.log(`Rendering task: ${task.name}`); // For demonstration purposes

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        {task.name} {task.completed ? "(Completed)" : ""}
      </label>
    </li>
  );
}

export default React.memo(TaskItem);
// export default TaskItem;
