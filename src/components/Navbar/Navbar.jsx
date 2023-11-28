//category fields like monday, tuesday, wednesday, etc.
import React ,{ useState } from 'react';
import addImage from '../../assets/image-gallery.png';
import xmark from "../../assets/x-mark.png";
import { FormContext } from '../../context/TaskContext';
import { ProjectsContext } from '../../context/ProjectsContext';
import { ActiveProjectsContext } from '../../context/ActiveProjectContext';
export default function Navbar() {
  const {tasks,setTasks} = React.useContext(FormContext);
  const {projects,setProjects}=React.useContext(ProjectsContext);
  const[opt,setOpt]=useState("");
  const [title,setTitle]=useState("");
  const {projectId,setProjectId,setIsLoading}=React.useContext(ActiveProjectsContext);
  
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
      setIsLoading(true);
      if(projectId===null)
      setTasks((prev)=>([...prev,{title:title,isDone:false}]));
      else
      {
        let temp=[...projects];
        temp[projectId].task.push({title:title,isDone:false});
        setProjects(temp);
        setTasks(temp[projectId].task);
        console.log(tasks);
      }
      setTitle("");
      setIsLoading(false);  
    }
    else if(opt==="project")
    {
      setProjects((prev)=>[...prev,{project:title,task:[]}]);
      setTitle("");
    }
  }
  const handleActiveProject=(index)=>{
    setProjectId(index)
    setTasks(projects[index].task);
  }

  const handleDeleteProject=(e,index)=>{
    e.stopPropagation();
    const updatedProject=[...projects];
    updatedProject.splice(index,1);
    setProjects(updatedProject);
    setProjectId(null);
  }

  
  console.log(projectId);
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
      {projects.map((project,index)=>{return(
        <>
        <div className={`${index===projectId?"active":""} flex items-center justify-center py-2 h-8 text-center my-9 bg-slate-400 rounded-xl cursor-pointer`}>
          <div className="flex justify-between w-full items-center" onClick={()=>handleActiveProject(index)}>
          <h2 className='text-3xl w-4/5'>{project.project}</h2>
          <img src={xmark} onClick={(e)=>handleDeleteProject(e,index)} className="w-4 h-4 mx-2" alt="delete-btn" />
          </div>
        </div>
        </>
      )})}
    </div>
  );
}