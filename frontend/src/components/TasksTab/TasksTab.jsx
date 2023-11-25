import {Task} from "../";

//keeps the collection of tasks and renders the tasks tab will be used as to do and done
export default function TasksTab(props) {
  return(
    <div className="bg-white rounded-3xl w-1/2 text-black">
    <h2 className="text-center ">{props.Title}</h2>
    {
      props.tasks.map((task) => {
        return <Task title={task.title}/>
      })
    }
    </div>
  );
}