//Keeps a task card detail and a checkbox to mark it as done
// export default function Task() {
//   return <h1>Task</h1>;

import React, { useState } from "react";

// }
const Task = (props) => {
  const title="Task 1";
  return (
    <div className="bg-black flex w-4/5 mx-auto justify-between py-4 px-2 rounded-2xl my-4 text-white">
    <h3>{props.title}</h3>
    <input id="isComplete" type="checkbox" />
    </div>
  )
}
export default Task;