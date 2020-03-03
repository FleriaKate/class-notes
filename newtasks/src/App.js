import React ,{useState}from 'react';

import './App.css';

const App = () => {
    const [tasks,setTasks] = useState([]);
    const [description,setDescription] = useState("");
    const [completed,setCompleted] = useState(false);

    const addTask =(e) => {
      e.preventDefault();
      setTasks([
        ...tasks,
        {description,completed}
      ])
      setDescription('');
      setCompleted(false)
    }
  
   return (
    <div>
      <h1>Tasks App</h1>
      {tasks.map((task)=>{
        return (
        <div>
          <h1>{task.description}</h1>
          <h2>{task.completed}</h2>
          </div>
        )
      })}
      <p>Add Task</p>
      <form onSubmit={addTask}>
        <input value={description} onChange={(e)=> setDescription(e.target.value)}/>
        <textarea value={completed} onChange={(e)=> setCompleted(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  )

}

  
    
       

export default App;
