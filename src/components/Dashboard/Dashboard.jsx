//two columns of tasks unit done and to do
import {TasksTab} from "../";


export default function Dashboard() {

  return(
    <div className="flex gap-4 w-4/5">
    <TasksTab Title="To-Do"/>
    <TasksTab Title="Done"/>
    </div>
    );
}