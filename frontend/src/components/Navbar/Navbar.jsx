//category fields like monday, tuesday, wednesday, etc.
import React ,{ useState } from 'react';
import addImage from '../../assets/image-gallery.png';
import { FormContext } from '../../context/TaskContext';
export default function Navbar(prop) {
  const {tasks,setTasks} = React.useContext(FormContext)
  const [projects,setProjects]=useState([]);
  const[opt,setOpt]=useState("");
  const [title,setTitle]=useState("");
  const handleAction=(e)=>{
    e.preventDefault();
    if(opt===""||title==="")
    {
      if(opt==="")
      alert("Please select a category");
      if(title==="")
      alert("Please enter a title");
      return;
    }
    else if(opt==="task")
    {
        setTasks((prev)=>([...prev,{title:title,isDone:false}]))
        setTitle("");
    }
    else if(opt==="project")
    {
      projects.push(title);
      setTitle("");
    }

    

  }
  return(
    <div className="w-1/5 text-white mx-4">
      <form action="" onSubmit={handleAction}>
      <select className="w-2/5 text-black" onChange={(e)=>{setOpt(e.target.value)}} defaultValue="">
        <option value="" disabled>
          Select a category
        </option>
        <option value="task">Task</option>
        <option value="project">Project</option>
      </select>
      <div className="flex h-7 text-black rounded-lg bg-white px-2">
      <input className='w-[90%] outline-none' type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      <img onClick={handleAction}src={addImage} alt="add-icon" />
      </div>
      </form>
      {projects.map((project)=>{return(
        <div className="text-center my-9 bg-slate-400 rounded-xl cursor-pointer">
          <h2 className='text-3xl'>{project}</h2>
        </div>
      )})}
    </div>
  );
}