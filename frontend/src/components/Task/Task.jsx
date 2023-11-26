//Keeps a task card detail and a checkbox to mark it as done
// export default function Task() {
//   return <h1>Task</h1>;

import React, { useEffect, useState } from "react";
// import { FormContext } from "../../context/TaskContext";
//Task=[{isDone},{}]
//task.map(task,index)=>index===id?
const Task = (props) => {
  // const {tasks,setTasks}=React.useContext(FormContext);
  // console.log(setTaskObj);
  // console.log(props.task);
  // props.setTaskObj(props.task);

  return (
    <div className="bg-black flex w-4/5 mx-auto justify-between py-4 px-2 rounded-2xl my-4 text-white">
      <h3>{props.task.title}</h3>
      <input id="isComplete" type="checkbox" onChange={(e)=>{props.setTask({isDone:e.target.checked}) 
      console.log("DOne")}}/>
    </div>
  )
}
export default Task;