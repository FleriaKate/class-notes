import React ,{useState,useEffect }from 'react';
import './App.css';

const App = () => {
    const [tasks,setTasks] = useState([]);
    const [description,setDescription] = useState("");
    const [completed,] = useState(false);

    const addTask =(e) => {
      e.preventDefault();
      setTasks([
        ...tasks,
        {description,completed}
      ])
      setDescription('');
    }

    const removeTask = (description) => {
      setTasks(tasks.filter((task) => task.description !== description))

    }

    useEffect(() => {
      const tasksData = JSON.parse(localStorage.getItem('tasks'));
      if (tasksData) {
        setTasks(tasksData)
      }
    },[]);
  
    useEffect(() => {
      const tasksData = JSON.parse(localStorage.getItem('tasks'));
      if (tasksData) {
        setTasks(tasksData)
      }
    },[]);

    useEffect(() =>{
      localStorage.setItem('tasks',JSON.stringify(tasks));
    },[tasks]);

   return (
    <div>
      <h1>Tasks </h1>
      {tasks.map((task)=>{
        return (
        <div key={task.description}>
          <h3>{task.description}</h3>
          <button onClick={() =>removeTask(task.description)}>x</button>
          </div>
        )
      })}
      <p>Add Task</p>
      <form onSubmit={addTask}>
        <input value={description} onChange={(e)=> setDescription(e.target.value)}/>
        <button>Add Task</button>
      </form>
    </div>
  )
}

  
    
       

export default App;
