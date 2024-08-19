import React, { useState } from "react";
import './app.css';
import Tasks from "./Tasks";

const App = () => {
  // const tasks= ['Add', 'Sub', 'Mul', 'Div', 'Mod'];
  const date =  new Date();
  const [tasks, setTasks]=useState(['Hello']);
  const addTask=(e)=>{
      e.preventDefault();
      setTasks([
        ...tasks,
        e.target.input.value
      ])
      e.target.input.value='';
  }

  const Delete=(e)=>{
    const newtasks = tasks.filter((task) => task !== e.target.value);

    setTasks(newtasks);
  }
  return (
    <div className="flex  justify-center items-center flex-col">
      <div className="flex justify-center">
        <h1 className='font-semibold text-4xl' >To Do</h1>
      </div>
      <div className="Container gap-2 p-3 flex flex-col min-h-[500px] w-[400px] bg-slate-200">
            <h1 className="flex justify-center">
              {date.toLocaleDateString()}
            </h1>
            <div className="w-[100%]">
              <form onSubmit={addTask}>
                  <input name="input" className=' bg-orange-100 w-[80%] p-2' placeholder="Add Task"/>
                  <button type="submit" className="p-2 w-[20%] bg-purple-400">Add</button>
              </form>
            </div>

            {
              tasks.map((task,index) => <Tasks task={task}index={index}  Delete={Delete} />)
            }
             
      </div>
    </div>
  )
}

export default App;