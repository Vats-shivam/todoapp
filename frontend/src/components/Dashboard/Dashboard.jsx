//two columns of tasks unit done and to do
import {TasksTab} from "../";


export default function Dashboard(props) {

  return(
    <div className="flex gap-4 w-4/5">
    <TasksTab tasks={props.tasksToDo} Title="To-Do"/>
    <TasksTab tasks={props.tasksDone} Title="Done"/>
    </div>
    );
}