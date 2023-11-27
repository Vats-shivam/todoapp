import { Task } from "../";
import React, { useCallback, useEffect, useMemo,useState} from "react";
import { FormContext } from "../../context/TaskContext";
import { ProjectsContext } from '../../context/ProjectsContext';
import { ActiveProjectsContext } from '../../context/ActiveProjectContext';
// keeps the collection of tasks and renders the tasks tab will be used as to do and done
export default function TasksTab(props) {
  const {projects,setProjects}=React.useContext(ProjectsContext);
  const { tasks, setTasks } = React.useContext(FormContext);
  const {projectId,setProjectId,handleProjectId,isLoading,setIsLoading}=React.useContext(ActiveProjectsContext);
  // useEffect(()=>{if(projectId!==null){
  //   console.log("hello")
  //   setTasks(projects[projectId].task);
  // }},[tasks])

  useEffect(()=>{
    handleProjectId();
  },[])

  const handleStatus=useCallback((e,key)=>{
    const temp=[...tasks];
    temp[key].isDone=e.target.checked;
    setTasks(temp);
    console.log(temp[key])
  },[tasks])


  const handleDelete=(k)=>{
    setTasks((prev)=>(prev.filter((task,index)=>index!==k)))
  }


  React.useEffect(()=>{
    console.log(tasks);
    // projectId && setTasks(projects[projectId].task);
  },[tasks]);

  return (
    <div className="bg-white rounded-3xl w-1/2 text-black overflow-scroll TasksTab">
      <h2 className="text-center ">{props.Title}</h2>
      {
        tasks.map((task,index) => {
          if (task.isDone === true && props.Title === "Done")
          {
            return <Task k={index} task={task} handleDelete={handleDelete} handleChange={handleStatus}  />
          }
          else if (task.isDone === false && props.Title === "To-Do")
          {
            return <Task k={index} task={task} handleDelete={handleDelete} handleChange={handleStatus} />
          }

      })
    }
    </div>
  );
}