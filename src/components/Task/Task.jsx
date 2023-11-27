//Keeps a task card detail and a checkbox to mark it as done
import edit from "../../assets/edit.png";
import xmark from "../../assets/x-mark.png";
import {Modal} from "../"

import React, { useEffect, useState } from "react";
import { FormContext } from "../../context/TaskContext";
import { ModalContext } from "../../context/ModalContext";

const Task = (props) => {
  const { tasks, setTasks } = React.useContext(FormContext);
  const [isOpen,setIsOpen]=useState(false);
  const {modalActive,setModalActive}=React.useContext(ModalContext);
  const openModal=()=>{
    setModalActive(true);
    setIsOpen(true);
  }

  const closeModal=()=>{
    setModalActive(false);
    setIsOpen(false);
  }

  const handleEdit=(edittedTask,id)=>{
    console.log(tasks,edittedTask,id);
    const updatedTasks=[...tasks];
    updatedTasks[id].title=edittedTask;
    setTasks(updatedTasks);
    setIsOpen(false);
    setModalActive(false);
  }

  return (
    <div className="bg-green-700 flex w-4/5 h-12 mx-auto align-middle content-center justify-between py-4 px-2 rounded-2xl my-4 text-white">
      <h3>{props.task.title}</h3>
      <div className="flex">
      <img className="px-2" src={edit} onClick={openModal}alt="edit-btn" />
      <img className="px-2" src={xmark} onClick={()=>props.handleDelete(props.k)} alt="delete-btn" />
      <input className="px-2" id="isComplete" type="checkbox" checked={props.task.isDone} onChange={(e)=>props.handleChange(e,props.k)}/>
      </div>
      <Modal
      value={props.task.title}
      id={props.k}
      isOpen={isOpen}
      closeModal={closeModal}
      handleEdit={handleEdit}
      />
    </div>
  )
}
export default Task;