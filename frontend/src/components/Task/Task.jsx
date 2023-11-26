//Keeps a task card detail and a checkbox to mark it as done
import edit from "../../assets/edit.png";
import xmark from "../../assets/x-mark.png";

import React, { useEffect, useState } from "react";
import { FormContext } from "../../context/TaskContext";

const Task = (props) => {
  const { tasks, setTasks } = React.useContext(FormContext);

  return (
    <div className="bg-green-700 flex w-4/5 h-12 mx-auto align-middle content-center justify-between py-4 px-2 rounded-2xl my-4 text-white">
      <h3>{props.task.title}</h3>
      <div className="flex">
      <img src={edit} alt="" />
      <img src={xmark} onClick={()=>props.handleDelete(props.k)} alt="delete-btn" />
      <input id="isComplete" type="checkbox" checked={props.task.isDone} onChange={(e)=>props.handleChange(e,props.k)}/>
      </div>
    </div>
  )
}
export default Task;