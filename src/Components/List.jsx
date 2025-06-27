import '../assets/css/List.css';

export default function List({ tasks, setTasks }) {
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);  
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
  };

  return (
    <ul>
      {tasks ? tasks.map((task, index) => (
        <li key={index} className="list-task">
          {task}
          <button className="delete" onClick={()=>{deleteTask(index)}}>Delete</button>
        </li>
      )):'not tasks'}
    </ul>
  );
}
