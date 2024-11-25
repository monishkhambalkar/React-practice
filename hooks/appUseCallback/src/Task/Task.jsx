import Recat, { useState, useCallback } from "react";
import TaskList from "./TaskList";

function Task() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn React", completed: false },
    { id: 2, name: "Write Code", completed: false },
  ]);

  const addTask = useCallback((taskName) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name: taskName, completed: false },
    ]);
  }, []);

  const toggleTask = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // Functions are not memoized
  // const addTask = (taskName) => {
  //   setTasks((prevTasks) => [
  //     ...prevTasks,
  //     { id: Date.now(), name: taskName, completed: false },
  //   ]);
  // };

  // const toggleTask = (taskId) => {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === taskId ? { ...task, completed: !task.completed } : task
  //     )
  //   );
  // };

  return (
    <div>
      <h1>TO-DO List</h1>
      <TaskList tasks={tasks} addTask={addTask} toggleTask={toggleTask} />
    </div>
  );
}

export default Task;
