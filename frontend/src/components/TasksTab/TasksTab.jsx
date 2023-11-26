import { Task } from "../";
import React, { useCallback, useEffect, useMemo,useState} from "react";
import { FormContext } from "../../context/TaskContext";
// import {TaskContext} from "../../context/TaskContext";
// keeps the collection of tasks and renders the tasks tab will be used as to do and done
export default function TasksTab(props) {
  const { tasks, setTasks } = React.useContext(FormContext);
  

  // const temp=[];
  const handleStatus=useCallback((e,key)=>{
    const temp=[...tasks];
    temp[key].isDone=e.target.checked;
    setTasks(temp);
    console.log(temp[key])
  },[tasks])
  return (
    <div className="bg-white rounded-3xl w-1/2 text-black overflow-scroll TasksTab">
      <h2 className="text-center ">{props.Title}</h2>
      {
        tasks.map((task,index) => {
          if (task.isDone === true && props.Title === "Done")
          {
            return <Task k={index} task={task} handleChange={handleStatus}  />
          }
          else if (task.isDone === false && props.Title === "To-Do")
          {
            return <Task k={index} task={task} handleChange={handleStatus} />
          }// console.log(taskObj);

      })
    }
    </div>
  );
}