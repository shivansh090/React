import React, {useState} from 'react'

const Tasks = ({task,index,Delete}) => {

    const [del, setdel]= useState(false);
    const toggledel = ()=>{
        setdel(del => !del);
        console.log(del);
    }
  return (
    <>
             
                <div className={`bg-slate-50 w-[100%] p-2 flex justify-around rounded-2xl ${del ? 'hidden' : ''} `} key={index}>
                    
                    {task} 
                    <button onClick={Delete} value={task}>Del</button>
                </div>
    </>
  )
}

export default Tasks