import { Task } from "../";
import React, { useEffect, useMemo } from "react";
import { FormContext } from "../../context/TaskContext";
// import {TaskContext} from "../../context/TaskContext";
// keeps the collection of tasks and renders the tasks tab will be used as to do and done
export default function TasksTab(props) {
  const { tasks, setTasks } = React.useContext(FormContext);
  // const temp=[];
  const [taskObj, setTaskObj] = React.useState({ title: "", isDone: false });
  return (
    <div className="bg-white rounded-3xl w-1/2 text-black overflow-scroll TasksTab">
      <h2 className="text-center ">{props.Title}</h2>
      {
        tasks.map((task,index) => {
          if (task.isDone === true && props.Title === "Done")
            return <Task key={index} task={task} setTask={setTaskObj} />
          else if (task.isDone === false && props.Title === "To-Do")
            return <Task key={index} task={task} setTask={setTaskObj} />
          console.log(taskObj);

      })
    }
    </div>
  );
}