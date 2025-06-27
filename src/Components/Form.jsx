import { useEffect, useState } from "react";
import '../assets/css/Form.css';
import List from './List';

export default function Form() {
  const [task, setTask] = useState("");
  const [info, setInfo] = useState([]);

  // This useEffect loads tasks from localStorage when the page is loaded or refreshed
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setInfo(JSON.parse(savedTasks)); // Parsing saved data from localStorage
    }
  }, []); // This runs once on page load

  // This useEffect saves tasks to localStorage whenever 'info' changes
  useEffect(() => {
    if (info.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(info)); // Save updated tasks to localStorage
    }
  }, [info]); // Runs every time 'info' state is updated

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  };

  const addTask = () => {
    if (task.trim() !== "") {
      setInfo((prevInfo) => [...prevInfo, task]); // Add task to the array
      setTask(""); // Clear input field after adding the task
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task..."
        />
        <button type="submit" className="add">Add</button>
      </form>
      <List tasks={info} setTasks={setInfo} />
    </>
  );
}
